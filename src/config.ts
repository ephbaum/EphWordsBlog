export const SITE = {
  website: "https://ephwords.com/",
  author: "Eph Baum",
  profile: "https://ephwords.com/",
  desc: "A place where I shout into the void.",
  title: "Eph Words",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 20,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/ephbaum/EphWordsBlog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Los_Angeles", // Pacific Time
} as const;

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ephbaum",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/eph_baum/",
    linkTitle: `${SITE.author} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ephbaum",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:eph_baum@outlook.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ephbaum",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://www.twitch.tv/triplefbomb",
    linkTitle: `${SITE.author} on Twitch`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@epharound",
    linkTitle: `${SITE.author} on YouTube`,
    active: true,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/ephbaum",
    linkTitle: `${SITE.author} on CodePen`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/_fbomb",
    linkTitle: `${SITE.author} on Discord`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/ephbaum",
    linkTitle: `${SITE.author}'s (real account) on Reddit`,
    active: true,
  },
  {
    name: "Steam",
    href: "https://steamcommunity.com/id/fff-bomb/",
    linkTitle: `${SITE.author} on Steam`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://hachyderm.io/@ephbaum",
    linkTitle: `${SITE.author} on Mastodon`,
    active: true,
  },
];
