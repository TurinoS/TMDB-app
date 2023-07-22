'use client'

import Header from '@/components/Header'
import { CustomThemeProvider } from '@/context/themeContext'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

const StyledHome = styled.main`
  color: ${props => props.theme.fontColor};
`

export default function Home() {
  return (
    <CustomThemeProvider>
      <StyledHome>
        <GlobalStyle />
        <Header />
        <h1>Hello World!</h1>
      </StyledHome>
    </CustomThemeProvider>
  )
}
