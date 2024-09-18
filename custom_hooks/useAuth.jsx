import React, { useState } from 'react'
import { loginUser } from '../../utils/authService'

export default function useAuth() {
    const [loggedInUser, setLoggedInUser] = useState()

    const [error, setError] = useState(null);

  const handleAuthLogin = async (email, password) => {
    try {
      const user = await loginUser(email, password);
      setLoggedInUser(user); // Set the user state after a successful login
      return user; // Optionally return the user
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    loggedInUser,
    error,
    handleAuthLogin,
  };
};
