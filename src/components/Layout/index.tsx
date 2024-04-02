import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import { Footer, Disclaimer, LogoLine } from 'components/Disclaimer'
import { Box, Img } from '@chakra-ui/react'

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-flow: column nowrap;
  position: relative;
  overflow: hidden;
`

const Content = styled.div`
  position: relative;
  min-height: calc(970px - 55px - 67px);
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
      <Box
        opacity="0.4"
        blur="2xl"
        zIndex={-1}
        background="rgba(102,0,204,0.5)"
        width="200px"
        position="absolute"
        height="50px"
        bottom="0px"
        right="0px"
        boxShadow={`0 0 ${200}px ${200}px rgba(102,0,204,0.5)`}
      />
      <Box
        opacity="0.12"
        zIndex={-1}
        boxShadow={`0 0 ${200}px ${200}px rgba(6,194,112,0.8)`}
        background="rgba(6,194,112,0.8)"
        width="full"
        position="absolute"
        height="50px"
        bottom="0px"
        right="0px"
      />
      <Img
        position="absolute"
        right={{ base: '90px', md: '155px' }}
        bottom={{ base: '150', md: '110px' }}
        src="/static/images/star.png"
      />
      <Img width="26px" height="26px" position="absolute" right="60px" bottom="130px" src="/static/images/star.png" />
      <Img width="26px" height="26px" position="absolute" right="60px" bottom="44px" src="/static/images/star.png" />
      <Img
        transform="rotate(40deg)"
        width="16px"
        height="16px"
        position="absolute"
        right={{ base: '100px', md: '210px' }}
        bottom={{ base: '12px', md: '36px' }}
        src="/static/images/star.png"
      />
      <Img
        position="absolute"
        left={{ base: '90px', md: '155px' }}
        bottom={{ base: '150', md: '110px' }}
        src="/static/images/star.png"
      />
      <Img width="26px" height="26px" position="absolute" left="60px" bottom="130px" src="/static/images/star.png" />
      <Img width="26px" height="26px" position="absolute" left="60px" bottom="44px" src="/static/images/star.png" />
      <Img
        transform="rotate(40deg)"
        width="16px"
        height="16px"
        position="absolute"
        left={{ base: '100px', md: '210px' }}
        bottom={{ base: '12px', md: '36px' }}
        src="/static/images/star.png"
      />
    </Wrapper>
  )
}
