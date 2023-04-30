import { FC, ReactNode, useReducer, useEffect } from 'react';
import { ThemeContext, themeReducer } from './';
import Cookies from 'js-cookie';

export interface ThemeState {
    theme: string;
}

interface Props{
    children?:ReactNode;
}

const Theme_INITIAL_STATE: ThemeState = {
    theme: 'light',
};

export const ThemeProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, Theme_INITIAL_STATE);

    const updateTheme = () => {
        const theme = Cookies.get('theme') || 'light';

        dispatch({ type: '[Theme] - Change', payload: theme });
    }

    useEffect(() => {
        updateTheme();
    }, []);

    return (
        <ThemeContext.Provider
        value={{
            ...state,

            // Methods
            updateTheme,
        }}
        >
            {children}
        </ThemeContext.Provider>
    );
};