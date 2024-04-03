import HeroSection from '../components/App/HeroSection'
import LandingSection from 'components/App/LandingSection'
import { Container } from '@chakra-ui/react'
import About from 'components/App/About'
import Table from 'components/App/Table'

export default function Index() {
  return (
    <Container pt={['40px', null, '120px']} maxWidth="1280px" px={['20px', null, '40px', '60px']}>
      <HeroSection />
      <Table />
      <LandingSection
        id="trusted-community"
        href="#"
        title="Trusted Community"
        exploreButtonTitle="Explore in community"
        imgSrc="/static/images/trusted_community.png"
        description="<p>We form our community using a handful of RetroPGF3 badge holders at first. Then, we build upon the community by using their connections gradually until we form a big community. <br/> <br/> This is to make sure that we have a decentralized but still reliable solution based on blockchain. </p>"
      />
      <LandingSection
        hasShadow
        id="trusted-reviews"
        href="#"
        title="Trusted Reviews"
        exploreButtonTitle="Explore in reviews"
        description="<p>You can easily trust reviews since they are written by trusted community members. However, we may not know them at all! <br/> <br/> This is the beauty of blockchain. We also incorporate algorithms to detect malicious reviews and tag the users as suspicious if necessary. </p>"
        imgSrc="/static/images/trusted_reviews.png"
      />
      <About />
    </Container>
  )
}
