"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomThemeProvider } from "@/context/themeContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { styled } from "styled-components";
import Card from "@/components/Card";
import Wrapper from "@/styles/Wrapper";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

const StyledHome = styled.main`
  color: ${(props) => props.theme.fontColor};

  & h1 {
    color: ${props => props.theme.colors.textPrimary};
    text-transform: uppercase;
    padding-top: 1em;
    text-align: center;
  }
`;

export default function Home() {
  const { topMovies } = useContext(AppContext);

  return (
    <CustomThemeProvider>
      <StyledHome>
        <GlobalStyle />
        <Header />
        <h1>Top 20 movies of all time</h1>
        <Wrapper>
          {topMovies.length > 0 ? (
            topMovies.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                title={movie.title}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                vote={movie.vote_average * 10}
                release={movie.release_date}
              />
            ))
          ) : (
            <h2>Loading Data...</h2>
          )}
        </Wrapper>
        <Footer />
      </StyledHome>
    </CustomThemeProvider>
  );
}
