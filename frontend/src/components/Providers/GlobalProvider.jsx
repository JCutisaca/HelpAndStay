"use client"
import AuthProvider from "./AuthProvider/AuthProvider";
import { UserProvider } from "./UserProvider/UserProvider";

export default function GlobalProvider({ children }) {
    return (
        <AuthProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </AuthProvider>
    )
}