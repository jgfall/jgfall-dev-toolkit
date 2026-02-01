#!/bin/bash

# GitHub Pages Deployment Script
# @description Deploy static site to GitHub Pages
# @author Jackson Fall

set -e

echo "🚀 GitHub Pages Deployment"
echo "=========================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Get configuration
read -p "Build directory (default: dist): " BUILD_DIR
BUILD_DIR=${BUILD_DIR:-dist}

read -p "Branch name (default: gh-pages): " BRANCH
BRANCH=${BRANCH:-gh-pages}

# Build the project
if [ -f "package.json" ]; then
    if grep -q '"build"' package.json; then
        echo -e "${YELLOW}Building project...${NC}"
        npm run build
        echo -e "${GREEN}✓ Build successful${NC}"
    fi
fi

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    echo "Error: Build directory '$BUILD_DIR' not found"
    exit 1
fi

# Deploy using gh-pages package or git worktree
if command -v gh-pages &> /dev/null; then
    echo -e "${YELLOW}Deploying with gh-pages package...${NC}"
    npx gh-pages -d $BUILD_DIR -b $BRANCH
else
    echo -e "${YELLOW}Deploying with git...${NC}"
    
    # Create orphan branch
    git worktree add $BUILD_DIR $BRANCH || true
    cd $BUILD_DIR
    git add -A
    git commit -m "Deploy to GitHub Pages" || true
    git push origin $BRANCH
    cd ..
    git worktree remove $BUILD_DIR
fi

echo ""
echo -e "${GREEN}✓ Deployed to GitHub Pages!${NC}"
echo "Your site will be available at:"
echo "https://$(git config --get remote.origin.url | sed 's/.*github.com[:\/]\([^\/]*\)\/\([^.]*\).*/\1.github.io\/\2/')"
