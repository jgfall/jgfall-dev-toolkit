#!/bin/bash

# Git Hooks Setup Script
# @description Set up pre-commit and pre-push hooks
# @author Jackson Fall

echo "🔧 Setting up Git Hooks"
echo "======================="
echo ""

# Create .git/hooks directory if it doesn't exist
mkdir -p .git/hooks

# Pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

echo "🔍 Running pre-commit checks..."

# Run linter if available
if [ -f "package.json" ]; then
    if grep -q '"lint"' package.json; then
        echo "  → Running linter..."
        npm run lint
        if [ $? -ne 0 ]; then
            echo "❌ Linting failed. Commit aborted."
            exit 1
        fi
    fi
fi

# Run formatter if available
if command -v prettier &> /dev/null; then
    echo "  → Running Prettier..."
    prettier --check "src/**/*.{js,jsx,ts,tsx,css,scss}" 2>/dev/null || true
fi

echo "✅ Pre-commit checks passed!"
exit 0
EOF

# Pre-push hook
cat > .git/hooks/pre-push << 'EOF'
#!/bin/bash

echo "🧪 Running pre-push checks..."

# Run tests if available
if [ -f "package.json" ]; then
    if grep -q '"test"' package.json; then
        echo "  → Running tests..."
        npm test -- --run 2>/dev/null || npm test
        if [ $? -ne 0 ]; then
            echo "❌ Tests failed. Push aborted."
            exit 1
        fi
    fi
fi

echo "✅ Pre-push checks passed!"
exit 0
EOF

# Make hooks executable
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/pre-push

echo "✅ Git hooks installed successfully!"
echo ""
echo "Installed hooks:"
echo "  • pre-commit: Runs linter and formatter"
echo "  • pre-push: Runs test suite"
echo ""
