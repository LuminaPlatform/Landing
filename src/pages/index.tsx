import HeroSection from '../components/App/HeroSection'
import LandingSection from 'components/App/LandingSection'
import { Box, Button, Container, Link } from '@chakra-ui/react'
import About from 'components/App/About'
import Table from 'components/App/Table'
import { axiosClient } from 'config/axios'

interface IndexProps {
  projects: any
}
export default function Index({ projects }: IndexProps) {
  return (
    <Container position="relative" pt={['40px', null, '120px']} maxWidth="1280px" px={['20px', null, '40px', '60px']}>
      <HeroSection />
      {projects.length !== 0 && (
        <Box width="full">
          <Box width="full" overflowX="auto">
            <Table projectsData={projects} />
          </Box>
          <Button
            mt="24px"
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
            Explore More
          </Button>
        </Box>
      )}
      <LandingSection
        id="trusted-community"
        href="https://app.lumina.credit"
        title="Trusted Community"
        exploreButtonTitle="Explore in community"
        imgSrc="/static/images/trusted_community.png"
        description="<p>We form our community using a handful of RetroPGF3 badge holders at first. Then, we build upon the community by using their connections gradually until we form a big community. <br/> <br/> This is to make sure that we have a decentralized but still reliable solution based on blockchain. </p>"
      />
      <LandingSection
        hasShadow
        id="trusted-reviews"
        href="https://app.lumina.credit/reviews"
        title="Trusted Reviews"
        exploreButtonTitle="Explore in reviews"
        description="<p>You can easily trust reviews since they are written by trusted community members. However, we may not know them at all! <br/> <br/> This is the beauty of blockchain. We also incorporate algorithms to detect malicious reviews and tag the users as suspicious if necessary. </p>"
        imgSrc="/static/images/trusted_reviews.png"
      />
      <About />
    </Container>
  )
}

export const getServerSideProps = async () => {
  try {
    const postData = {
      0: {
        model: 'Project',
        model_id: 'None',
        limit: 10,
        orders: [],
        graph: {
          fetch_fields: [
            {
              name: 'id',
            },
            {
              name: 'name',
            },
            {
              name: 'logo',
            },
            { name: 'content.fundingSources' },
            { name: 'content.includedInBallots' },
            { name: 'content.lists.count' },
            { name: 'content.profile' },
            { name: 'content.impactCategory' },
          ],
        },
        condition: {},
      },
    }
    const response = await axiosClient.post('/read/fetch/', postData)
    const projects = await response.data['0']
    return {
      props: {
        projects,
      },
    }
  } catch (error) {
    return { props: { projects: [] } }
  }
}
