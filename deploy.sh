#!/bin/bash

# build
npm run build

# deploy dist to gh-pages branch
git add dist && git commit -m "Site update"
git subtree push --prefix dist origin gh-pages


