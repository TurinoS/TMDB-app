'use client'

import Header from '@/components/Header'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { styled } from 'styled-components'

const StyledHome = styled.main`
  color: ${props => props.theme.fontColor};
`

export default function Home() {
  return (
      <StyledHome>
        <GlobalStyle />
        <Header />
        <h1>Hello World!</h1>
      </StyledHome>
  )
}
