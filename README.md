# Eph Words dot Com

**Live Site**: [ephwords.com](https://ephwords.com)  
**Repository**: [github.com/ephbaum/EphWordsBlog](https://github.com/ephbaum/EphWordsBlog)

Since officially changing my name to Eph, I've thought a lot about the humor behind having a letter for a first name and the ways I could "use it":

- Eph Words
- Eph Around
- Eph This/That

These, and many others, have come to mind over the years.

## A Blog of Sorts

_For readers and interested parties_

### How'd we get here?

I've had a ["dev" blog](https://ephbaum.dev) for quite a while now but have not had a _personal_ blog for a great many years. Mostly that's an artifact of not feeling as though I've had time to really create or maintain one, but also there's always the ever present sense that no one would much care to read my words anyway.

I've been surprised to discover that people do actually stumble over my little corners of the Internet. I've discovered this by way of analytics. Modern analytics are impressive.

This was especially true when, for all of 2023 I posted (almost) every Saturday to a blog I created for my partner and I called Eph & Lou(dotcom). This was the result of a commitment I had made to myself that I would post something every Saturday for the entire year and I'm super proud to have actually stuck with it. The reasons can be found in the archive of this site.

Alas, Lou and I took a break from being Eph & Lou for a while at the end of 2023, and given our break and various changes to the dynamics of our relationship coupled with the fact that _our_ blog had really only ever been "my blog", I made the decision to migrate those posts to this blog and continue my posting here.

As of November 7th, 2025, we'll have been married for 15 years. However, earlier this year we decided to focus on being apart; we're officially: separated.

We tried, but it became very clear that we could no longer maintain a marriage. It's been a hell of a journey for us and our little family.

So, this is a new chapter.

## Now What?

Well, that's a remarkably handsome question (I've just asked myself, but suspect you, dear reader, should you exist, might ask yourself).

It should also be extraordinarily clear looking at the commit history in this repo that I have been pretty neglectful of this blog, at least through 2024 into 2025. So, as of today, I'm working on a little housekeeping and, hopefully, I'll get back to posting here with some regularity again. (Given my enormous backlog of blog posts I've got drafted and old content just collecting dust and cobwebs)

**Recent Updates (October 2025):** Completed a major dependency update, upgrading to Astro v5, updating all packages to their latest versions, and migrating to modern tooling (ESLint 9, Husky 9, etc.). See `DEPENDENCY_UPDATE_SUMMARY.md` for details.

I won't commit myself to weekly updates again, but I will commit myself to at least getting a few more words out.

---

## Technical Documentation

**For nerds**

The following section contains technical documentation for anyone interested in understanding how this blog is built, contributing to the codebase, or setting up a similar project. If you're just here to read about my life and thoughts, you can safely ignore everything below this point!

### Project Overview

EphWords.com is a personal blog built with modern web technologies, featuring a clean, responsive design with dark/light mode support. The site is built on the Astro framework and deployed to Firebase Hosting.

### Technology Stack

#### Core Framework

- **[Astro](https://astro.build/)** v5.14.4 - Modern static site generator with component islands architecture
- **[TypeScript](https://www.typescriptlang.org/)** v5.7.2 - Type-safe development with strict configuration
- **[React](https://react.dev/)** v18.3.1 - Interactive components (Search, Card, Datetime)
- **[Node.js](https://nodejs.org/)** v22.12.0 (LTS) - Runtime environment

> Last updated: October 14, 2025 | See `package.json` for all versions

#### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
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
git clone https://github.com/ephbaum/EphWordsBlog.git
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

The blog uses **Firebase Hosting** with automated deployments via **GitHub Actions**.

#### Automated Deployment (Recommended)

The project includes two GitHub Actions workflows for continuous deployment:

##### 1. Production Deployment

**Workflow**: `.github/workflows/firebase-hosting-merge.yml`
**Trigger**: Push to `main` branch

```yaml
Automated steps:
1. Checkout repository
2. Install dependencies (npm ci)
3. Build site (npm run build)
4. Deploy to Firebase Hosting live channel
```

**Usage**: Simply push to or merge a PR into the `main` branch, and the site deploys automatically.

##### 2. Preview Deployment

**Workflow**: `.github/workflows/firebase-hosting-pull-request.yml`
**Trigger**: Pull request creation/update

```yaml
Automated steps:
1. Checkout repository
2. Install dependencies (npm ci)
3. Build site (npm run build)
4. Deploy to Firebase Hosting preview channel
```

**Usage**: Open a pull request and get a unique preview URL to review changes before merging.

##### Required GitHub Secrets

The workflows require the following secrets (configured in GitHub repository settings):

- `FIREBASE_SERVICE_ACCOUNT_EPH_WORDS_BLOG` - Firebase service account credentials
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions

#### Manual Deployment

For local deployment without GitHub Actions:

```bash
# Build the site
npm run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy
```

**Prerequisites**:

- Firebase CLI installed (`npm install -g firebase-tools`)
- Authenticated with Firebase (`firebase login`)

#### Build Process

1. **Astro Build** - Generates static HTML/CSS/JS from Astro components
2. **Jampack Optimization** - Advanced static optimization for performance
3. **Firebase Deploy** - Uploads to global CDN with automatic HTTPS

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

### License

This project uses a dual license structure:

- **Blog Content**: Licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
- **Theme/Code**: Licensed under MIT License (original theme by [Sat Naing](https://github.com/satnaing))

See the [LICENSE](./LICENSE) file for full details.

### Contributing

This is a personal blog project, but the codebase follows modern development practices:

- TypeScript for type safety
- ESLint and Prettier for code quality
- Conventional commits for clear history
- Git hooks for automated quality checks

If you see a problem you're welcome to open a PR with a fix or you can [open an issue](https://github.com/ephbaum/EphWordsBlog/issues) and I'll (possibly) do something about it.

TIA
