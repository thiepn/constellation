# Deploy Constellation 2.0

## GitHub Pages / static hosting

1. Put all runtime files in the same directory:
   - `index.html`
   - `manifest.webmanifest`
   - `constellation-sw.js`
   - `constellation-icon-192.png`
   - `constellation-icon-512.png`
2. Serve the directory over HTTPS.
3. Open Constellation once while online.
4. Reload once after the first service-worker registration if the Safety screen reports that the worker is registered but not yet controlling the page.
5. Use **Data & Safety → Install** to check install/offline/update state.

GitHub Pages works because the application is entirely static. Keep the five runtime files at the same relative path level; the manifest and service worker use relative URLs.

## Updating an existing installation

Replace the runtime files with the new release. The Phase 20 service worker uses cache `constellation-2.0.0-v1` and removes older `constellation-*` caches on activation. Existing IndexedDB user data is not part of the service-worker cache and is not deleted by an application update.

## Standalone HTML

`index.html` can also be opened directly from `file://` for ordinary local use. Browsers do not permit service workers/PWA installation from `file://`, so offline installation features require HTTPS or localhost.

## Before deployment

Keep a full Constellation backup when replacing a production deployment. The app has migration/recovery safeguards, but a user-controlled backup remains the strongest recovery boundary.
