import { PrimaryButton, SecondaryButton } from 'components/Button'
import CircleArrowRight from 'components/Icons/CircleArrowRight'
import { Row } from 'components/Row'
import { waitingText } from 'constants/misc'
import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 25px;
  margin-top: 12rem;
`

export const Title = styled.div`
  font-size: 72px;
  font-weight: 700;
  line-height: 98px;
  max-width: 850px;
  margin: 30px;
  margin-left: 0;
`

export const SubTitle = styled(Title)`
  font-size: 28px;
  font-weight: 400;
  line-height: 38px;
  color: ${({ theme }) => theme.G60};
`

export default function HeroSection() {
  return (
    <Container>
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
