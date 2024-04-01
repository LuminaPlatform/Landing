import { Box, Img } from '@chakra-ui/react'
import { PrimaryButton, SecondaryButton } from 'components/Button'
import CircleArrowRight from 'components/Icons/CircleArrowRight'
import { Row } from 'components/Row'
import { waitingText } from 'constants/misc'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
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
        width="400px"
        height="400px"
        opacity="0.3"
        position="absolute"
        left="-170px"
        top="-100%"
        background="radial-gradient(rgba(255,204,0,0.5),rgba(255,204,0,0))"
      />
      <Box
        width={{ base: '350px', md: '500px' }}
        height={{ base: '350px', md: '500px' }}
        opacity="0.3"
        position="absolute"
        right="0"
        top="0"
        background="radial-gradient(rgba(6,194,112,0.5),rgba(6,194,112,0))"
      >
        <Img src="/static/images/radial_path.png" />
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
