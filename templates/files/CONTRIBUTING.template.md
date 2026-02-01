# Contributing to {{PROJECT_NAME}}

Thank you for your interest in contributing! ❤️

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/{{PROJECT_NAME}}.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes
6. Commit: `git commit -m 'Add some feature'`
7. Push: `git push origin feature/your-feature-name`
8. Open a Pull Request

## How to Contribute

### Reporting Bugs

- Use the GitHub issue tracker
- Describe the bug and how to reproduce it
- Include screenshots if applicable
- Specify your environment (OS, browser, versions)

### Suggesting Enhancements

- Use the GitHub issue tracker
- Clearly describe the enhancement
- Explain why it would be useful
- Provide examples if possible

### Code Contributions

1. Check existing issues and PRs
2. Discuss major changes in an issue first
3. Follow the style guidelines
4. Write tests for new features
5. Update documentation as needed

## Style Guidelines

### JavaScript/TypeScript

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings
- Use meaningful variable names
- Add JSDoc comments for functions

```javascript
/**
 * Calculate total price
 * @param {number} price - Item price
 * @param {number} quantity - Item quantity
 * @returns {number} Total price
 */
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

### CSS

- Use BEM naming convention
- Mobile-first approach
- Use CSS variables for theming
- Keep selectors simple

```css
.button {
  /* Base styles */
}

.button--primary {
  /* Variant styles */
}

.button__icon {
  /* Element styles */
}
```

### Python

- Follow PEP 8
- Use 4 spaces for indentation
- Add docstrings to functions
- Use type hints

```python
def process_data(data: List[Dict]) -> Dict:
    """Process input data.
    
    Args:
        data: Input data list
        
    Returns:
        Processed data dictionary
    """
    # Implementation
    pass
```

## Commit Messages

Use conventional commits format:

```
type(scope): subject

body

footer
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(auth): add login functionality

fix(cart): resolve checkout calculation error

docs(readme): update installation instructions
```

## Pull Request Process

1. **Update documentation** for any changed functionality
2. **Add tests** for new features
3. **Ensure all tests pass**: `npm test`
4. **Follow the code style**: Run linter
5. **Update CHANGELOG.md** with your changes
6. **Request review** from maintainers

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] All tests passing
- [ ] No console errors/warnings
- [ ] Responsive design tested
- [ ] Accessibility checked

## Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test
npm test -- path/to/test.js
```

## Documentation

- Keep README.md up to date
- Add JSDoc/docstring comments
- Update examples when changing APIs
- Include code examples in docs

## Questions?

Feel free to open an issue or contact the maintainers.

Thank you for contributing! 🚀
