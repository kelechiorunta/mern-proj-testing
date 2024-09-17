import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom'; // Outlet is used to render the nested route elements
import { checkTokenValidity } from './utils/utils';

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Initial state is null (checking)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            const isValid = await checkTokenValidity(); // Call the token check function
            setIsAuthenticated(isValid); // Set authentication status
            setLoading(false); // Set loading to false after checking
        };

        console.log(isAuthenticated)
        verifyToken();
    }, []);



    if (loading) {
        return <div>Loading...</div>; // Show loading indicator while checking
    }

    // If authenticated, allow access to the component, otherwise redirect to login
    return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login-user" />;
};

export default ProtectedRoute;

