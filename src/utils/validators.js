 // Email validation
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// Password strength (min 6 chars)
export const validatePassword = (password) => {
  return typeof password === 'string' && password.length >= 6;
};

// Username (alphanumeric, 3+ chars)
export const validateUsername = (username) => {
  const re = /^[a-zA-Z0-9_]{3,}$/;
  return re.test(username);
};

// Generic required field validator
export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

// Tag name validation (no special characters)
export const validateTagName = (name) => {
  const re = /^[a-zA-Z0-9\s-]{1,50}$/;
  return re.test(name);
};
