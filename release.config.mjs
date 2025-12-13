export default {
  repositoryUrl: "https://github.com/Koen-Schockaert/electron-react-boilerplate",
  
  branches: [
    "main",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true }
  ],

  tagFormat: "v${version}",

  plugins: [
    // Analyze commits to determine version bump
    "@semantic-release/commit-analyzer",

    // Generate release notes
    "@semantic-release/release-notes-generator",

    // Update CHANGELOG.md
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],

    // Commit updated changelog
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    // Create GitHub release with build assets
    ["@semantic-release/github", { assets: [
      "release/build/**/*.exe",
      "release/build/**/*.dmg",
      "release/build/**/*.AppImage"
      ]}
    ]
  ]
};
