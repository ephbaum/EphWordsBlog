import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import kebabCase from "lodash.kebabcase";

dayjs.extend(utc);
dayjs.extend(timezone);

const SITE_TIMEZONE = "America/Los_Angeles";
const DEFAULT_TITLE = "untitled";

function printHelp() {
  const cmd = `node scripts/new-post.mjs`;
  console.log(
    [
      "Create a new blog post scaffold.",
      "",
      `Usage:`,
      `  ${cmd}`,
      `  ${cmd} --title "My Post Title" --date 2026-01-19`,
      `  ${cmd} "My Post Title" 2026-01-19`,
      "",
      "Options:",
      "  -t, --title   Post title (optional; defaults to 'untitled')",
      "  -d, --date    Date in YYYY-MM-DD (optional; defaults to today in America/Los_Angeles)",
      "  -h, --help    Show help",
      "",
      "Notes:",
      "  - If run with no args, it prompts interactively (requires a TTY).",
      "  - If any args are provided, it runs headlessly; omitted values fall back to defaults (title: 'untitled', date: today in America/Los_Angeles).",
    ].join("\n")
  );
}

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function parseArgs(argv) {
  const positionals = [];
  /** @type {string | undefined} */
  let title;
  /** @type {string | undefined} */
  let date;
  let help = false;

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "-h" || arg === "--help") {
      help = true;
      continue;
    }

    if (arg === "-t" || arg === "--title") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) {
        return { help: false, error: `${arg} requires a value` };
      }
      title = next;
      i++;
      continue;
    }
    if (arg.startsWith("--title=")) {
      title = arg.slice("--title=".length);
      continue;
    }

    if (arg === "-d" || arg === "--date") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) {
        return { help: false, error: `${arg} requires a value` };
      }
      date = next;
      i++;
      continue;
    }
    if (arg.startsWith("--date=")) {
      date = arg.slice("--date=".length);
      continue;
    }

    if (arg.startsWith("-")) {
      return { help: false, error: `Unknown option: ${arg}` };
    }

    positionals.push(arg);
  }

  if (!title && positionals.length >= 1) {
    title = positionals[0];
  }
  if (!date && positionals.length >= 2) {
    date = positionals[1];
  }
  if (positionals.length > 2) {
    return {
      help: false,
      error: `Too many positional args. Expected: [title] [YYYY-MM-DD]`,
    };
  }

  return { help, title, date };
}

async function promptWithDefault(rl, prompt, defaultValue) {
  const answer = (await rl.question(prompt)).trim();
  return answer.length > 0 ? answer : defaultValue;
}

function isValidDateOnly(value) {
  // YYYY-MM-DD (date only)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = dayjs(value, "YYYY-MM-DD", true);
  return d.isValid();
}

function buildPostTemplate({ title, pubDatetimeIsoUtc, year, month }) {
  const imgBase = `@/assets/images/${year}/${month}`;
  const ogImageFrontmatterExample = `../../../../assets/images/${year}/${month}/TODO-og-image.png`;

  return `---\n` +
    `title: ${title}\n` +
    `pubDatetime: ${pubDatetimeIsoUtc}\n` +
    `featured: false\n` +
    `draft: true\n` +
    `tags: []\n` +
    `description: TODO: One-sentence description for previews/SEO.\n` +
    `---\n\n` +
    `> Optional: if you want a custom Open Graph image, add an \`ogImage\` to the frontmatter above, e.g.:\n` +
    `> \`ogImage: ${ogImageFrontmatterExample}\`\n` +
    `> If omitted, the site will generate an OG image dynamically.\n\n` +
    `## TODO: Opening\n\n` +
    `Write your intro here.\n\n` +
    `## TODO: Image 1\n\n` +
    `![TODO alt text for image 1](${imgBase}/TODO-image-1.png)\n\n` +
    `## TODO: Main section\n\n` +
    `- TODO: Key point #1\n` +
    `- TODO: Key point #2\n` +
    `- TODO: Key point #3\n\n` +
    `## TODO: Image 2\n\n` +
    `![TODO alt text for image 2](${imgBase}/TODO-image-2.png)\n\n` +
    `## TODO: Closing\n\n` +
    `Wrap up / takeaway.\n`;
}

async function main() {
  const argv = process.argv.slice(2);
  const parsed = parseArgs(argv);
  if ("error" in parsed) {
    fail(parsed.error);
    printHelp();
    return;
  }
  if (parsed.help) {
    printHelp();
    return;
  }

  const isInteractive = process.stdin.isTTY && process.stdout.isTTY;
  const shouldPrompt = argv.length === 0;

  if (shouldPrompt && !isInteractive) {
    fail(
      "No args provided and no TTY detected. Run interactively, or pass --title and/or --date for headless mode."
    );
    return;
  }

  const rl = readline.createInterface({ input, output });

  try {
    const nowPtForDefaults = dayjs().tz(SITE_TIMEZONE);
    const defaultDate = nowPtForDefaults.format("YYYY-MM-DD");

    const title = shouldPrompt
      ? await promptWithDefault(rl, `Title [${DEFAULT_TITLE}]: `, DEFAULT_TITLE)
      : (parsed.title?.trim() || DEFAULT_TITLE);
    const slug = kebabCase(title) || DEFAULT_TITLE;

    const dateOnly = shouldPrompt
      ? (
        await rl.question(`Date (YYYY-MM-DD) [${defaultDate}]: `)
      ).trim() || defaultDate
      : (parsed.date?.trim() || defaultDate);

    if (!isValidDateOnly(dateOnly)) {
      fail(`Invalid date '${dateOnly}'. Expected YYYY-MM-DD.`);
      return;
    }

    // Combine selected date with *current* time-of-day in PT, then store UTC ISO.
    const currentTime = dayjs().tz(SITE_TIMEZONE).format("HH:mm");
    const localDatetimePt = dayjs.tz(
      `${dateOnly} ${currentTime}`,
      "YYYY-MM-DD HH:mm",
      SITE_TIMEZONE
    );
    if (!localDatetimePt.isValid()) {
      fail("Failed to compute datetime in America/Los_Angeles.");
      return;
    }

    const year = localDatetimePt.format("YYYY");
    const month = localDatetimePt.format("MM");
    const day = localDatetimePt.format("DD");
    const pubDatetimeIsoUtc = localDatetimePt.utc().toISOString();

    const postDir = path.join("src", "data", "blog", year, month);
    const assetsDir = path.join("src", "assets", "images", year, month);
    await mkdir(postDir, { recursive: true });
    await mkdir(assetsDir, { recursive: true });

    const fileName = `${year}-${month}-${day}-${slug}.md`;
    const postPath = path.join(postDir, fileName);

    try {
      await access(postPath);
      fail(`Refusing to overwrite existing post: ${postPath}`);
      return;
    } catch (err) {
      // Strict check:
      // - ENOENT => file doesn't exist (safe to proceed)
      // - anything else => real error (fail)
      const code = err?.code;
      if (code !== "ENOENT") {
        const message =
          err instanceof Error ? err.message : "Unknown filesystem error";
        fail(
          `Failed checking whether post already exists: ${postPath}${code ? ` (code: ${code})` : ""
          }\n${message}`
        );
        return;
      }
    }

    const markdown = buildPostTemplate({
      title,
      pubDatetimeIsoUtc,
      year,
      month,
    });

    await writeFile(postPath, markdown, "utf8");

    console.log("Scaffolded new post:");
    console.log(`- ${postPath}`);
    console.log(`- ${assetsDir}/`);
  } finally {
    rl.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});
