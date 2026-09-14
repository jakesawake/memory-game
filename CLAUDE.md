# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is an early-stage scaffold for a memory (card-matching) game. `src/App.jsx` currently just returns
`'Hello World'` — no game logic, components, or tests exist yet. The `README.md` is still the default
`create-vite` React template README and does not describe this project; don't rely on it.

## Commands

- `npm run dev` — start the Vite dev server (auto-opens browser, see `vite.config.js`)
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint over the repo

There is no test runner configured yet.

## Stack and structure

- React 19 + Vite, using the Oxc-based `@vitejs/plugin-react`.
- Tailwind CSS v4 via `@tailwindcss/vite` (not the PostCSS plugin) — styles live in `src/styles/App.css`,
  which does `@import "tailwindcss"` plus a few custom rules; `src/index.css` is currently empty.
- Prettier is configured in `prettier.config.js` (not `package.json`) with `prettier-plugin-tailwindcss`,
  pointed at `tailwindStylesheet: "./src/styles/App.css"` — keep that path in sync if the Tailwind entry
  file moves.
- ESLint config (`eslint.config.js`) is flat-config style: `@eslint/js` recommended +
  `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` (Vite preset), browser globals, `dist/`
  ignored.
- `type: "module"` in `package.json` — config files use ESM syntax.
