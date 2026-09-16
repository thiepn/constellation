# Constellation 2.0 — Release QA

## Certified in this build environment

- JavaScript syntax: pass
- Manifest JSON: pass
- Service Worker syntax: pass
- Duplicate actual DOM IDs: 0
- Unresolved `getElementById` bindings: 0
- Visible interactive controls without accessible names: 0
- Chromium desktop smoke: pass
- Chromium mobile smoke: pass
- Legacy v1 migration: pass
- Malformed-data normalization: pass
- Quota/storage failure handling: pass
- XSS / unsafe URL regression: pass
- Oversized import rejection: pass
- Trash restore: pass
- Cross-phase import/layout/search/intelligence: pass
- 1,000 / 5,000 / 10,000 node stress tests: pass
- Offline service-worker fallback: pass

## Performance harness results

Recovery-storage stress harness, frozen physics, battery performance profile:

- 1,000 nodes / 999 edges: ~0.83 s boot, ~0.27 s search
- 5,000 / 4,999: ~1.43 s boot, ~0.24 s search
- 10,000 / 9,999: ~2.63 s boot, ~0.24 s search, ~24 FPS measured

5,000-node full layout transforms in the same harness:

- radial: ~1.12 s
- dependency: ~1.78 s
- tree: ~1.89 s

Performance varies by device/browser and the test intentionally used the fallback storage path rather than normal IndexedDB.

## Known certification limitation

Only Chromium is installed in the execution environment. Firefox and Safari/WebKit should receive manual browser/device acceptance testing when available; this release does not fabricate those results.

## RC3 final artifact certification

- Final standalone HTML SHA-256: `86a17885b93f18d31bbbd6519d59234d4768252422a0d71ce1b6c7344d38985b`
- Actual main-document DOM IDs: 672, all unique
- `getElementById` references flagged outside the main DOM (`q`, `s`, `side`, `gate`, `pw`, `go`, `err`, `content`) belong to generated standalone/published HTML documents and are valid inside those generated documents.
- Final PWA offline mock: navigation returned cached HTML with status 200; older `constellation-*` caches were removed; `constellation-2.0.0-v1` remained active.
- Standalone HTML and packaged `index.html`: byte-identical.
