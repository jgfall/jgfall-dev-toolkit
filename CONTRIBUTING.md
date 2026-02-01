# Contributing to JGFall Dev Toolkit

Thank you for your interest in contributing to the JGFall Dev Toolkit! 🚀

## How to Contribute

### Reporting Issues

- Use the GitHub issue tracker
- Check if the issue already exists
- Provide clear description and steps to reproduce
- Include code examples when relevant

### Adding Components

1. Create component in appropriate directory:
   - React components: `components/react/`
   - Vanilla JS: `components/vanilla/`
   - CSS-only: `components/css-only/`

2. Include:
   - Component code
   - Styles (if needed)
   - Documentation
   - Usage example
   - Tests

3. Follow naming conventions:
   - React: PascalCase (e.g., `Button.jsx`)
   - JavaScript: camelCase (e.g., `dataHelpers.js`)
   - CSS: kebab-case (e.g., `button-styles.css`)

### Adding Utilities

1. Choose appropriate category:
   - JavaScript: `utils/javascript/`
   - Python: `utils/python/`
   - Shell: `utils/shell/`

2. Include comprehensive documentation
3. Add usage examples
4. Write tests when applicable

### Adding Scripts

1. Deployment scripts go in `scripts/deployment/`
2. Setup scripts go in `scripts/setup/`
3. Build scripts go in `scripts/build/`

4. Requirements:
   - Add shebang line
   - Include help/usage information
   - Add error handling
   - Use color-coded output
   - Document in README

### Code Style

**JavaScript/React:**
- Use ESLint recommended rules
- 2-space indentation
- Semicolons required
- Single quotes for strings

**Python:**
- Follow PEP 8
- 4-space indentation
- Type hints encouraged
- Docstrings required

**CSS:**
- BEM naming convention
- CSS variables for theming
- Mobile-first approach

### Commit Messages

Use conventional commits:

```
type(scope): subject

Examples:
feat(components): add Tooltip component
fix(utils): resolve date formatting issue
docs(readme): update installation instructions
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Update documentation
6. Submit PR with clear description

## Questions?

Open an issue or reach out to Jackson Fall.

Thank you for contributing! ❤️
