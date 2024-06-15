import React from 'react'
import styled from 'styled-components'
import { TbChevronUp } from 'react-icons/tb'
import NavBar from './NavBar'
import { Footer, Disclaimer } from 'components/Disclaimer'
import { Box, Button, Img, Link } from '@chakra-ui/react'

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
    /* height: calc(100vh - 55px - 60px); */
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
      <Box py="19px">
        <NavBar />
      </Box>
      <Content>{children}</Content>
      <Button
        onClick={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        }}
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        _active={{ bg: 'transparent' }}
        mb="36px"
        boxSize="72px"
        mx="auto"
      >
        <TbChevronUp fontSize="40px" />
      </Button>
      <Link mb="24px" mx="auto" href="https://lumina.credit" target="_self">
        <Img src="/static/images/Lumina.svg" width="176px" height="64px" />
      </Link>
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
