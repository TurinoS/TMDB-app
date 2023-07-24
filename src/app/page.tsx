'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CustomThemeProvider } from '@/context/themeContext'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'
import Card from '@/components/Card'
import Wrapper from '@/styles/Wrapper'
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

const StyledHome = styled.main`
  color: ${props => props.theme.fontColor};
`

export default function Home() {
  
  const { movies } = useContext(AppContext)
  console.log(movies)

  const formatDate = (dateString: string) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];    
    
    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month, 10) - 1;
    return `${months[monthIndex]} ${day}, ${year}`;
  };

  return (
    <CustomThemeProvider>
      <StyledHome>
        <GlobalStyle />
        <Header />
        <Wrapper>
          {movies.length > 0 ? movies.map((movie) => (
            <Card key={movie.id} title={movie.title} img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} vote={movie.vote_average * 10} release={formatDate(movie.release_date)} />
          )) : <h2>Loading Data...</h2>}
        </Wrapper>
        <Footer />
      </StyledHome>
    </CustomThemeProvider>
  )
}
