'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomThemeProvider } from "@/context/themeContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { styled } from "styled-components";
import Wrapper from "@/styles/Wrapper";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

interface MoviePageProps {
    params: {
        id: string
    }
}

interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    runtime: number;
    production_companies: [
      {
        name: string;
      }
    ];
    genres: [
      {
        name: string;
      }
    ];
  }

const StyledHome = styled.main`
  color: ${(props) => props.theme.fontColor};

  & h1 {
    color: ${props => props.theme.colors.textPrimary};
    text-transform: uppercase;
    padding-top: 1em;
    text-align: center;
  }
`;

export default function MoviePage({ params }: MoviePageProps) {

        const [movie, setMovie] = useState<Movie>();
      
        const key = "api_key=b088024ef25505a20beb366af0828e5e";
        const fetchUrl = "https://api.themoviedb.org/3/movie/";
      
        useEffect(() => {
          async function fetchData() {
            const data = await fetch(`${fetchUrl}${params.id}?${key}`);
            const dataJason = await data.json();
            setMovie(dataJason);
          }
          fetchData();
        }, [params.id]);
        
        console.log(movie)
  return (
    <CustomThemeProvider>
      <StyledHome>
        <GlobalStyle />
        <Header />
        <h1>{movie && movie.title}</h1>
        <Wrapper>
         {movie && movie.title}
        </Wrapper>
        <Footer />
      </StyledHome>
    </CustomThemeProvider>
  );
}
