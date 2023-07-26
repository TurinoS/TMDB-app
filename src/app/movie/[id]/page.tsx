'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomThemeProvider } from "@/context/themeContext";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import Image from "next/image";
import Wrapper from "@/styles/Wrapper";

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

const Container = styled.div`
    margin: 5vh 10vw;
    padding: 15px;
    width: 80vw;
    border: 2px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.textSecondary};
    text-decoration: none;
    display: grid;
    grid-template-areas:
        "img title title title"
        "img overview overview overview"
        "img overview overview overview"
        "img data data data"
        "img data data data";
    gap: 1em;

    @media (max-width: 800px) {
        display: flex;
        flex-direction:column;

        & img {
            align-self: center;
        }
    }

    & h1 {
        grid-area: title;
        text-align: center;
        color: ${props => props.theme.colors.secondary};
    }

    & img {
        grid-area: img;
    }

    & p {
        grid-area: overview;
    }

    & ul {
        grid-area: data;
        list-style: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: .5em;

        & .vote {
            width: 70px;
            height: 30px;
            padding: .2em;
            color: ${props => props.theme.colors.secondary};
            font-weight: 600;
            border: 2px solid ${props => props.theme.colors.secondary};
            border-radius: 15px;
            background-color: ${props => props.theme.colors.primary};
        }
        
    }
`

export default function MoviePage({ params }: MoviePageProps) {

        const [movie, setMovie] = useState<Movie>();
      
        const key = "api_key=b088024ef25505a20beb366af0828e5e";
        const fetchUrl = "https://api.themoviedb.org/3/movie/";
        const imageUrl = 'https://image.tmdb.org/t/p/w500/'
      
        useEffect(() => {
          async function fetchData() {
            const data = await fetch(`${fetchUrl}${params.id}?${key}`);
            const dataJason = await data.json();
            setMovie(dataJason);
          }
          fetchData();
        }, [params.id]);
        
        function formatDate(dateString: string) {
            const date = new Date(dateString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}/${month}/${day}`;
          }

  return (
    <CustomThemeProvider>
        <GlobalStyle />
        <Header />
        <Wrapper>
        {movie ? 
        <Container>
            <h1>{movie && movie.title}</h1>
            <Image src={imageUrl + movie.poster_path} alt={movie.title} width={250} height={350} priority />
            <p>{movie.overview}</p>
                <ul>
                <li>
                Genres:{" "}
                {movie.genres.map((item, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    {item.name}
                  </span>
                ))}
              </li>
                    <li>Run Time: {movie.runtime} min</li>
                    <li>Release Date: {formatDate(movie.release_date)}</li>
                    <li>
                Production Companies:{" "}
                {movie.production_companies.map((item, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    {item.name}
                  </span>
                ))}
              </li>
              <li>User Score: <span className="vote">{movie.vote_average}%</span></li>
                </ul>
        </Container>
        : <h2>Loading ...</h2>}
        </Wrapper>
        <Footer />
    </CustomThemeProvider>
  );
}
