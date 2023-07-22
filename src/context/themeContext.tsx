'use client';

import { DefaultTheme, ThemeProvider } from "styled-components";
import { createContext, useState, useCallback, useContext } from "react";
import { dark } from "@/styles/themes/dark";
import { light } from "@/styles/themes/light";

interface ThemeContextData {
    toggleTheme(): void
    theme: DefaultTheme
};

interface MainProps {
    children: React.ReactNode
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: MainProps) => {
    const [theme, setTheme] = useState<DefaultTheme>(dark);

    const toggleTheme = useCallback(() => {
        if(theme.title === 'light') {
            setTheme(dark);
        } else {
            setTheme(light);
        };
    }, [theme])

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;