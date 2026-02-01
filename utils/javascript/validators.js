/**
 * Validation Utilities
 * 
 * @description Common validation functions
 * @author Jackson Fall
 */

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} Whether email is valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} Whether URL is valid
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Validate phone number (US format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} Whether phone is valid
 */
export function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @param {Object} options - Validation options
 * @returns {Object} Validation result with strength and feedback
 */
export function validatePassword(password, options = {}) {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true
  } = options;

  const errors = [];
  let strength = 0;

  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters`);
  } else {
    strength += 1;
  }

  if (requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain uppercase letters');
  } else if (requireUppercase) {
    strength += 1;
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain lowercase letters');
  } else if (requireLowercase) {
    strength += 1;
  }

  if (requireNumbers && !/[0-9]/.test(password)) {
    errors.push('Password must contain numbers');
  } else if (requireNumbers) {
    strength += 1;
  }

  if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain special characters');
  } else if (requireSpecialChars) {
    strength += 1;
  }

  return {
    isValid: errors.length === 0,
    errors,
    strength: ['weak', 'fair', 'good', 'strong', 'very strong'][Math.min(strength, 4)]
  };
}

/**
 * Validate credit card number (Luhn algorithm)
 * @param {string} cardNumber - Card number to validate
 * @returns {boolean} Whether card number is valid
 */
export function isValidCreditCard(cardNumber) {
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

/**
 * Validate required field
 * @param {*} value - Value to check
 * @returns {boolean} Whether value is present
 */
export function isRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

/**
 * Validate minimum length
 * @param {string} value - String to validate
 * @param {number} min - Minimum length
 * @returns {boolean} Whether string meets minimum length
 */
export function minLength(value, min) {
  return typeof value === 'string' && value.length >= min;
}

/**
 * Validate maximum length
 * @param {string} value - String to validate
 * @param {number} max - Maximum length
 * @returns {boolean} Whether string is within maximum length
 */
export function maxLength(value, max) {
  return typeof value === 'string' && value.length <= max;
}

/**
 * Validate number range
 * @param {number} value - Number to validate
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean} Whether number is in range
 */
export function inRange(value, min, max) {
  return typeof value === 'number' && value >= min && value <= max;
}

/**
 * Validate date is in the past
 * @param {Date|string} date - Date to validate
 * @returns {boolean} Whether date is in the past
 */
export function isPastDate(date) {
  return new Date(date) < new Date();
}

/**
 * Validate date is in the future
 * @param {Date|string} date - Date to validate
 * @returns {boolean} Whether date is in the future
 */
export function isFutureDate(date) {
  return new Date(date) > new Date();
}
