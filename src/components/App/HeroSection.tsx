import { Box, Img } from '@chakra-ui/react'
import { PrimaryButton, SecondaryButton } from 'components/Button'
import CircleArrowRight from 'components/Icons/CircleArrowRight'
import { Row } from 'components/Row'
import { waitingText } from 'constants/misc'
import styled from 'styled-components'

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
    <Container id="retro-rgf3-projects">
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
      <SubTitle>Discover through RetroPGF3 community</SubTitle>
      <Row style={{ gap: '24px' }}>
        <PrimaryButton onClick={() => alert(waitingText)}>
          Explore Projects
          <CircleArrowRight style={{ marginLeft: '4px' }} />
        </PrimaryButton>

        <SecondaryButton onClick={() => alert(waitingText)}>Explore Reviews</SecondaryButton>
      </Row>
    </Container>
  )
}
