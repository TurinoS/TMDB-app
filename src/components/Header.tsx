import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import styled from "styled-components";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 5em;
  height: 10vh;
  font-weight: 600;
  box-shadow: 3px 2px 4px 1px #000;

  & a {
    font-size: 30px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  & button {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 0.2em 0.5em 0;
    font-size: 30px;
    border-radius: 30%;
  }
`;

export default function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <StyledHeader>
      <Link href="/">TMDB App</Link>
      <button onClick={toggleTheme}>
        {theme.title === "light" ? <BsMoonStarsFill /> : <BsFillSunFill />}
      </button>
    </StyledHeader>
  );
}
