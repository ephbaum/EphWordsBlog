# Eph Words dot Com

Since officially changing my name to Eph, I've thought a lot about the humor behind having a letter for a first name and the ways I could "use it":

- Eph Words
- Eph Around
- Eph This/That

These, and many others, have to come mind over the years.

## A Blog of Sorts

I've had a ["dev" blog](https://ephbaum.dev) for quite a while now but have not had a _personal_ blog for a great many years. Mostly that's an artifact of not feeling as though I've had time to really create or maintain one, but also there's always the ever present sense that no one would much care to read my words anyway.

For all of 2023 I did, however, post every Saturday to a blog I created for my partner and I called Eph & Lou(dotcom). This was the result of a commitment I had made to myself that I would post something every Saturday for the entire year and I'm super proud to have actually stuck with it. The reasons can be found in the archive of this site.

Alas, Lou and I took a break from being Eph & Lou for a while.

As of November 7th, 2023, we've been married for 13 years and as of the last commit of this file we're still working on being together. And, appropriately, we're also working on being apart. It's been a hell of a journey for us and our little family.

Given our break and various changes to the dynamics of our relationship coupled with the fact that _our_ blog had really just turned out to be "my blog", I've decided to migrate those posts, which were largely just me talking to myself anyway as Lou ultimately never personally contributed to that blog.

## Now What?

Well, that's a remarkably handsome question (I've just asked myself, but suspect you, dear reader, should you exist, might ask yourself).

I'm going to try to figure that out and when I do I might even update this README (Spoiler: not yet).

For now, I've just completed a couple passes at converting those posts to markdown files and I'm going to work on getting the other content from that blog (and eventually some others, perhaps) moved to this one.

~I will continue to post on Saturdays. I'm still committed.~ (And I did, but that 1-year commitment has ended 😅)

I also want to try to post some more of the many many many drafts have built up over the years. I have generated a lot of "Eph Words" over the years and maybe this is the place where I will share them.

I might even try to get my old Blogger blogs consolidated here

Maybe

Seems like a long shot, but maybe

---

## Technical Documentation

### Project Overview

EphWords.com is a personal blog built with modern web technologies, featuring a clean, responsive design with dark/light mode support. The site is built on the Astro framework and deployed to Firebase Hosting.

### Technology Stack

#### Core Framework

- **[Astro 3.1.3](https://astro.build/)** - Modern static site generator with component islands architecture
- **[TypeScript 5.2.2](https://www.typescriptlang.org/)** - Type-safe development with strict configuration
- **[React 18.2.0](https://react.dev/)** - Interactive components (Search, Card, Datetime)

#### Styling & UI

- **[Tailwind CSS 3.3.3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typography defaults
- **Custom CSS Variables** - Dynamic theming with CSS custom properties
- **Responsive Design** - Mobile-first approach with custom breakpoints

#### Content Management

- **Astro Content Collections** - Type-safe content management with Zod validation
- **Markdown Processing** - Enhanced with remark plugins:
  - `remark-toc` - Automatic table of contents generation
  - `remark-collapse` - Collapsible content sections
- **Shiki Syntax Highlighting** - One Dark Pro theme with line wrapping

#### Build & Optimization

- **[@divriots/jampack](https://jampack.divriots.com/)** - Advanced static site optimization
- **Vite** - Fast build tool with optimized dependency handling
- **ESLint & Prettier** - Code quality and formatting
- **Husky & lint-staged** - Git hooks for code quality

#### Deployment & Hosting

- **Firebase Hosting** - Global CDN with automatic HTTPS
- **RSS Feed Generation** - Built-in RSS/Atom feed support
- **Sitemap Generation** - Automatic XML sitemap creation
- **Open Graph Support** - Social media preview optimization

### Project Structure

```
EphWordsBlog/
├── src/
│   ├── assets/           # Static assets (images, fonts, etc.)
│   ├── components/       # Reusable UI components
│   │   ├── Breadcrumbs.astro
│   │   ├── Card.tsx      # React component for post cards
│   │   ├── Search.tsx    # Client-side search functionality
│   │   ├── Socials.astro # Social media links
│   │   └── ...
│   ├── content/          # Content collections
│   │   ├── blog/         # Blog posts (markdown files)
│   │   └── config.ts     # Content schema definitions
│   ├── layouts/          # Page layout templates
│   ├── pages/            # File-based routing
│   │   ├── index.astro   # Homepage
│   │   ├── posts/        # Blog post pages
│   │   ├── tags/         # Tag-based filtering
│   │   ├── rss.xml.ts    # RSS feed generation
│   │   └── og.png.ts     # Dynamic OG image generation
│   ├── styles/           # Global styles and CSS variables
│   ├── utils/            # Utility functions
│   ├── config.ts         # Site configuration
│   └── types.ts          # TypeScript type definitions
├── public/               # Static files served directly
├── astro.config.mjs      # Astro configuration
├── tailwind.config.cjs   # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── firebase.json         # Firebase hosting configuration
└── package.json          # Dependencies and scripts
```

### Key Features

#### Content Management

- **Type-safe Content Collections** - Blog posts with validated frontmatter
- **Automatic Post Discovery** - File-based routing for blog posts
- **Tag System** - Categorization and filtering by tags
- **Draft Support** - Unpublished posts for content preparation
- **Featured Posts** - Highlight important content

#### User Experience

- **Dark/Light Mode** - System preference detection with manual toggle
- **Responsive Design** - Optimized for all device sizes
- **Search Functionality** - Client-side search with Fuse.js
- **Table of Contents** - Auto-generated for long posts
- **Social Media Integration** - Comprehensive social links
- **RSS/Atom Feeds** - Subscribe to content updates

#### Performance

- **Static Site Generation** - Pre-built HTML for optimal performance
- **Image Optimization** - Automatic image processing and optimization
- **Code Splitting** - Minimal JavaScript for faster loading
- **SEO Optimization** - Meta tags, structured data, and sitemaps

### Development Setup

#### Prerequisites

- Node.js 18+
- npm or yarn package manager

#### Installation

```bash
# Clone the repository
git clone <repository-url>
cd EphWordsBlog

# Install dependencies
npm install

# Start development server
npm run dev
```

#### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production site with optimization
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint for code quality
- `npm run cz` - Interactive commit message tool

#### Development Workflow

1. **Content Creation** - Add new blog posts in `src/content/blog/`
2. **Component Development** - Create reusable components in `src/components/`
3. **Styling** - Use Tailwind classes and custom CSS variables
4. **Testing** - Preview changes with `npm run dev`
5. **Deployment** - Build and deploy with `npm run build`

### Configuration

#### Site Configuration (`src/config.ts`)

- Site metadata (title, description, author)
- Social media links and profiles
- Post pagination settings
- Theme and branding options

#### Content Schema (`src/content/config.ts`)

- Blog post frontmatter validation
- Required fields: title, description, pubDatetime
- Optional fields: tags, featured status, draft mode
- Image optimization requirements (1200x630 minimum for OG images)

#### Build Configuration (`astro.config.mjs`)

- Astro integrations (Tailwind, React, Sitemap)
- Markdown processing with remark plugins
- Shiki syntax highlighting configuration
- Vite optimization settings

### Deployment

#### Firebase Hosting

The site is configured for deployment to Firebase Hosting:

```bash
# Build the site
npm run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy
```

#### Build Process

1. **Astro Build** - Generates static HTML/CSS/JS
2. **Jampack Optimization** - Advanced static optimization
3. **Firebase Deploy** - Uploads to global CDN

#### Environment Variables

- No environment variables required for basic functionality
- Optional: Analytics and tracking configuration

### Performance Metrics

The site is optimized for performance with:

- **Lighthouse Score** - Maintained high scores across all metrics
- **Core Web Vitals** - Optimized for Google's performance standards
- **Bundle Size** - Minimal JavaScript footprint
- **Loading Speed** - Fast initial page load and navigation

### Browser Support

- Modern browsers with ES2020+ support
- Progressive enhancement for older browsers
- Mobile-responsive design for all screen sizes

### Contributing

This is a personal blog project, but the codebase follows modern development practices:

- TypeScript for type safety
- ESLint and Prettier for code quality
- Conventional commits for clear history
- Git hooks for automated quality checks
