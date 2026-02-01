/**
 * Storage Utilities
 * 
 * @description Helper functions for localStorage and sessionStorage
 * @author Jackson Fall
 */

/**
 * Safe localStorage wrapper with JSON serialization
 */
export const storage = {
  /**
   * Get item from localStorage
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default value if key doesn't exist
   * @returns {*} Parsed value or default
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage: ${error}`);
      return defaultValue;
    }
  },

  /**
   * Set item in localStorage
   * @param {string} key - Storage key
   * @param {*} value - Value to store (will be JSON stringified)
   * @returns {boolean} Success status
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing to localStorage: ${error}`);
      return false;
    }
  },

  /**
   * Remove item from localStorage
   * @param {string} key - Storage key
   * @returns {boolean} Success status
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing from localStorage: ${error}`);
      return false;
    }
  },

  /**
   * Clear all items from localStorage
   * @returns {boolean} Success status
   */
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error(`Error clearing localStorage: ${error}`);
      return false;
    }
  },

  /**
   * Check if key exists in localStorage
   * @param {string} key - Storage key
   * @returns {boolean} Whether key exists
   */
  has(key) {
    return localStorage.getItem(key) !== null;
  },

  /**
   * Get all keys from localStorage
   * @returns {string[]} Array of keys
   */
  keys() {
    return Object.keys(localStorage);
  },

  /**
   * Get storage size in bytes
   * @returns {number} Approximate size in bytes
   */
  size() {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }
    return total;
  }
};

/**
 * Session storage wrapper (same API as storage)
 */
export const sessionStorage = {
  get(key, defaultValue = null) {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from sessionStorage: ${error}`);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error writing to sessionStorage: ${error}`);
      return false;
    }
  },

  remove(key) {
    try {
      window.sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing from sessionStorage: ${error}`);
      return false;
    }
  },

  clear() {
    try {
      window.sessionStorage.clear();
      return true;
    } catch (error) {
      console.error(`Error clearing sessionStorage: ${error}`);
      return false;
    }
  },

  has(key) {
    return window.sessionStorage.getItem(key) !== null;
  }
};

export default storage;
