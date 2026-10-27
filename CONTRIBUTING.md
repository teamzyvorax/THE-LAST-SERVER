# Contributing to THE LAST SERVER

Thanks for helping improve this Zyvora interactive mystery.

## Local preview
Open `index.html` through a local static web server for best results (service workers require HTTP/HTTPS). No build step or package install is required.

## Keep compatibility
- Preserve the original game state key `tls_save_v3` and existing chapter scripts.
- New UI must remain keyboard accessible and mobile responsive.
- Avoid third-party trackers and do not commit API keys or secrets.
- GitHub Pages is a static host: do not describe local-only data as cloud-synced.

## Smoke test
1. Load the home page and wait for the boot sequence.
2. Enter the world, inspect nodes, decrypt evidence, and make a choice.
3. Confirm the terminal accepts `help`, `status`, and `inventory`.
4. Open Mission Log, Player Profile, Settings, and Save / Export.
5. Export a save, reload, then test importing the exported file.
6. Open Chapter 12, recover all three records, and choose an outcome.
7. Test keyboard navigation, narrow mobile widths, and offline reload after the first online visit.
8. Verify the GitHub Pages Actions workflow completed successfully.

## Reporting bugs
Include browser/OS, exact steps, expected result, actual result, and console errors where possible.
