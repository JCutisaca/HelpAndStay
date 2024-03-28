"use client"
import AuthProvider from "./AuthProvider/AuthProvider";
import { UserProvider } from "./UserProvider/UserProvider";
import i18next from "@/languages/i18n";

export default function GlobalProvider({ children }) {
    return (
        <AuthProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </AuthProvider>
    )
}