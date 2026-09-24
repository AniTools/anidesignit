#!/bin/bash
# Publishes your latest changes (CMS edits, code, anything) to the live site.
#
# What it does:
#   1. Finds this script's own folder, so it works no matter where you run it from
#   2. Checks if there's anything new to publish
#   3. Commits everything with a message (today's date by default, or your own)
#   4. Pushes to GitHub, which tells Netlify to rebuild the live site
#
# Usage:
#   ./publish.sh                        (uses today's date as the message)
#   ./publish.sh "Added new project"    (your own message)

cd "$(dirname "$0")" || exit 1

if [ -z "$(git status --porcelain)" ]; then
  echo "Nothing to publish — no changes since your last push."
  exit 0
fi

echo "Changes found:"
git status --short
echo ""

MESSAGE="${1:-Update site content — $(date '+%Y-%m-%d %H:%M')}"

git add -A
git commit -m "$MESSAGE"
git push

echo ""
echo "Published. Netlify will rebuild the live site in a minute or two."
echo "Check progress at: https://app.netlify.com/projects/anidesignit/deploys"
