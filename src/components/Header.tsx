import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.secondary};
    padding: .2em 5em;

    & a {
        font-size: 32px;
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
`

export default function Header() {
    const { toggleTheme, theme } = useTheme();

    return(
        <StyledHeader>
            <Link href='/'>TMDB App</Link>
            <button onClick={toggleTheme}>{theme.title} mode</button>
        </StyledHeader>
    )
}