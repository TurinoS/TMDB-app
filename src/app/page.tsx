'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CustomThemeProvider } from '@/context/themeContext'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'
import Card from '@/components/Card'
import Wrapper from '@/styles/Wrapper'

const StyledHome = styled.main`
  color: ${props => props.theme.fontColor};
`

export default function Home() {
  return (
    <CustomThemeProvider>
      <StyledHome>
        <GlobalStyle />
        <Header />
        <Wrapper>
          <h1>Hello World!</h1>
          <Card />
        </Wrapper>
        <Footer />
      </StyledHome>
    </CustomThemeProvider>
  )
}
