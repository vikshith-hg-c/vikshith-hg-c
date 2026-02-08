#!/bin/bash
# Setup script for pre-commit hooks and security scanning

set -e

echo "🔒 Setting up security hooks for portfolio app..."

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 is required. Please install Python first."
    exit 1
fi

# Install pre-commit if not installed
if ! command -v pre-commit &> /dev/null; then
    echo "📦 Installing pre-commit..."
    pip3 install pre-commit
fi

# Install detect-secrets
if ! command -v detect-secrets &> /dev/null; then
    echo "📦 Installing detect-secrets..."
    pip3 install detect-secrets
fi

# Install npm security packages
echo "📦 Installing npm security packages..."
npm install --save-dev \
    eslint-plugin-security \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser

# Initialize pre-commit hooks
echo "🔧 Installing pre-commit hooks..."
pre-commit install
pre-commit install --hook-type pre-push

# Create initial secrets baseline
echo "🔍 Creating secrets baseline..."
detect-secrets scan > .secrets.baseline 2>/dev/null || true

# Run initial audit
echo "🔒 Running initial security audit..."
npm audit || true

echo ""
echo "✅ Security hooks setup complete!"
echo ""
echo "The following checks will run on each commit:"
echo "  • Secret detection (detect-secrets, trufflehog)"
echo "  • ESLint security rules"
echo "  • npm audit (high severity)"
echo "  • TypeScript type checking"
echo "  • Private key detection"
echo ""
echo "GitHub Actions will also run:"
echo "  • CodeQL SAST analysis"
echo "  • Dependency vulnerability scanning"
echo "  • Secret scanning on PRs"
echo ""
echo "Run 'pre-commit run --all-files' to scan all files now."
