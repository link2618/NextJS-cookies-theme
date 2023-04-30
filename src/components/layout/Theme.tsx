import { FC, ReactNode, useContext, useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";

import { customTheme, darkTheme, lightTheme } from "@/themes";

import { ThemeContext } from '@/context/theme';

interface Props {
    children?: ReactNode;
}

export const CustomTheme: FC<Props> = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    const [currentTheme, setCurrentTheme] = useState(lightTheme)

    useEffect(() => {
        const cookieTheme = theme || 'light';
        const selectedTheme = cookieTheme === 'light'
            ? lightTheme
            : (cookieTheme === 'dark')
              ? darkTheme
              : customTheme;
        
        setCurrentTheme( selectedTheme );
    }, [theme])

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};