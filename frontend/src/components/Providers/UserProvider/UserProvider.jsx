import { createContext, useContext, useState } from "react";
export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw Error("useUser must be used within a UserContext");
    }
    return context;
};