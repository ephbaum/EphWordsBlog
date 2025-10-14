# Migration to pnpm

This project now uses **pnpm** as the primary package manager instead of npm.

## Why pnpm?

- Faster installation times
- More efficient disk space usage (content-addressable storage)
- Stricter dependency resolution
- Better monorepo support
- Used by the upstream AstroPaper theme

## Version Management

We use **asdf** (`.tool-versions`) to lock versions:
- **Node.js**: 22.12.0
- **pnpm**: 10.12.4

The `package.json` also includes:
```json
"packageManager": "pnpm@10.12.4"
```

This enables Corepack to automatically use the correct pnpm version.

## Installation

If you don't have pnpm installed:

```bash
# Install pnpm globally
npm install -g pnpm@10.12.4

# Or use Corepack (built into Node.js 16.13+)
corepack enable
corepack prepare pnpm@10.12.4 --activate
```

Then install dependencies:

```bash
pnpm install
```

## Common Commands

| Command | Description |
|---------|-------------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start dev server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build |
| `pnpm run lint` | Lint code |
| `pnpm run format` | Format code |

## CI/CD

GitHub Actions now uses pnpm 10.12.4 for all builds. See `.github/workflows/ci.yml`.

## Migration Notes

- Removed `package-lock.json`
- Kept `pnpm-lock.yaml` (do not delete this)
- All dependencies reinstalled with pnpm
- No breaking changes to scripts or dependencies

