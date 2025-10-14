# AstroPaper v5 Theme Guide

This blog uses [AstroPaper v5.5.0](https://github.com/satnaing/astro-paper) by [Sat Naing](https://satnaing.dev/).

## Key Features

- Pure Astro components (no React)
- Tailwind CSS v4
- Pagefind static search
- Enhanced code highlighting with Shiki transformers
- Automatic OG image generation
- Light/dark mode
- SEO-friendly
- Responsive & accessible

## Configuration

### Site Config (`src/config.ts`)

```typescript
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
  timezone: "America/Los_Angeles",
} as const;
```

### Social Links

Social links are configured in `src/config.ts` with an `active` flag:

```typescript
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ephbaum",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  // ... more social links
];
```

Social icons are defined in `src/assets/socialIcons.ts` as SVG strings.

## Creating New Posts

### Location

Place blog posts in `src/data/blog/` or use date-based organization like `src/data/blog/YYYY/MM/`.

### Frontmatter

```yaml
---
title: Your Post Title
author: Eph Baum
pubDatetime: 2024-10-14T12:00:00Z
postSlug: your-post-slug # optional, auto-generated from title
featured: false
draft: false
tags:
  - tag1
  - tag2
ogImage: @/assets/images/your-image.png # or relative path in frontmatter
description: Your post description for SEO and excerpts
canonicalURL: https://example.com/original # optional
---
```

### Required Fields

- `title` - Post title (h1)
- `description` - SEO description and excerpt
- `pubDatetime` - Published datetime in ISO 8601 format

### Image Paths

- **In frontmatter (ogImage)**: Use relative paths based on directory depth
  - Root level posts: `../../assets/images/image.png`
  - Year/month organized: `../../../../assets/images/YYYY/MM/image.png`
  
- **In markdown content**: Use `@/assets/images/` alias
  - Example: `![Alt text](@/assets/images/example.jpg)`

Images should be placed in `src/assets/images/` for Astro's image optimization.

### Table of Contents

Add an h2 heading "Table of contents" where you want the TOC to appear:

```markdown
## Table of contents
```

The theme will automatically generate the TOC at that location.

### Code Blocks

The theme supports enhanced code highlighting with Shiki transformers:

````markdown
```js
// [!code highlight]
console.log('This line will be highlighted');

// [!code ++]
const added = 'new line';

// [!code --]
const removed = 'old line';
```
````

## Styling with Tailwind v4

### Custom Colors

Defined in `src/styles/base.css`:

```css
:root,
html[data-theme="light"] {
  --background: 251, 254, 251;
  --foreground: 40, 39, 40;
  --accent: 0, 108, 172;
  --muted: 230, 230, 230;
  --border: 236, 233, 233;
}

html[data-theme="dark"] {
  --background: 33, 39, 55;
  --foreground: 234, 237, 243;
  --accent: 255, 107, 1;
  --muted: 52, 63, 96;
  --border: 171, 75, 8;
}
```

Use with utility classes: `bg-background`, `text-foreground`, `text-accent`, etc.

### Custom Utilities

```css
@utility max-w-app {
  @apply max-w-3xl;
}
```

## Build & Deploy

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

This runs:
1. `astro check` - TypeScript checking
2. `astro build` - Build static site
3. `pagefind --site dist` - Generate search index
4. Copy pagefind to public directory

### Preview

```bash
npm run preview
```

## Customizations

### Current Customizations

- Custom homepage intro text
- 12 active social links with custom icons
- Custom About page
- Date-based blog post organization (YYYY/MM/)
- Umami analytics (production only)
- 20 posts per page
- Pacific timezone

### Files Modified

- `src/config.ts` - Site config and social links
- `src/pages/index.astro` - Homepage content
- `src/pages/about.md` - About page
- `src/components/Socials.astro` - Social icons rendering
- `src/assets/socialIcons.ts` - SVG icon definitions
- `src/components/UmamiTracking.astro` - Analytics
- `src/styles/base.css` - Custom colors

## Useful Links

- [AstroPaper Documentation](https://github.com/satnaing/astro-paper)
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Pagefind Documentation](https://pagefind.app/)
- [Shiki Transformers](https://shiki.style/packages/transformers)

