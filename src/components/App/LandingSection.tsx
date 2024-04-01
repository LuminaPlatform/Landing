import { Box, Button, GridItem, HStack, Img, SimpleGrid, Text, VStack, Link } from '@chakra-ui/react'

type LandingSection = Record<'imgSrc' | 'description' | 'title' | 'exploreButtonTitle' | 'href' | 'id', string>

const LandingSection = ({ imgSrc, title, description, exploreButtonTitle, href, id }: LandingSection) => (
  <SimpleGrid
    id={id}
    _odd={{
      '&>div:first-of-type': {
        order: { md: 1 },
      },
    }}
    marginTop="48px"
    gap="24px"
    columns={[1, null, 2]}
  >
    <GridItem width="full">
      <Img src={imgSrc} />
    </GridItem>
    <GridItem as={VStack} justifyContent="center">
      <Text width="full" textAlign="left" color="gray.40" pb="24px" fontSize="48px" fontWeight="bold">
        {title}
      </Text>
      <Box lineHeight="160%" color="gray.60" fontSize="18px" dangerouslySetInnerHTML={{ __html: description }} />
      <HStack justifyContent={{ base: 'space-between', md: 'initial' }} columnGap="24px" width="full" pt="40px">
        <Button
          href={href}
          as={Link}
          _hover={{
            bg: 'primary.400',
          }}
          _active={{
            bg: 'primary.500',
          }}
          backgroundColor="primary.300"
          color="gray.0"
        >
          {exploreButtonTitle}
        </Button>
        <Button
          _hover={{
            borderColor: 'primary.100',
            color: 'primary.100',
          }}
          _active={{
            borderColor: 'primary.200',
            color: 'primary.200',
          }}
          variant="outline"
          color="primary.50"
          borderColor="primary.50"
        >
          connect to join
        </Button>
      </HStack>
    </GridItem>
  </SimpleGrid>
)

export default LandingSection
