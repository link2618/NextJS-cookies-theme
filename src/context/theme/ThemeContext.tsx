import { createContext } from 'react';

interface ContextProps {
    theme: string;

    // Methods
    updateTheme: () => void;
}

export const ThemeContext = createContext({} as ContextProps);
