// API utility functions for backend communication

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

// Helper function for API calls
async function apiCall(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || 'Request failed');
  }

  return response.json();
}

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    return apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (name: string, email: string, password: string) => {
    return apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },
};

// Meal Plans API
export const mealPlansAPI = {
  getAll: async () => {
    return apiCall('/meal-plans');
  },

  create: async (mealPlan: any) => {
    return apiCall('/meal-plans', {
      method: 'POST',
      body: JSON.stringify(mealPlan),
    });
  },
};

// User API
export const userAPI = {
  saveOnboarding: async (data: any) => {
    return apiCall('/user/onboarding', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getSettings: async () => {
    return apiCall('/user/settings');
  },

  updateSettings: async (data: any) => {
    return apiCall('/user/settings', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};


