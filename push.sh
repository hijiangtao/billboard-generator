#!/bin/sh
###########################
cd ./
# switch to branch you want to use
git checkout gh-pages
# add all added/modified files
git add .
# commit changes
# read commitMessage
now = date +"%Y-%m-%d %H:%M:%S"
git commit -am "[update website] - `date +"%Y-%m-%d %H:%M:%S"`"
# push to git remote repository
git push origin gh-pages
###########################
echo "Press Enter..."
read