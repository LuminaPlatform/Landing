import { Box, HStack, Img, SimpleGrid, Text, VStack } from '@chakra-ui/react'

type ValueProps = Record<'title' | 'category' | 'src', string>
const Value = ({ category, src, title }: ValueProps) => {
  return (
    <HStack justifyContent={{ base: 'center', md: 'initial' }} p="27px" columnGap="24px" width="full" py="48px">
      <Box padding="20px" rounded="full" background="gray.700">
        <Img src={src} />
      </Box>
      <VStack margin="0px !important" alignItems="flex-start">
        <Text fontWeight="bold" fontSize="36px" color="gray.40">
          {title}
        </Text>
        <Text fontSize="20px" fontWeight="semibold" color="gray.60">
          {category}
        </Text>
      </VStack>
    </HStack>
  )
}
const About = () => {
  return (
    <VStack pt="48px" id="about-us">
      <Text color="gray.40" fontSize="48px" fontWeight="bold">
        About Us
      </Text>
      <Text lineHeight="160%" textAlign="center" pt="24px" fontSize="18px" color="gray.60" fontWeight="medium">
        Lumina is your destination for exploring blockchain technology. We&lsquo;re dedicated to making blockchain
        understandable and accessible for everyone. Our platform brings together knowledgeable badge holders who share
        insights and reviews about RetroPGF and other blockchain projects. Through collaboration and engagement, we aim
        to demystify blockchain and empower individuals to navigate this technology confidently. Join us in shaping the
        future of blockchain together with Lumina!
      </Text>
      <SimpleGrid
        flexDirection="column"
        alignItems="center"
        display={{ base: 'flex', md: 'grid' }}
        width="full"
        gap="24px"
        columns={[1, null, 3]}
        mt="24px"
      >
        <Value category="User" src="/static/images/user-check.png" title="+164" />
        <Value category="Project" src="/static/images/attachment.png" title="104" />
        <Value category="Review" src="/static/images/message-secure.png" title="1182" />
      </SimpleGrid>
    </VStack>
  )
}

export default About
