"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    runtime: number;
    production_companies: [{
        name: string;
    }]
    genres: [{
        name: string;
    }]
  }
  
  interface AppContextValue {
    movies: Movie[];
  }
  
  export const AppContext = createContext<AppContextValue>({ movies: [] });

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const key = 'api_key=b088024ef25505a20beb366af0828e5e'

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://api.themoviedb.org/3/movie/157336?${key}`);
            const dataJason = await data.json();
            setMovies([dataJason]);
        }
        fetchData();
    }, [])

  return (
    <AppContext.Provider value={{ movies }}>{children}</AppContext.Provider>
  );
};
