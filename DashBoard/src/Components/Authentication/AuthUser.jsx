import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
    const navigate = useNavigate();

    // Retrieve token from session storage
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString ? JSON.parse(tokenString) : null;
    };

    // Retrieve user from session storage
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        return userString ? JSON.parse(userString) : null;
    };

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    // Save token and user to session storage
    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/'); // Redirect to home page after login
    };

    // Logout function
    const logout = () => {
        sessionStorage.clear();
        setToken(null);
        setUser(null);
        navigate('/'); // Redirect to home page after logout
    };

    // Create an Axios instance with dynamic authorization header
    const http = axios.create({
        baseURL: "http://10.10.10.111:8282/api/v1", // Updated base URL
        headers: {
            "Content-Type": "application/json",
            ...(token ? { "Authorization": `Bearer ${token}` } : {}) // Include Authorization only if token exists
        }
    });

    return {
        setToken: saveToken,
        token,
        user,
        logout,
        http
    };
}
