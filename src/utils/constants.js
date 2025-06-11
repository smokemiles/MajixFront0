 // Gender options
export const GENDER_OPTIONS = ['male', 'female', 'other'];

// Role options
export const ROLE_OPTIONS = ['admin', 'customer', 'other'];

// Status options
export const STATUS_OPTIONS = ['active', 'inactive', 'banned'];

// Note status (if ever used)
export const NOTE_STATUS = ['draft', 'published'];

// API base URL (could mirror .env but useful for defaults or non-Axios tools)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

// Local storage keys
export const LOCAL_STORAGE_KEYS = {
  TOKEN: 'nfc_token',
  USER: 'nfc_user',
};

// Tag colors (optional UI helper)
export const TAG_COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
