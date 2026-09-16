# Constellation 2.1.0-rc.1 — Observatory

Visual redesign candidate, 16 September 2026.

## Experience

A new editorial identity pairs a warm ink canvas with brass, sage and terracotta graph marks, Instrument Sans controls and Newsreader titles. Atlas Light provides an independently designed daylight palette. Fonts are embedded for standalone and offline use.

Desktop gains a labeled navigation rail and consistent sidecars. Tablet uses a compact rail. Mobile gains a simplified header, five-action bottom navigation, full-width sheets and a dedicated Notes focus editor. Search puts results before advanced filters; the inspector progressively reveals scheduling detail. Planning, research, study, intelligence, organization, transfer and safety use shared typography and rules instead of nested glass containers.

Graph marks and links are quieter, with screen-size labels and collision thinning. Selected thoughts and paths retain priority. World coordinates, physics, geometry and semantic data remain intact.

## Fixes

- Command Enter uses the current query even while results were being debounced.
- Knowledge and Intelligence honor Escape consistently.
- Desktop inspector has a visible close action.
- Phone header no longer crowds duplicate tool actions; inspector tabs remain reachable.
- Custom-field type and planning selects receive explicit accessible names.

## Compatibility

IndexedDB stays at version 2 with no new migration. User theme identifiers, customization, graph types, import/export formats, encrypted backup logic and optional integrations remain supported. The PWA cache is versioned for the new shell; database contents remain separate from cache updates.

No runtime packages are added. Development-only Playwright and axe provide repeatable release evidence. See `QA.md` for exact tested coverage and acceptance limitations. This candidate is not a claim of physical-device, screen-reader or configured external-integration certification. Automated Chromium, Firefox and WebKit acceptance runs in CI; see the PR for the latest results and the WebKit offline-test method.
