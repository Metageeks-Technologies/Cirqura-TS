'use client'

import { Box, Container, VStack, Text, HStack } from '@chakra-ui/react'
import Image from 'next/image'

const partners = [
  { name: 'Emirates', logo: '/lacey-williams-Jwh_k0K_QOM-unsplash.jpg' },
  { name: 'Dubai Holding', logo: '/noah-buscher-x8ZStukS2PM-unsplash.jpg' },
  { name: 'Emaar', logo: '/artem-beliaikin-BpQ-ClsKeXg-unsplash.jpg' },
  { name: 'Nike', logo: '/window.svg' },
  { name: 'Amazon', logo: '/lacey-williams-Jwh_k0K_QOM-unsplash.jpg' }
]

export default function TrustedPartners() {
  return (
    <Box py={{ base: 16, md: 20 }}>
      <Container maxW="7xl">
        <VStack gap={12}>
          {/* Section Header */}
          <VStack gap={4} textAlign="center">
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="bold"
              color="gray.800"
            >
              Trusted by Global Brands
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
            >
              Leading businesses across UAE trust Cirqura for their glass recycling needs, helping them achieve sustainability goals and reduce environmental impact.
            </Text>
          </VStack>

          {/* Partners Logos */}
          <HStack
            gap={{ base: 8, md: 12 }}
            flexWrap="wrap"
            justify="center"
            align="center"
            w="full"
          >
            {partners.map((partner, index) => (
              <Box
                key={index}
                p={6}
                borderRadius="lg"
                bg="white"
                boxShadow="sm"
                _hover={{ boxShadow: 'md', transform: 'translateY(-2px)', opacity: 1 }}
                transition="all 0.3s ease"
                opacity={0.7}
              >
                <Box
                  w={{ base: '120px', md: '150px' }}
                  h={{ base: '60px', md: '80px' }}
                  position="relative"
                  borderRadius="md"
                  overflow="hidden"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}