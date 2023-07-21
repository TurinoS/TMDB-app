import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "@/styles/theme";

export function useToggleTheme() {
    const [theme, setTheme] = useState('dark');
    
    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        console.log(theme)
    }

    return { theme, toggleTheme };
}

export default function CustomThemeProvider({ children }: {children: ReactNode}) {
    const { theme } = useToggleTheme();

    return(
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    )
}