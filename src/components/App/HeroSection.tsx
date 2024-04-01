import { PrimaryButton, SecondaryButton } from 'components/Button'
import CircleArrowRight from 'components/Icons/CircleArrowRight'
import { Row } from 'components/Row'
import { waitingText } from 'constants/misc'
import styled from 'styled-components'

export const Container = styled.div``

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
