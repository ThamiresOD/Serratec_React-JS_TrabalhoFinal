import React, { createContext } from "react"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false);
    }, []);


    const login = (email, password) => {
        console.log("Login auth", { email, password })


        const loggedUser = {
            id: '123',
            email,
        }

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if (password === "12345") {
            setUser({ id: "123", email })
            navigate("/home");
        }
    };

    const logout = () => {
        console.log("Logout")
        setUser(null)
        localStorage.removeItem("user")
        navigate("/")

    };

    return (

        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );

};