import Link from "next/link";
import styled from "styled-components";
import { useToggleTheme } from "@/context/themeContext";

const StyledHeader = styled.header`
    background-color: ${props => props.theme.bgColor};
    padding: .2em 5em;

    & a {
        font-size: 32px;
        text-decoration: none;
        color: ${props => props.theme.fontColor};
    }
`

export default function Header() {
    const { toggleTheme } = useToggleTheme();

    return(
        <StyledHeader>
            <Link href='/'>TMDB App</Link>
            <button onClick={() => toggleTheme()}>mode</button>
        </StyledHeader>
    )
}