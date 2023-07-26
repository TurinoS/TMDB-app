import { useTheme } from "@/context/themeContext";
import Link from "next/link";
import styled from "styled-components";
import { BsMoonStarsFill, BsFillSunFill, BsSearch, BsFillCameraReelsFill } from "react-icons/bs";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

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

  & a {
    font-size: 30px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  & form {
    display: flex;
    align-items: center;
  }

  & input {
    font-size: 20px;
    padding: .2em .5em;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px 0 0 10px;
    outline: none;
  }

  & .button {
    border-radius: 0 10px 10px 0;
    font-size: 21px;
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
  const { search, setSearch, searchMovie } = useContext(AppContext)

  return (
    <StyledHeader>
      <Link href="/"><BsFillCameraReelsFill /> TMDB App</Link>
      <form onSubmit={(e) => searchMovie(e)}>
        <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type="submit" className="button"><BsSearch /></button>
      </form>
      <button onClick={toggleTheme}>
        {theme.title === "light" ? <BsMoonStarsFill /> : <BsFillSunFill />}
      </button>
    </StyledHeader>
  );
}
