# Quick Start Guide

🚀 Get up and running with the JGFall Dev Toolkit in minutes!

## Table of Contents

1. [Installation](#installation)
2. [Creating a New Project](#creating-a-new-project)
3. [Using Components](#using-components)
4. [Using Utilities](#using-utilities)
5. [Deploying Your Project](#deploying-your-project)

## Installation

### Method 1: NPM Package (Recommended)

```bash
npm install jgfall-dev-toolkit
```

### Method 2: Git Submodule

```bash
# In your project directory
git submodule add https://github.com/jgfall/jgfall-dev-toolkit.git toolkit
```

### Method 3: Clone Repository

```bash
git clone https://github.com/jgfall/jgfall-dev-toolkit.git
```

---

## Creating a New Project

### React App

```bash
# Clone toolkit
git clone https://github.com/jgfall/jgfall-dev-toolkit.git
cd jgfall-dev-toolkit

# Create new React app
node scripts/setup/create-react-app.js my-awesome-app

# Start developing
cd my-awesome-app
npm run dev
```

**What you get:**
- ✅ React + Vite setup
- ✅ Project structure
- ✅ Basic routing ready
- ✅ Development server configured
- ✅ Build scripts included

### Static Website

```bash
# Create static site
node jgfall-dev-toolkit/scripts/setup/create-static-site.js my-website

# Start developing
cd my-website
python -m http.server 8000
```

**What you get:**
- ✅ HTML/CSS/JS structure
- ✅ Basic styling
- ✅ Ready to deploy

---

## Using Components

### React Components

#### 1. Import Components

```javascript
import { Button, Card, Modal } from 'jgfall-dev-toolkit/components/react';
```

#### 2. Use in Your App

```jsx
function MyComponent() {
  return (
    <Card title="Welcome" hoverable>
      <p>Hello World!</p>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

#### 3. Import Styles

```javascript
import 'jgfall-dev-toolkit/components/react/Button.css';
import 'jgfall-dev-toolkit/components/react/Card.css';
```

### CSS Utilities

#### 1. Link Stylesheet

```html
<link rel="stylesheet" href="toolkit/styles/utilities/spacing.css">
<link rel="stylesheet" href="toolkit/styles/utilities/flexbox.css">
<link rel="stylesheet" href="toolkit/styles/tokens/colors.css">
```

#### 2. Use Utility Classes

```html
<div class="flex items-center justify-between p-4 mb-4">
  <h1 class="text-primary">Hello World</h1>
  <button class="bg-primary text-white px-6 py-3">Click Me</button>
</div>
```

---

## Using Utilities

### JavaScript Utilities

#### Storage

```javascript
import { storage } from 'jgfall-dev-toolkit/utils/javascript/storage';

// Save data
storage.set('user', { name: 'John', id: 123 });

// Retrieve data
const user = storage.get('user', { name: 'Guest' });

// Check existence
if (storage.has('user')) {
  console.log('User exists');
}
```

#### Validation

```javascript
import { isValidEmail, validatePassword } from 'jgfall-dev-toolkit/utils/javascript/validators';

// Validate email
if (isValidEmail('user@example.com')) {
  console.log('Valid email!');
}

// Validate password
const result = validatePassword('MyP@ssw0rd');
console.log(result.strength); // 'strong'
console.log(result.errors);   // []
```

#### Date Helpers

```javascript
import { formatDate, getRelativeTime } from 'jgfall-dev-toolkit/utils/javascript/date';

// Format dates
formatDate(new Date(), 'MMM DD, YYYY'); // 'Feb 01, 2026'

// Relative time
getRelativeTime(new Date(Date.now() - 3600000)); // '1 hour ago'
```

### Python Utilities

#### File Operations

```python
from utils.python.file_utils import read_json, write_json, ensure_dir

# Read JSON
data = read_json('config.json')

# Write JSON
write_json('output.json', {'key': 'value'})

# Ensure directory exists
ensure_dir('output/data')
```

#### CLI Helpers

```python
from utils.python.cli_helpers import success, error, prompt, confirm, ProgressBar

# Colored output
success('Operation completed!')
error('Something went wrong!')

# User input
name = prompt('Enter your name', default='John')
if confirm('Continue?'):
    print('Continuing...')

# Progress bar
progress = ProgressBar(total=100)
for i in range(100):
    # Do work
    progress.update()
```

---

## Deploying Your Project

### Setup Git Hooks (Recommended)

```bash
# In your project directory
bash toolkit/scripts/setup/setup-git-hooks.sh
```

This adds:
- **Pre-commit**: Runs linter and formatter
- **Pre-push**: Runs test suite

### Deploy to Netlify

```bash
# One-time setup
npm install -g netlify-cli
netlify login

# Deploy
bash toolkit/scripts/deployment/deploy-netlify.sh
```

### Deploy to Vercel

```bash
# One-time setup
npm install -g vercel
vercel login

# Deploy
bash toolkit/scripts/deployment/deploy-vercel.sh
```

### Deploy to GitHub Pages

```bash
# No setup required (just a GitHub repo)
bash toolkit/scripts/deployment/deploy-gh-pages.sh
```

---

## Common Workflows

### Starting a New Web App

```bash
# 1. Create React app
node toolkit/scripts/setup/create-react-app.js my-app
cd my-app

# 2. Install toolkit as dependency
npm install jgfall-dev-toolkit

# 3. Setup git hooks
bash ../toolkit/scripts/setup/setup-git-hooks.sh

# 4. Start developing
npm run dev

# 5. Deploy when ready
npm run deploy:netlify
```

### Adding Components to Existing Project

```bash
# Install toolkit
npm install jgfall-dev-toolkit

# Import and use components
import { Button, Card } from 'jgfall-dev-toolkit/components/react';
```

### Using CSS Utilities Only

```html
<!-- Link CSS utilities -->
<link rel="stylesheet" href="node_modules/jgfall-dev-toolkit/styles/utilities/spacing.css">
<link rel="stylesheet" href="node_modules/jgfall-dev-toolkit/styles/utilities/flexbox.css">
<link rel="stylesheet" href="node_modules/jgfall-dev-toolkit/styles/tokens/colors.css">

<!-- Use utility classes -->
<div class="flex items-center gap-4 p-4">
  <h1 class="text-primary mb-2">Hello</h1>
</div>
```

---

## Tips & Best Practices

### Performance

1. **Import only what you need:**
   ```javascript
   // Good
   import { Button } from 'jgfall-dev-toolkit/components/react/Button';
   
   // Avoid (imports everything)
   import * as Components from 'jgfall-dev-toolkit/components/react';
   ```

2. **Use CSS utilities sparingly** (prefer custom CSS for complex layouts)

3. **Lazy load components** when possible:
   ```javascript
   const Modal = lazy(() => import('jgfall-dev-toolkit/components/react/Modal'));
   ```

### Customization

1. **Override CSS variables:**
   ```css
   :root {
     --color-primary-600: #your-brand-color;
     --font-heading: 'Your Font', serif;
   }
   ```

2. **Extend components:**
   ```jsx
   import { Button } from 'jgfall-dev-toolkit/components/react';
   
   function MyButton(props) {
     return <Button {...props} className={`my-custom-class ${props.className}`} />;
   }
   ```

### Development

1. **Use git hooks** to maintain code quality
2. **Set up environment variables** with `.env.example`
3. **Document your customizations**
4. **Keep toolkit updated**: `npm update jgfall-dev-toolkit`

---

## Troubleshooting

### "Module not found"

```bash
# Make sure toolkit is installed
npm install jgfall-dev-toolkit

# Check import paths
import { Button } from 'jgfall-dev-toolkit/components/react';
```

### "Styles not loading"

```javascript
// Import component CSS
import 'jgfall-dev-toolkit/components/react/Button.css';
```

### "Scripts not executing"

```bash
# Make scripts executable
chmod +x toolkit/scripts/deployment/*.sh
chmod +x toolkit/scripts/setup/*.sh
```

---

## Next Steps

1. 📚 Read full documentation in [docs/](docs/)
2. 📝 Check examples in [examples/](examples/)
3. 🧪 Explore all components and utilities
4. 🚀 Build something awesome!

## Need Help?

- 🐛 [Report an issue](https://github.com/jgfall/jgfall-dev-toolkit/issues)
- 💬 [Start a discussion](https://github.com/jgfall/jgfall-dev-toolkit/discussions)
- 📧 Email: jackson@jgfall.dev

---

Happy coding! 🎉
