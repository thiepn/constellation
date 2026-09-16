# Constellation 2.0

Constellation is a local-first spatial knowledge garden for capturing thoughts and connecting them into a durable visual graph.

## What is included

- Infinite spatial canvas with pan, zoom, layouts, groups, tags and multiple workspaces
- Rich nodes, notes, media, typed relationships and backlinks
- Search, filters, saved views, command palette and graph navigation
- Planning: tasks, projects, goals, habits, milestones and focus sessions
- Research, evidence mapping, study/recall, decisions and idea genealogy
- Import/export, web capture, history, backups, privacy and encrypted portable backups
- Themes, adaptive desktop/tablet/mobile UI and accessibility controls
- Analytics, review, resurfacing and historical graph playback
- Local semantic intelligence plus optional external AI
- Optional sync/collaboration/publishing and a safe declarative plugin API
- Optional Creative Studio and isolated Experimental Labs

## Local-first by default

The core app requires no account, cloud provider or external AI. Data is stored in the browser using IndexedDB where available, with a recovery fallback. Network features remain inactive until explicitly configured.

## Full backup

Use **Data & Safety → Backups** or **Transfer → Full backup** for authoritative recovery. Portable Markdown/CSV/OPML/Mermaid/DOT/SVG/PNG/PDF/HTML exports are interoperability formats and intentionally do not preserve every Constellation-specific property.

## PWA deployment

Upload these files together to the same HTTPS directory:

- `index.html`
- `manifest.webmanifest`
- `constellation-sw.js`
- `constellation-icon-192.png`
- `constellation-icon-512.png`

See `DEPLOY.md` for details.

## Keyboard essentials

- `Ctrl/Cmd + K` — command palette
- `Ctrl/Cmd + F` — Constellation search
- `Ctrl/Cmd + Z` / `Ctrl/Cmd + Shift + Z` — undo / redo
- `/` — quick add
- `K` — connect selected thought
- `F` — fit constellation
- `F6` / `Shift+F6` — cycle major UI landmarks
- `Esc` — close the active surface

## Version

Constellation 2.0.0 — final 2.0 release, 16 September 2026.
