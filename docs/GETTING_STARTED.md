# Getting Started with JGFall Dev Toolkit

Comprehensive guide to using the JGFall Dev Toolkit in your projects.

## Table of Contents

1. [Installation](#installation)
2. [Project Setup](#project-setup)
3. [Component Usage](#component-usage)
4. [Styling](#styling)
5. [Utilities](#utilities)
6. [Deployment](#deployment)
7. [Best Practices](#best-practices)

---

## Installation

### Option 1: NPM Package (Recommended)

```bash
# Install in your project
npm install jgfall-dev-toolkit

# Or with yarn
yarn add jgfall-dev-toolkit
```

### Option 2: Git Submodule

```bash
# Add as submodule
git submodule add https://github.com/jgfall/jgfall-dev-toolkit.git toolkit

# Update submodule
git submodule update --remote toolkit
```

### Option 3: Direct Download

```bash
# Clone repository
git clone https://github.com/jgfall/jgfall-dev-toolkit.git

# Copy what you need to your project
cp -r jgfall-dev-toolkit/components ./
cp -r jgfall-dev-toolkit/styles ./
```

---

## Project Setup

### Create New React App

```bash
# Using toolkit scaffolding
node toolkit/scripts/setup/create-react-app.js my-new-app

cd my-new-app
npm run dev
```

**Created structure:**
```
my-new-app/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   └── styles/
├── public/
├── index.html
├── vite.config.js
└── package.json
```

### Create Static Website

```bash
node toolkit/scripts/setup/create-static-site.js my-website

cd my-website
python -m http.server 8000
```

### Setup Git Hooks

```bash
# In your project directory
bash toolkit/scripts/setup/setup-git-hooks.sh
```

**Installed hooks:**
- **pre-commit**: Linting and formatting
- **pre-push**: Test suite execution

---

## Component Usage

### React Components

#### 1. Import Components

```javascript
// Named imports
import { Button, Card, Modal } from 'jgfall-dev-toolkit/components/react';

// Individual imports
import Button from 'jgfall-dev-toolkit/components/react/Button';
```

#### 2. Import Styles

```javascript
// Import component styles
import 'jgfall-dev-toolkit/components/react/Button.css';
import 'jgfall-dev-toolkit/components/react/Card.css';
import 'jgfall-dev-toolkit/components/react/Modal.css';
```

#### 3. Use Components

**Button Example:**
```jsx
function MyComponent() {
  return (
    <div>
      <Button 
        variant="primary" 
        size="large"
        onClick={() => console.log('Clicked!')}
      >
        Click Me
      </Button>
    </div>
  );
}
```

**Card Example:**
```jsx
function ProductCard() {
  return (
    <Card
      title="Product Name"
      subtitle="$29.99"
      image="/product.jpg"
      hoverable
      footer={
        <Button variant="primary" fullWidth>
          Add to Cart
        </Button>
      }
    >
      <p>Product description goes here.</p>
    </Card>
  );
}
```

**Modal Example:**
```jsx
function MyApp() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirmation"
        footer={
          <>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Confirm
            </Button>
          </>
        }
      >
        <p>Are you sure you want to continue?</p>
      </Modal>
    </>
  );
}
```

---

## Styling

### Using CSS Utilities

#### 1. Link Stylesheets

```html
<!-- In your HTML -->
<link rel="stylesheet" href="toolkit/styles/utilities/spacing.css">
<link rel="stylesheet" href="toolkit/styles/utilities/flexbox.css">
<link rel="stylesheet" href="toolkit/styles/tokens/colors.css">
```

```javascript
// In your React/JS
import 'jgfall-dev-toolkit/styles/utilities/spacing.css';
import 'jgfall-dev-toolkit/styles/utilities/flexbox.css';
import 'jgfall-dev-toolkit/styles/tokens/colors.css';
```

#### 2. Use Utility Classes

**Spacing:**
```html
<div class="p-4 mb-6">
  <h1 class="mb-2">Title</h1>
  <p class="mt-4">Paragraph</p>
</div>
```

**Flexbox:**
```html
<div class="flex items-center justify-between gap-4">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

**Colors:**
```html
<div class="bg-primary text-white p-4">
  <h2 class="text-warning">Warning!</h2>
</div>
```

### Custom Theming

#### Override CSS Variables

```css
/* In your custom CSS */
:root {
  /* Override color tokens */
  --color-primary-600: #FF6B35;
  --color-secondary-600: #004E89;
  
  /* Override spacing */
  --spacing-4: 1.5rem;
  
  /* Add custom variables */
  --brand-color: #FF6B35;
  --font-heading: 'Your Font', serif;
}
```

#### Use Custom Variables

```html
<style>
  .my-button {
    background: var(--brand-color);
    padding: var(--spacing-4);
    font-family: var(--font-heading);
  }
</style>
```

---

## Utilities

### JavaScript Utilities

#### Storage

```javascript
import { storage } from 'jgfall-dev-toolkit/utils/javascript/storage';

// Save user preferences
storage.set('theme', 'dark');
storage.set('user', { name: 'John', id: 123 });

// Retrieve data
const theme = storage.get('theme', 'light');
const user = storage.get('user', { name: 'Guest' });

// Check and remove
if (storage.has('user')) {
  storage.remove('user');
}
```

#### Validation

```javascript
import { 
  isValidEmail, 
  isValidUrl, 
  isValidPhone,
  validatePassword 
} from 'jgfall-dev-toolkit/utils/javascript/validators';

// Email validation
const email = 'user@example.com';
if (!isValidEmail(email)) {
  console.error('Invalid email');
}

// Password validation with requirements
const passwordResult = validatePassword('MyP@ssw0rd', {
  minLength: 8,
  requireUppercase: true,
  requireNumbers: true,
  requireSpecialChars: true
});

if (!passwordResult.isValid) {
  console.error(passwordResult.errors);
}

console.log(`Password strength: ${passwordResult.strength}`);
```

#### Date Helpers

```javascript
import { 
  formatDate, 
  getRelativeTime, 
  addDays,
  daysBetween 
} from 'jgfall-dev-toolkit/utils/javascript/date';

// Format dates
const formatted = formatDate(new Date(), 'MMM DD, YYYY');
// 'Feb 01, 2026'

// Relative time
const relative = getRelativeTime(new Date(Date.now() - 3600000));
// '1 hour ago'

// Date math
const nextWeek = addDays(new Date(), 7);
const days = daysBetween('2026-01-01', '2026-02-01'); // 31
```

### Python Utilities

#### File Operations

```python
from utils.python.file_utils import (
    read_file,
    write_file,
    read_json,
    write_json,
    ensure_dir,
    find_files
)

# Read/write JSON
config = read_json('config.json')
write_json('output.json', {'data': 'value'})

# Ensure directories
ensure_dir('output/images')

# Find files
png_files = find_files('images', '*.png')
```

#### CLI Helpers

```python
from utils.python.cli_helpers import (
    success,
    error,
    warning,
    info,
    prompt,
    confirm,
    select,
    ProgressBar
)

# Colored output
success('Build completed!')
error('Build failed!')
warning('Deprecated feature')
info('Processing...')

# User input
name = prompt('Enter project name', default='my-project')

if confirm('Continue with deployment?', default=True):
    # Deploy logic
    pass

option = select(
    'Choose framework',
    ['React', 'Vue', 'Svelte', 'Vanilla JS']
)

# Progress bar
progress = ProgressBar(total=100, prefix='Installing')
for i in range(100):
    # Do work
    progress.update()
```

---

## Deployment

### Quick Deploy

```bash
# Netlify
bash toolkit/scripts/deployment/deploy-netlify.sh

# Vercel
bash toolkit/scripts/deployment/deploy-vercel.sh

# GitHub Pages
bash toolkit/scripts/deployment/deploy-gh-pages.sh
```

### NPM Scripts Integration

Add to your `package.json`:

```json
{
  "scripts": {
    "deploy": "bash toolkit/scripts/deployment/deploy-netlify.sh",
    "deploy:prod": "bash toolkit/scripts/deployment/deploy-vercel.sh",
    "deploy:gh-pages": "bash toolkit/scripts/deployment/deploy-gh-pages.sh"
  }
}
```

Then deploy with:
```bash
npm run deploy
```

---

## Best Practices

### Component Development

1. **Import only what you need** (tree-shaking friendly)
2. **Use prop validation** (PropTypes or TypeScript)
3. **Follow accessibility guidelines**
4. **Test on multiple devices**
5. **Document component usage**

### Styling

1. **Mobile-first approach**
2. **Use CSS variables for theming**
3. **Leverage utility classes** for quick styling
4. **Keep specificity low**
5. **Avoid !important**

### Performance

1. **Lazy load components** when possible
2. **Optimize images** before deployment
3. **Minimize bundle size**
4. **Use code splitting**
5. **Enable caching**

### Security

1. **Never commit .env files**
2. **Validate all user input**
3. **Sanitize data before display**
4. **Use HTTPS in production**
5. **Keep dependencies updated**

---

## Common Patterns

### Form with Validation

```jsx
import { Button } from 'jgfall-dev-toolkit/components/react';
import { isValidEmail } from 'jgfall-dev-toolkit/utils/javascript/validators';
import { storage } from 'jgfall-dev-toolkit/utils/javascript/storage';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Save to storage
      storage.set('contactForm', formData);
      
      // Submit logic
      console.log('Form submitted', formData);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="mb-2"
      />
      {errors.name && <span className="text-danger">{errors.name}</span>}
      
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="mb-4"
      />
      {errors.email && <span className="text-danger">{errors.email}</span>}
      
      <Button type="submit" variant="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
}
```

### Card Grid Layout

```jsx
import { Card, Button } from 'jgfall-dev-toolkit/components/react';

function ProductGrid({ products }) {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
      {products.map(product => (
        <Card
          key={product.id}
          title={product.name}
          subtitle={`$${product.price}`}
          image={product.image}
          hoverable
          footer={
            <Button variant="primary" fullWidth>
              Add to Cart
            </Button>
          }
        >
          <p>{product.description}</p>
        </Card>
      ))}
    </div>
  );
}
```

### Modal Workflow

```jsx
import { Modal, Button, Card } from 'jgfall-dev-toolkit/components/react';

function ShoppingCart() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  
  return (
    <>
      <Button onClick={() => setIsCartOpen(true)}>
        Cart ({cart.length})
      </Button>
      
      <Modal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        title="Shopping Cart"
        size="large"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Button>
            <Button variant="primary">
              Checkout
            </Button>
          </div>
        }
      >
        {cart.length === 0 ? (
          <p className="text-muted text-center p-8">Your cart is empty</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map(item => (
              <Card key={item.id} variant="flat">
                <div className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span className="text-primary">${item.price}</span>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
```

---

## Customization

### Theme Customization

```css
/* custom-theme.css */
:root {
  /* Brand colors */
  --color-primary-600: #FF6B35;
  --color-secondary-600: #004E89;
  --color-success-600: #2ECC71;
  
  /* Custom spacing */
  --spacing-custom: 1.75rem;
  
  /* Custom fonts */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  
  /* Borders */
  --border-radius: 12px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

### Component Customization

```jsx
// Extend Button component
import { Button } from 'jgfall-dev-toolkit/components/react';

function BrandButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className="my-brand-button"
      style={{
        borderRadius: '20px',
        textTransform: 'uppercase'
      }}
    >
      {children}
    </Button>
  );
}
```

---

## Troubleshooting

### Common Issues

**Issue: Components not rendering**
- ✅ Check if React is installed
- ✅ Verify import paths
- ✅ Ensure CSS is imported

**Issue: Styles not applying**
- ✅ Import component CSS files
- ✅ Check CSS variable definitions
- ✅ Verify no CSS conflicts

**Issue: Deployment fails**
- ✅ Check build directory
- ✅ Verify build command
- ✅ Check deployment platform CLI

### Getting Help

1. Check documentation in `/docs`
2. Review examples in `/examples`
3. Open an issue on GitHub
4. Email: jackson@jgfall.dev

---

## Next Steps

1. 📚 Explore [Component Documentation](COMPONENTS.md)
2. 🛠️ Check [Utility Functions](UTILITIES.md)
3. 🚀 Read [Deployment Guide](DEPLOYMENT.md)
4. 💡 See [Examples](../examples/)

Happy coding! 🎉
