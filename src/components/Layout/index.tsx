import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import { Footer, Disclaimer, LogoLine } from 'components/Disclaimer'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
`

const Content = styled.div`
  position: relative;
  min-height: calc(970px - 55px - 67px);
  overflow: scroll;
  padding-bottom: 50px;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-bottom: 30px;
    height:100%;
  `}

  @media screen and (min-height: 1040px) {
    height: calc(100vh - 55px - 60px);
  }
`

const GradientLine = styled.div`
  width: 95%;
  margin: 12px auto;
  height: 1px;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.1)
  );
`

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <NavBar />
      <Content>{children}</Content>
      <LogoLine />
      <GradientLine />
      <Footer />
      <GradientLine />
      <Disclaimer />
    </Wrapper>
  )
}
