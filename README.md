# ITSS Storybook

A component library and design system documentation built with [Storybook](https://storybook.js.org/), React, and TypeScript.

## Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

## Getting Started

```bash
# Clone the repo
git clone https://github.com/garygisclair/itss-storybook.git
cd itss-storybook

# Install dependencies
npm install

# Start the dev server (runs on http://localhost:6006)
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Storybook dev server on port 6006 |
| `npm run build` | Build static Storybook site for deployment |

## Project Structure

```
src/
  components/   # React component source (TSX + CSS)
  stories/      # Storybook story files
  tokens.css    # Design tokens (colors, typography, spacing, etc.)
  icons/        # SVG icon assets
  logos/        # SVG logo assets
.storybook/     # Storybook configuration
```

## Dark Mode

Use the sun/moon toggle in the Storybook toolbar to switch between light and dark themes. Components use semantic CSS tokens that adapt automatically.
