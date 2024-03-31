import styled from 'styled-components'
import HeroSection from '../components/App/HeroSection'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
  overflow: visible;
  font-family: Inter;
`

export default function Index() {
  return (
    <Container>
      <HeroSection />
    </Container>
  )
}
