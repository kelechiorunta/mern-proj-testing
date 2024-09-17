// utils/authService.js

import axios from 'axios';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8000/auth/login-user', { email, password });

    // Return the currentUser from the response
    return response.data.currentUser;
  } catch (err) {
    console.error('Error during login:', err?.response?.data?.error || err.message);
    throw new Error(err?.response?.data?.error || 'An error occurred during login');
  }
};
