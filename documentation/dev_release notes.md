Electron React Template

This project provides an Electron + React boilerplate for building cross-platform desktop applications. It uses semantic-release for version management, GitHub Actions for CI/CD, and Electron Builder for packaging and distributing the app.

Table of Contents

Development Workflow

Starting the Development Environment

Building for Development

Release Workflow

Creating a New Release

Release Assets

Versioning and Semantic-Release

Development Workflow

The development workflow is designed to allow you to build and test your app locally before pushing it to any remote repository.

Starting the Development Environment

Clone the repository:

git clone https://github.com/yourusername/electron-react-template.git
cd electron-react-template


Install dependencies:

npm install


Start the development environment:

npm run start


This will:

Launch the Electron app in development mode.

Use Webpack for building the renderer (React) and main (Electron) processes.

Open the app in a dev window, allowing you to hot-reload changes and debug.

Building for Development

To build the app in development mode (for testing or packaging a local version), run:

npm run build


This will:

Build the main process (Electron) and renderer process (React).

Compile TypeScript and bundles all required assets.

Create a ready-to-use application that can be packaged locally.

Release Workflow

The release workflow ensures that every version is automatically built, packaged, and uploaded as an installer using GitHub Actions.

Creating a New Release
Steps:

Commit changes and push to a branch
First, you need to make your changes and commit them. To trigger the release workflow, push your changes to any of the following branches:

main (for stable releases)

alpha (for alpha releases)

beta (for beta releases)

GitHub Actions takes over
Once your changes are pushed to the correct branch, the following happens automatically:

GitHub Actions triggers a workflow (release.yaml) to build the app.

If the commit contains changes that require a version bump, semantic-release will automatically increase the version (following Semantic Versioning rules).

The app is packaged for Windows, macOS, and Linux (as .exe, .dmg, .AppImage installers).

A draft release is created with these installers attached, ready for manual publishing.

Version Bumping
The version is bumped according to the commit messages in the following manner:

feat:: Increments the minor version.

fix:: Increments the patch version.

BREAKING CHANGE:: Increments the major version.

Release Assets

After the build completes successfully, the assets (installers for each platform) will be attached to a GitHub draft release. These are typically named like so:

Alpha releases: ElectronReact-0.0.1-alpha.1.dmg

Beta releases: ElectronReact-0.0.1-beta.1.dmg

Stable releases: ElectronReact-1.0.0.dmg

The assets are versioned and tagged according to your release channel (e.g., alpha, beta, or main).

Note: These assets are uploaded automatically by electron-builder and semantic-release to the GitHub release page but are not published until you approve them.

Versioning and Semantic-Release

Semantic-release is used to manage versioning automatically based on commit messages:

Patch version: fix: <bug fix>

Minor version: feat: <new feature>

Major version: BREAKING CHANGE: <changes that break backwards compatibility>

Example Commit Messages:
feat: Add new user login feature
fix: Corrected typo in the settings page
BREAKING CHANGE: Refactor API for login authentication


Semantic-release also generates changelog entries automatically from commit messages. These will be included in the release notes when you publish a release on GitHub.

Dev vs Release Workflow Summary
1. Development (Dev)

In the development environment, the main goal is to:

Test new features and bug fixes.

Use the start command to launch the app in development mode.

Use build to build the app locally for further testing.

2. Release (Release)

In the release environment, the main goal is to:

Publish a new version of the app.

Automatically increment version numbers based on commit messages (feat, fix, BREAKING CHANGE).

Use GitHub Actions to build the app for Windows, macOS, and Linux.

Attach the app installers to a draft GitHub release for easy distribution.

Use semantic-release to generate changelogs, version bumps, and release notes.

Workflow

Development: You work on feature branches (alpha, beta, dev), push changes, and the GitHub Actions workflow builds the app, optionally creating a draft release with the appropriate version.

Release: Once you're ready, merge your feature branch into main for the stable release or beta/alpha for pre-release channels. GitHub Actions runs and generates a release draft. Once satisfied, you manually publish the release.

Common Issues and Troubleshooting

Build fails due to missing dependencies:
Ensure all dependencies are correctly installed by running npm install after pulling the latest code or switching branches.

Versioning issues:
Make sure your commit messages follow the Conventional Commits convention for semantic-release to work as expected. If the version bump doesn't occur, check that your commit includes a proper prefix (feat, fix, or BREAKING CHANGE).

Failed to build on Windows/macOS/Linux:
If the build fails, make sure you have the necessary build tools installed on the respective OS. GitHub Actions provides logs that can help you pinpoint what went wrong (e.g., missing dependencies or misconfigured paths).

Draft release not appearing:
Ensure that the publish flag is set to "never" in the electron-builder config for your local builds. If semantic-release isn't creating the draft, verify the commit messages and configuration for versioning.

Further Reading

Electron Builder Documentation

Semantic Release Documentation

Conventional Commits Specification

This README should clarify how you should work locally during development, push changes for a release, and how the CI/CD pipeline works using semantic-release and GitHub Actions to automate versioning, building, and releasing your Electron app.

