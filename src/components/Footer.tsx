import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.secondary};
    padding: .5em 5em;
    font-weight: 600;
    box-shadow: 3px -2px 4px 1px #000;

    & a {
        text-decoration: none;
        color: ${props => props.theme.colors.textSecondary};
    }
`

export default function Header() {
    const { toggleTheme, theme } = useTheme();

    return(
        <StyledFooter>
            <p>Data from <Link href='https://www.themoviedb.org/'>TMDB</Link> | Developed by <Link href='https://github.com/TurinoS'>Paulo Turino</Link></p>
        </StyledFooter>
    )
}