Electron React Template

A production-ready Electron + React boilerplate with semantic versioning, cross-platform installers, GitHub Releases, and auto-updates — built on top of
electron-react-boilerplate
.

This repository is intended to be used as a template for real-world desktop applications.

✨ Features

⚡ Electron + React (ERB-based)

🧠 Semantic Versioning (semantic-release)

🚀 GitHub Actions CI/CD

🪟 Windows (NSIS installer)

🍎 macOS (DMG, notarized)

🐧 Linux (AppImage)

🔄 Auto-updates via electron-updater

🧪 Dry-run release simulation

📦 Clean, minimal release artifacts

🔐 Optional code signing & notarization

🧩 Project Structure
.
├── .github/workflows/release.yml   # CI build & release pipeline
├── .erb/                           # ERB internals
├── assets/                         # Icons & build resources
├── src/
│   ├── main/                       # Electron main process
│   ├── preload/                   # Preload scripts
│   └── renderer/                  # React app
├── release.config.mjs              # semantic-release config
├── package.json
├── CHANGELOG.md                    # auto-generated
└── README.md

🛠 Development
Install dependencies
npm install

Start development mode
npm run start


This launches Electron with hot reload for the renderer process.

🧪 Release Simulation (Local)

You can safely test releases without publishing anything:

npm run release:dry


Simulate specific channels:

npm run release:alpha
npm run release:beta


These commands show:

Next version number

Release type (patch/minor/major)

Generated changelog entries

Assets that would be published

🚀 Release Model

This project uses branch-based releases:

Branch	Purpose	Version Example
alpha	Early testing	1.0.0-alpha.1
beta	Pre-release	1.0.0-beta.1
main	Stable release	1.0.0
How it works

Push to alpha → prerelease (alpha)

Push to beta → prerelease (beta)

Push to main → stable release

GitHub Actions automatically:

Builds installers for Windows, macOS, Linux

Versions the app

Renames artifacts to match the release tag

Creates a GitHub Release

Uploads installers

Updates CHANGELOG.md

🧾 Commit Message Convention

This project follows Conventional Commits.

Prefix	Meaning	Version Impact
feat:	New feature	Minor
fix:	Bug fix	Patch
perf:	Performance	Patch
BREAKING CHANGE:	Breaking API	Major
docs:	Documentation	None
chore:	Maintenance	None
ci:	CI changes	None

Only feat, fix, perf, and breaking changes affect versions and changelog.

📦 Installer Naming

Release artifacts are automatically renamed to match the release version:

ElectronReact-v1.0.0-alpha.3-win-x64.exe
ElectronReact-v1.0.0-alpha.3-mac-arm64.dmg
ElectronReact-v1.0.0-alpha.3-linux-x86_64.AppImage

🔄 Auto Updates

Auto-updates are enabled using electron-updater.

On app startup:

autoUpdater.checkForUpdatesAndNotify();


Updates are pulled directly from GitHub Releases.

🔐 Code Signing & Notarization
macOS

Hardened runtime enabled

Notarization supported via Apple ID

Requires secrets:

APPLE_ID

APPLE_APP_SPECIFIC_PASSWORD

APPLE_TEAM_ID

Windows (optional)

Supports certificate-based signing

Requires:

WINDOWS_CERT

WINDOWS_CERT_PASSWORD

🧱 Using This as a Template

Click “Use this template” on GitHub

Update:

name, productName, appId

repository URLs

Replace icons in /assets

Start building your app 🚀

📄 License

MIT

🙌 Credits

Built on top of:

Electron

React

electron-react-boilerplate

semantic-release

💬 Questions?

This template is designed to stay out of your way.
If something feels complex, it probably shouldn’t be there.

Happy shipping 🚀