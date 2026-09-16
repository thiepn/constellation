# Constellation 2.0.0 Release Notes

Release date: 16 September 2026

Constellation 2.0 is the completed 20-phase rebuild of the original floating-thought prototype into a local-first spatial knowledge system.

## Release highlights

- Versioned IndexedDB architecture, migration, recovery and rolling backups
- Infinite world-coordinate canvas and large-graph rendering optimizations
- Multi-selection, bulk editing and transaction-based undo/redo
- Universal rich node system with notes, metadata, media and custom fields
- Persistent typed graph relationships, backlinks and graph analysis
- Groups, tags, workspaces and reusable templates
- Universal search, filtering, saved views and command palette
- Multiple layouts and alternative graph views
- Planning, research, study, decisions and idea genealogy
- Broad import/export and web-capture interoperability
- Privacy, app lock, encrypted backups and installable offline PWA
- Full visual identity/theme engine and adaptive accessible interface
- Review, resurfacing, history playback and analytics
- Local semantic intelligence with explicitly optional external AI
- Optional sync, collaboration, publishing and declarative plugins
- Optional Creative Studio and isolated Labs experiments
- Phase 19 performance/data-safety/accessibility hardening

## Phase 20 release fixes

- Promoted internal application version to `2.0.0`
- Added release metadata and in-app About surface
- Corrected stale deployment documentation from the Phase 19 package
- Finalized PWA cache naming and explicit `index.html` shell caching
- Re-ran migration, failure, accessibility, cross-phase and 1k/5k/10k stress suites
- Added GitHub/static-host deployment documentation and release checksums

## Compatibility certification

Automated runtime certification in the build environment was completed with Chromium. Firefox and Safari/WebKit runtimes were not installed in the execution environment, so the release does not claim automated engine-specific certification for those browsers. The application uses standards-based browser APIs with capability checks/fallbacks where needed.
