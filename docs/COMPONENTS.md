# Component Library Documentation

Comprehensive guide to all components in the JGFall Dev Toolkit.

## React Components

### Button

Flexible, accessible button component with multiple variants.

**Usage:**
```jsx
import { Button } from 'jgfall-dev-toolkit/components/react';

<Button variant="primary" size="large" onClick={handleClick}>
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'ghost' | 'link'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean
- `fullWidth`: boolean
- `icon`: ReactNode
- `iconPosition`: 'left' | 'right'

**Examples:**
```jsx
// Primary button with icon
<Button variant="primary" icon={<Icon />}>
  Save Changes
</Button>

// Loading state
<Button loading={isLoading}>
  Submit
</Button>

// Full width button
<Button fullWidth variant="success">
  Complete
</Button>
```

---

### Card

Flexible card component for content organization.

**Usage:**
```jsx
import { Card } from 'jgfall-dev-toolkit/components/react';

<Card
  title="Card Title"
  subtitle="Optional subtitle"
  image="/path/to/image.jpg"
  footer={<Button>Action</Button>}
  hoverable
>
  Card content goes here
</Card>
```

**Props:**
- `title`: ReactNode
- `subtitle`: ReactNode
- `footer`: ReactNode
- `image`: string (URL)
- `imageAlt`: string
- `variant`: 'default' | 'bordered' | 'elevated' | 'flat'
- `hoverable`: boolean
- `clickable`: boolean
- `onClick`: function

---

### Modal

Accessible modal dialog component with portal rendering.

**Usage:**
```jsx
import { Modal, Button } from 'jgfall-dev-toolkit/components/react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        footer={
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        }
      >
        Modal content here
      </Modal>
    </>
  );
}
```

**Props:**
- `isOpen`: boolean (required)
- `onClose`: function (required)
- `title`: ReactNode
- `footer`: ReactNode
- `size`: 'small' | 'medium' | 'large' | 'fullscreen'
- `closeOnOverlay`: boolean (default: true)
- `closeOnEscape`: boolean (default: true)
- `showCloseButton`: boolean (default: true)

**Features:**
- Focuses first focusable element on open
- Returns focus to trigger on close
- Traps focus within modal
- Prevents body scroll when open
- ESC key to close
- Click outside to close

---

## CSS-Only Components

Coming soon:
- Accordion
- Tabs
- Dropdown
- Tooltip
- Alert
- Badge

## Vanilla JavaScript Components

Coming soon:
- Date Picker
- Carousel
- Infinite Scroll
- Image Lightbox

## Best Practices

### Accessibility

- Always provide labels for form inputs
- Use semantic HTML
- Include ARIA attributes when needed
- Test with keyboard navigation
- Check color contrast ratios

### Performance

- Lazy load components when possible
- Use React.memo for expensive components
- Optimize images
- Minimize bundle size

### Styling

- Use CSS variables for theming
- Follow BEM naming convention
- Mobile-first responsive design
- Avoid !important when possible

## Component Development Guidelines

### Creating a New Component

1. **Create component file**: `components/react/ComponentName.jsx`
2. **Create styles**: `components/react/ComponentName.css`
3. **Add to index**: Export from `components/react/index.js`
4. **Write documentation**: Add to this file
5. **Create example**: Add to `examples/`
6. **Write tests**: Add to `tests/`

### Component Template

```jsx
/**
 * ComponentName Component
 * 
 * @description Brief description
 * @author Jackson Fall
 */

import React from 'react';
import PropTypes from 'prop-types';
import './ComponentName.css';

const ComponentName = ({
  children,
  variant = 'default',
  className = '',
  ...rest
}) => {
  const classes = [
    'jg-component-name',
    `jg-component-name--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

ComponentName.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'variant1']),
  className: PropTypes.string
};

export default ComponentName;
```

## Questions?

Open an issue or contact Jackson Fall.
