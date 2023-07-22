import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string
        colors: {
            primary: string
            secondary: string
            button: string
            text: string
            textButton: string
        }
    }
}