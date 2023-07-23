import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  height: 7.5vh;
  font-weight: 600;
  box-shadow: 3px -2px 4px 1px #000;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

export default function Header() {
  return (
    <StyledFooter>
      <p>
        Data from{" "}
        <Link target="_blank" href="https://www.themoviedb.org/">
          TMDB
        </Link>{" "}
        | Developed by{" "}
        <Link target="_blank" href="https://github.com/TurinoS">
          Paulo Turino
        </Link>
      </p>
    </StyledFooter>
  );
}
