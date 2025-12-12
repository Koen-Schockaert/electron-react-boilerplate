#!/bin/bash
set -e

#git init
git add .
git commit -m "first commit"
git remote add origin

git branch -M main

echo "Checking out main..."
git checkout main

echo "Fetching..."
git fetch origin

# Create dev branch
if git rev-parse --verify dev >/dev/null 2>&1; then
  echo "Branch 'dev' already exists"
else
  echo "Creating branch 'dev'"
  git branch dev
  git push -u origin dev
fi

# Create alpha branch
if git rev-parse --verify alpha >/dev/null 2>&1; then
  echo "Branch 'alpha' already exists"
else
  echo "Creating branch 'alpha'"
  git branch alpha
  git push -u origin alpha
fi

# Create beta branch
if git rev-parse --verify beta >/dev/null 2>&1; then
  echo "Branch 'beta' already exists"
else
  echo "Creating branch 'beta'"
  git branch beta
  git push -u origin beta
fi

echo "All branches created successfully!"
