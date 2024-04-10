import styled from 'styled-components'
import { Box, Button, Link, Img } from '@chakra-ui/react'

import CircleArrowRight from 'components/Icons/CircleArrowRight'
import { Row } from 'components/Row'

export const Container = styled.div`
  position: relative;
  margin-bottom: 16rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 6rem;
  `};
`

export const Title = styled.div`
  font-size: 72px;
  font-weight: 700;
  line-height: 98px;
  max-width: 850px;
  margin: 30px;
  margin-left: 0;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 50px;
    line-height: 60px;
  `};
`

export const SubTitle = styled(Title)`
  font-size: 28px;
  font-weight: 400;
  line-height: 38px;
  color: ${({ theme }) => theme.G60};
  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 20px;
  `};
`

export default function HeroSection() {
  return (
    <Container>
      <Img
        display={{ base: 'none', md: 'inline-block' }}
        width="23px"
        height="23px"
        src="/static/images/star.png"
        position="absolute"
        top="-100px"
        left="80px"
      />
      <Img
        display={{ base: 'none', md: 'inline-block' }}
        width="23px"
        height="23px"
        src="/static/images/star.png"
        position="absolute"
        top="-100px"
        right="20%"
      />
      <Img
        display={{ base: 'none', md: 'inline-block' }}
        transform="rotate(-45deg)"
        width="23px"
        height="23px"
        src="/static/images/star.png"
        position="absolute"
        top="-100px"
        right="20%"
      />

      <Img
        display={{ base: 'none', md: 'inline-block' }}
        transform="rotate(-40deg)"
        width="23px"
        height="23px"
        src="/static/images/star.png"
        position="absolute"
        top="154px"
        right="9px"
      />
      <Img
        display={{ base: 'none', md: 'inline-block' }}
        transform="rotate(-85deg)"
        width="23px"
        height="23px"
        src="/static/images/star.png"
        position="absolute"
        top="154px"
        right="9px"
      />

      <Img
        display={{ base: 'none', md: 'inline-block' }}
        width="23px"
        height="23px"
        src="/static/images/star.png"
        position="absolute"
        top="60%"
        right="530px"
      />

      <Box
        rounded="full"
        width="200px"
        height="200px"
        opacity="0.3"
        position="absolute"
        left="-170px"
        top="-100%"
        boxShadow={`0 0 ${200}px ${200}px rgba(255,204,0,0.5)`}
        backgroundColor="rgba(255,204,0,0.5)"
        zIndex={-1}
      />
      <Box
        rounded="full"
        width={{ base: '100px', md: '1102px' }}
        height={{ base: '100px', md: '1102px' }}
        position="absolute"
        right="-500px"
        top="-400px"
      >
        <Img width="1102px" height="1102px" src="/static/images/radial_path.png" />
        <Box
          rounded="full"
          width={{ base: '100px', md: '150px' }}
          height={{ base: '100px', md: '150px' }}
          boxShadow={`0 0 ${150}px ${150}px rgba(6,194,112,0.5)`}
          background="rgba(6,194,112,0.5)"
          opacity="0.3"
          position="absolute"
          top="50%"
          right="60%"
          transform="translateY(-50%)"
          zIndex={-1}
        />
      </Box>

      <Title>Discover through RetroPGF3 community</Title>
      <SubTitle>Lets explore in Projects and Reviews</SubTitle>

      <Row style={{ gap: '24px' }}>
        <Button
          href={'https://app.lumina.credit/projects'}
          as={Link}
          _hover={{
            bg: 'primary.500',
            textDecoration: 'none',
          }}
          _active={{
            bg: 'primary.500',
          }}
          backgroundColor="primary.300"
          color="gray.0"
        >
          Explore Projects
          <CircleArrowRight style={{ marginLeft: '4px' }} />
        </Button>

        <Button
          href={'https://app.lumina.credit/reviews'}
          as={Link}
          _hover={{
            borderColor: 'gray.100',
            color: 'gray.100',
            textDecoration: 'none',
          }}
          _active={{
            borderColor: 'primary.200',
            color: 'primary.200',
          }}
          variant="outline"
          color="primary.50"
          borderColor="primary.50"
        >
          Explore Reviews
        </Button>
      </Row>
    </Container>
  )
}
