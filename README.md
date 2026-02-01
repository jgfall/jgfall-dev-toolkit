# JGFall Development Toolkit

🛠️ **Comprehensive development utilities and reusable components** for all Jackson Fall projects.

## Overview

This repository provides a centralized toolkit of reusable components, styling frameworks, deployment scripts, and automation tools to accelerate development across all projects.

## 📦 What's Included

### 🎨 Component Library
- Pre-built React components
- Vanilla JavaScript widgets
- CSS-only components
- Accessible & responsive

### 🎯 Styling Framework
- CSS utility classes
- Design tokens
- Responsive grid system
- Color palettes
- Typography scales

### 🚀 Deployment Scripts
- Netlify deployment
- Vercel deployment
- GitHub Pages
- Traditional hosting (FTP/SSH)
- Docker containerization

### 🏗️ Project Setup Tools
- Project scaffolding
- Template generators
- Git hooks automation
- Environment setup

### 🧪 Testing Utilities
- Test helpers
- Mock data generators
- Assertion utilities

### 📚 Documentation Templates
- README templates
- Changelog formats
- Contributing guidelines
- License templates

## Quick Start

### Install as NPM Package

```bash
npm install jgfall-dev-toolkit
```

### Use Individual Components

```bash
# Copy specific utility scripts
curl -O https://raw.githubusercontent.com/jgfall/jgfall-dev-toolkit/main/scripts/deploy-netlify.sh

# Or clone entire repo
git clone https://github.com/jgfall/jgfall-dev-toolkit.git
```

### Use as Git Submodule

```bash
# Add to your project
git submodule add https://github.com/jgfall/jgfall-dev-toolkit.git toolkit

# Update
git submodule update --remote
```

## Directory Structure

```
jgfall-dev-toolkit/
├── components/              # Reusable UI components
│   ├── react/              # React components
│   ├── vanilla/            # Vanilla JS widgets
│   └── css-only/           # Pure CSS components
├── styles/                  # Styling frameworks
│   ├── utilities/          # CSS utility classes
│   ├── tokens/             # Design tokens
│   └── themes/             # Pre-built themes
├── scripts/                 # Automation scripts
│   ├── deployment/         # Deployment scripts
│   ├── setup/              # Project setup
│   └── build/              # Build utilities
├── templates/               # Project templates
│   ├── projects/           # Full project templates
│   └── files/              # Individual file templates
├── utils/                   # Utility functions
│   ├── javascript/         # JS utilities
│   ├── python/             # Python utilities
│   └── shell/              # Shell utilities
├── docs/                    # Documentation
└── examples/                # Usage examples
```

## Usage Examples

### Using React Components

```javascript
import { Button, Card, Modal } from 'jgfall-dev-toolkit/components/react';

function MyApp() {
  return (
    <Card>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

### Using CSS Utilities

```html
<link rel="stylesheet" href="jgfall-dev-toolkit/styles/utilities/all.css">

<div class="flex items-center justify-between p-4 rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-primary">Hello World</h1>
</div>
```

### Using Deployment Scripts

```bash
# Deploy to Netlify
./jgfall-dev-toolkit/scripts/deployment/deploy-netlify.sh

# Deploy to GitHub Pages
./jgfall-dev-toolkit/scripts/deployment/deploy-gh-pages.sh
```

### Creating New Project

```bash
# Scaffold a new React project
node jgfall-dev-toolkit/scripts/setup/create-react-app.js my-new-app

# Create static website
node jgfall-dev-toolkit/scripts/setup/create-static-site.js my-site
```

## Features

### 🎨 Component Library Features

- **Accessibility First**: WCAG 2.1 AA compliant
- **Responsive**: Mobile-first design
- **Customizable**: Easy theming and styling
- **Lightweight**: Minimal dependencies
- **Well Documented**: Comprehensive docs

### 🎯 Styling Framework Features

- **Utility Classes**: Tailwind-inspired utilities
- **Design Tokens**: Consistent design system
- **Dark Mode**: Built-in dark mode support
- **CSS Variables**: Easy customization
- **Responsive**: Mobile-first breakpoints

### 🚀 Deployment Features

- **One-Command Deploy**: Simple deployment scripts
- **Multi-Platform**: Support for major hosting platforms
- **Environment Management**: Automatic env variable handling
- **Rollback Support**: Easy rollback mechanisms
- **CI/CD Ready**: GitHub Actions templates

### 🏗️ Setup Automation Features

- **Project Templates**: Quick project initialization
- **Git Hooks**: Pre-commit, pre-push hooks
- **Code Formatting**: Auto-setup Prettier/ESLint
- **Testing Setup**: Jest, Vitest configurations
- **Documentation**: Auto-generate docs

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Support

For issues and questions:
- Open an issue on GitHub
- Email: jackson@jgfall.dev

---

**Built with ❤️ by Jackson Fall** | Making development faster and easier
