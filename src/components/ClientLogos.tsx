'use client'

import { Box, Container, VStack, Text, HStack, Image } from '@chakra-ui/react'

const clientLogos = [
  { name: 'Dubai Beverage Co.', logo: '/logos/dubai-beverage.svg' },
  { name: 'Food & Beverage Corp', logo: '/logos/food-beverage.svg' },
  { name: 'Green Packaging Solutions', logo: '/logos/green-packaging.svg' },
  { name: 'Container Glass Manufacturers', logo: '/logos/container-glass.svg' },
  { name: 'Flat Glass Manufacturers', logo: '/logos/flat-glass.svg' },
  { name: 'Cement Manufacturers', logo: '/logos/cement.svg' },
  { name: 'Dubai Municipality', logo: '/logos/dubai-municipality.svg' },
  { name: 'Tadweer', logo: '/logos/tadweer.svg' },
]

export default function ClientLogos() {
  return (
    <Box py={{ base: 8, md: 12 }} bg="white" borderTop="1px" borderColor="gray.100">
      <Container maxW="7xl">
        <VStack gap={8}>
          <Text
            fontSize={{ base: 'xl', md: '2xl' }}
            fontWeight="semibold"
            color="gray.600"
            textAlign="center"
          >
            Trusted by Leading Companies Across the UAE
          </Text>

          {/* Continuous Loop Animation */}
          <Box overflow="hidden" w="full">
            <Box
              display="flex"
              gap={8}
              animation="scroll 30s linear infinite"
              css={{
                '@keyframes scroll': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-100%)' },
                },
              }}
              minW="200%"
            >
              {/* First set of logos */}
              {clientLogos.map((client, index) => (
                <Box
                  key={`first-${index}`}
                  minW="200px"
                  h="80px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity={0.7}
                  transition="opacity 0.3s"
                  _hover={{ opacity: 1 }}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="gray.500"
                    textAlign="center"
                  >
                    {client.name}
                  </Text>
                </Box>
              ))}

              {/* Duplicate set for seamless loop */}
              {clientLogos.map((client, index) => (
                <Box
                  key={`second-${index}`}
                  minW="200px"
                  h="80px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity={0.7}
                  transition="opacity 0.3s"
                  _hover={{ opacity: 1 }}
                >
                  <Text
                    fontSize="lg"
                    fontWeight="semibold"
                    color="gray.500"
                    textAlign="center"
                  >
                    {client.name}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}