import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import styled from "styled-components";
import { BsMoonStarsFill, BsFillSunFill, BsFillCameraReelsFill } from "react-icons/bs";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 0 5em;
  height: 10vh;
  font-weight: 600;
  box-shadow: 3px 2px 4px 1px #000;
  position: sticky;
  top: 0;
  z-index: 2;

  @media (max-width: 500px) {
    padding: 0 2em;
  }

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

    &:hover {
      box-shadow: 1px 1px 2px 1px #000;
      cursor: pointer;
      transition: 400ms;
    }
  }
`;

export default function Header() {
  const { toggleTheme, theme } = useTheme();

  return (
    <StyledHeader>
      <Link href="/"><BsFillCameraReelsFill /> TMDB App</Link>
      <button onClick={toggleTheme}>
        {theme.title === "light" ? <BsMoonStarsFill /> : <BsFillSunFill />}
      </button>
    </StyledHeader>
  );
}
