/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from 'react';

interface IContextTypes {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    openSidebar: boolean;
    toggleSidebar: () => void;
}

const DarkModeContext = createContext<IContextTypes | undefined>(undefined);

export function useDarkModeContext() {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkModeContext must be used within a DarkModeProvider');
    }
    return context;
}

interface DarkModeProviderProps {
    children: ReactNode;
}

export function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const toggleSidebar = () => {
        setOpenSidebar((prev) => !prev);
    };

    const contextValue: IContextTypes = {
        isDarkMode,
        toggleDarkMode,
        openSidebar,
        toggleSidebar,
    };

    return (
        <DarkModeContext.Provider value={contextValue}>
            {children}
        </DarkModeContext.Provider>
    );
}
