# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

A Pokemon "don't click the same card twice" memory game, built as React practice for The Odin Project. The
`README.md` is still the default `create-vite` README and does not describe this project; don't rely on it.

## Commands

- `npm run dev` — start the Vite dev server (auto-opens browser, see `vite.config.js`)
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint over the repo

There is no test runner configured.

## Stack and structure

- React 19 + Vite, using the Oxc-based `@vitejs/plugin-react`.
- Tailwind CSS v4 via `@tailwindcss/vite` (not the PostCSS plugin). The only stylesheet is
  `src/styles/App.css` (imported from `App.jsx`); it loads the "Press Start 2P" Google Font and exposes it as the
  `font-pokemon-game` utility through `@theme`.
- Prettier is configured in `prettier.config.js` (not `package.json`) with `prettier-plugin-tailwindcss`,
  pointed at `tailwindStylesheet: "./src/styles/App.css"` — keep that path in sync if the Tailwind entry
  file moves.
- ESLint config (`eslint.config.js`) is flat-config style: `@eslint/js` recommended +
  `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` (Vite preset), browser globals, `dist/`
  ignored.
- `type: "module"` in `package.json` — config files use ESM syntax.

## Game architecture

- `src/api/pokemon.js` — `fetchPokemon()` makes one PokeAPI list request and returns `{ id, name }` objects for
  Pokemon ids 1-20. The id is parsed out of each result's `url`. It wraps failures in an `Error` with `cause` and
  rethrows, so callers handle rejection.
- `src/components/Board.jsx` owns all game state: `pool` (all 20 fetched), `board` (the 9 currently shown),
  `pickedIds`, and `highScore`. Score is derived (`pickedIds.length`), not stored. `handleClick(id)` either ends the
  round (updates high score, clears `pickedIds`) or records the pick and swaps the clicked slot for a random pool
  Pokemon that isn't on the board. Previously picked Pokemon can return as replacements; that is intended.
- `src/components/Card.jsx` is presentational: it builds the sprite URL from `pokemonId` using PokeAPI's static
  sprite CDN (no fetch) and calls `onClick(pokemonId)`.
