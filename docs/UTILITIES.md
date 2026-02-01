# Utilities Documentation

Comprehensive guide to all utility functions in the JGFall Dev Toolkit.

## JavaScript Utilities

### Storage Utilities

**Location:** `utils/javascript/storage.js`

Safe wrapper for localStorage and sessionStorage with JSON serialization.

#### storage.get(key, defaultValue)

Get item from localStorage.

```javascript
import { storage } from 'jgfall-dev-toolkit/utils/javascript/storage';

const user = storage.get('user', { name: 'Guest' });
```

#### storage.set(key, value)

Store item in localStorage (auto JSON stringifies).

```javascript
storage.set('user', { name: 'John', email: 'john@example.com' });
```

#### storage.remove(key)

Remove item from localStorage.

```javascript
storage.remove('user');
```

#### storage.has(key)

Check if key exists.

```javascript
if (storage.has('user')) {
  console.log('User found in storage');
}
```

#### storage.size()

Get approximate storage size in bytes.

```javascript
const sizeInBytes = storage.size();
console.log(`Storage using ${sizeInBytes} bytes`);
```

---

### Validation Utilities

**Location:** `utils/javascript/validators.js`

#### isValidEmail(email)

Validate email address format.

```javascript
import { isValidEmail } from 'jgfall-dev-toolkit/utils/javascript/validators';

if (isValidEmail('user@example.com')) {
  console.log('Valid email');
}
```

#### isValidUrl(url)

Validate URL format.

```javascript
if (isValidUrl('https://example.com')) {
  console.log('Valid URL');
}
```

#### isValidPhone(phone)

Validate phone number (US format).

```javascript
if (isValidPhone('555-123-4567')) {
  console.log('Valid phone');
}
```

#### validatePassword(password, options)

Validate password with customizable requirements.

```javascript
const result = validatePassword('MyP@ssw0rd', {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: true
});

console.log(result.isValid);     // true/false
console.log(result.errors);      // Array of error messages
console.log(result.strength);    // 'weak', 'fair', 'good', 'strong', 'very strong'
```

#### isValidCreditCard(cardNumber)

Validate credit card using Luhn algorithm.

```javascript
if (isValidCreditCard('4532015112830366')) {
  console.log('Valid card number');
}
```

---

### Date Utilities

**Location:** `utils/javascript/date.js`

#### formatDate(date, format)

Format date to readable string.

```javascript
import { formatDate } from 'jgfall-dev-toolkit/utils/javascript/date';

formatDate(new Date(), 'MMM DD, YYYY');        // 'Feb 01, 2026'
formatDate(new Date(), 'YYYY-MM-DD');          // '2026-02-01'
formatDate(new Date(), 'MMMM D, YYYY');        // 'February 1, 2026'
```

**Format tokens:**
- `YYYY` - 4-digit year
- `YY` - 2-digit year
- `MMMM` - Full month name
- `MMM` - Short month name
- `MM` - 2-digit month
- `DD` - 2-digit day
- `D` - Day without leading zero
- `HH` - 24-hour format
- `mm` - Minutes
- `ss` - Seconds

#### getRelativeTime(date)

Get relative time string.

```javascript
getRelativeTime(new Date(Date.now() - 3600000));  // '1 hour ago'
getRelativeTime(new Date(Date.now() - 86400000)); // '1 day ago'
```

#### addDays(date, days)

Add days to a date.

```javascript
const tomorrow = addDays(new Date(), 1);
const nextWeek = addDays(new Date(), 7);
```

#### isToday(date)

Check if date is today.

```javascript
if (isToday(someDate)) {
  console.log('This is today!');
}
```

#### daysBetween(date1, date2)

Calculate days between two dates.

```javascript
const days = daysBetween('2026-01-01', '2026-02-01');
console.log(`${days} days apart`);
```

---

## Python Utilities

### File Utilities

**Location:** `utils/python/file_utils.py`

#### read_file(filepath, encoding)

Read text file content.

```python
from utils.python.file_utils import read_file

content = read_file('data.txt')
```

#### write_file(filepath, content)

Write content to file.

```python
write_file('output.txt', 'Hello, World!')
```

#### read_json(filepath)

Read and parse JSON file.

```python
data = read_json('config.json')
```

#### write_json(filepath, data)

Write data to JSON file.

```python
write_json('output.json', {'key': 'value'})
```

#### ensure_dir(directory)

Create directory if it doesn't exist.

```python
ensure_dir('output/images')
```

#### find_files(directory, pattern)

Find files matching pattern.

```python
png_files = find_files('images', '*.png')
```

---

### CLI Helpers

**Location:** `utils/python/cli_helpers.py`

#### Colored Output

```python
from utils.python.cli_helpers import success, error, warning, info

success('Operation completed!')
error('Something went wrong!')
warning('This is a warning')
info('Information message')
```

#### User Prompts

```python
from utils.python.cli_helpers import prompt, confirm, select

# Simple prompt
name = prompt('Enter your name', default='John')

# Yes/no confirmation
if confirm('Are you sure?', default=True):
    print('Confirmed!')

# Multiple choice
choice = select('Choose option', ['Option 1', 'Option 2', 'Option 3'])
```

#### Progress Bar

```python
from utils.python.cli_helpers import ProgressBar

progress = ProgressBar(total=100, prefix='Processing')

for i in range(100):
    # Do work
    progress.update()

progress.finish()
```

---

## Shell Utilities

Coming soon:
- Common bash functions
- File manipulation helpers
- Network utilities
- System information helpers

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines on adding new utilities.
