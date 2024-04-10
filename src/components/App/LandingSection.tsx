import { Box, Button, GridItem, HStack, Img, SimpleGrid, Text, VStack, Link } from '@chakra-ui/react'

type LandingSection = Record<'imgSrc' | 'description' | 'title' | 'exploreButtonTitle' | 'href' | 'id', string> & {
  hasShadow?: boolean
}

const LandingSection = ({ imgSrc, title, description, exploreButtonTitle, href, id, hasShadow }: LandingSection) => (
  <SimpleGrid
    id={id}
    _even={{
      '&>div:first-of-type': {
        order: { md: 1 },
      },
    }}
    marginTop="48px"
    gap="24px"
    columns={[1, null, 2]}
  >
    <GridItem position="relative" width="full">
      <Img src={imgSrc} />
      {hasShadow && (
        <>
          <Box
            zIndex={-1}
            opacity="0.2"
            rounded="full"
            transform="rotate(-30deg)"
            as="span"
            position="absolute"
            right={{ base: '80px', md: '0' }}
            top={{ base: '120px', md: '80px' }}
            width="70px"
            height="150px"
            background="rgba(102, 0, 204, 0.5)"
            boxShadow={`0 0 ${50}px ${50}px rgba(102, 0, 204, 0.5)`}
          />
          <Box
            zIndex={-1}
            opacity="0.2"
            rounded="full"
            transform="rotate(-30deg)"
            as="span"
            position="absolute"
            right={{ base: '80px', md: '0' }}
            top={{ base: '120px', md: '80px' }}
            width="70px"
            height="150px"
            background="rgba(43, 215, 228, 0.5)"
            boxShadow={`0 0 ${100}px ${100}px rgba(43, 215, 228, 0.5)`}
          />
          <Box
            zIndex={-1}
            opacity="0.2"
            rounded="full"
            transform="rotate(-30deg)"
            as="span"
            position="absolute"
            left={{ base: '150px', md: '100px' }}
            bottom={{ base: '100px', md: '150px' }}
            width="70px"
            height="150px"
            background="rgba(102, 0, 204, 0.5)"
            boxShadow={`0 0 ${50}px ${50}px rgba(102, 0, 204, 0.5)`}
          />
          <Box
            zIndex={-1}
            opacity="0.2"
            rounded="full"
            transform="rotate(-30deg)"
            as="span"
            position="absolute"
            left={{ base: '150px', md: '100px' }}
            bottom={{ base: '100px', md: '150px' }}
            width="70px"
            height="150px"
            background="rgba(43, 215, 228, 0.5)"
            boxShadow={`0 0 ${100}px ${100}px rgba(43, 215, 228, 0.5)`}
          />
        </>
      )}
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
            bg: 'primary.500',
            textDecoration: 'none',
          }}
          _active={{
            bg: 'primary.500',
          }}
          backgroundColor="primary.300"
          color="gray.0"
        >
          {exploreButtonTitle}
        </Button>
      </HStack>
    </GridItem>
  </SimpleGrid>
)

export default LandingSection
