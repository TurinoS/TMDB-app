import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            primary: string
            secondary: string
            textSecondary: string
            textPrimary: string
            textButton: string
        }
    }
}