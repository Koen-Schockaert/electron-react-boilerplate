export default {
  repositoryUrl: "https://github.com/Koen-Schockaert/electron-react-boilerplate",
  
  branches: [
    "main",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true }
  ],

  tagFormat: "v${version}",

  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogFile: "CHANGELOG.md" }],
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          "release/build/**/*.exe",
          "release/build/**/*.dmg",
          "release/build/**/*.AppImage"
        ]
      }
    ]
  ]
};
