# 🚀 Recommended Git Workflow Setup (From Scratch)
## 1. Initialize the Repository

### If you don’t have a repo yet:

* git init
* git checkout -b main


### Push it to your remote:

* git remote add origin <your-repo-url>
* git push -u origin main

## 2. Create the develop Branch

main should always contain stable, production-ready code.
develop will contain the latest integrated changes.

* git checkout -b develop
* git push -u origin develop

## 3. Feature Branch Workflow

Use feature branches for new features or enhancements.

Naming:

* feature/<short-description>
* Example: feature/login-page

Create:
* git checkout develop
* git pull
* git checkout -b feature/login-page

When the feature is done:

Commit and push
* git add .
* git commit -m "feat: implement login page"
* git push -u origin feature/login-page

Finish:

Open a Pull Request into develop

After review & merge, delete the branch:
* git checkout develop
* git pull
* git branch -d feature/login-page
* git push origin --delete feature/login-page

## 4. Bugfix Branch Workflow

Use bugfix branches for small fixes that should be integrated into the next release (not hotfixes for production).

Naming:

bugfix/<issue-id-or-description>

Create:
* git checkout develop
* git pull
* git checkout -b bugfix/<description>

Fix the bug

When the bufix is done:

Commit and push
* git commit -m "bugfix: implement login page"
* git push -u origin bugfix/<description>

Finish:

Open a Pull Request into develop

After review & merge, delete the branch:

* git branch -d feature/login-page
* git push origin --delete feature/login-page

## 5. Releases (Optional but Recommended)

When you're ready to prepare a release:

### 1. Create a release branch
* git checkout -b release/1.0.0 develop

### 2. Bump version *in the release branch*
* npm version patch
* npm version minor
* npm version major
(This updates files and creates the release tag.)

### 3. Update documentation and finalize

Commit your updates:
* git commit -am "docs: update changelog for v1.0.0"

Push everything:
* git push --follow-tags
Do final polishing (version bump, documentation, etc.), then:

### 4. Merge into main
* git checkout main
* git merge release/1.0.0 --no-ff
* git push

### 5. Merge back into develop
* git checkout develop
* git merge main
* git push

## 6. Hotfix Branches (For Production Issues)

If a critical bug appears in production:

* git checkout main
* git checkout -b hotfix/urgent-crash-fix


Apply fix → commit → push → PR into main.

Then merge it also into develop to keep branches in sync.

## 7. Branch Protection Rules (Very Important)

In GitHub/GitLab:

Protect main:
* Require PRs
* Require approvals
* Require CI checks to pass
* Prevent force-push*

Protect develop:
* Require PRs

Allow merges only from feature/bugfix/release branches

## 8. Summary Diagram
main  ←--- release ---← develop ←--- feature
  ↑         ↑                  ←--- bugfix
  └--- hotfix
