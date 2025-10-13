'use client'

import { Box, Container, VStack, Text, Button, HStack, Link, Grid, GridItem } from '@chakra-ui/react'
import Image from 'next/image'
import { ConsultationPopup } from '@/components/ConsultationPopup'

export default function Hero() {
  return (
    <Box
      bgGradient="linear(to-br, teal.50, teal.100)"
      py={{ base: 12, md: 20 }}
    >
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          gap={8}
          alignItems="center"
        >
          {/* Left Column - Text Content */}
          <GridItem>
            <VStack gap={8} align="start">
              <VStack gap={4} align="start">
                <Text
                  fontSize={{ base: '3xl', md: '5xl' }}
                  fontWeight="bold"
                  style={{ color: 'var(--chakra-colors-teal-400)' }}
                  lineHeight="1.2"
                >
                  Together we will do it
                </Text>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="gray.700"
                  maxW="3xl"
                >
                  Leading sustainable glass recycling solutions in the UAE.
                  Turning waste into resources, one bottle at a time.
                </Text>
              </VStack>

              {/* Animated Statistics */}
              <VStack gap={6} textAlign="left" align="start">
                <Text fontSize="2xl" fontWeight="semibold" style={{ color: 'var(--chakra-colors-teal-400)' }}>
                  UAE Statistics
                </Text>
                <HStack
                  gap={{ base: 4, md: 8 }}
                  flexWrap="wrap"
                  justify="flex-start"
                >
                  <VStack gap={2}>
                    <Text
                      fontSize={{ base: '4xl', md: '5xl' }}
                      fontWeight="bold"
                      style={{ color: 'var(--chakra-colors-teal-400)' }}
                    >
                      100M
                    </Text>
                    <Text fontSize="lg" color="gray.600">
                      Bottles annually
                    </Text>
                  </VStack>
                  <VStack gap={2}>
                    <Text
                      fontSize={{ base: '4xl', md: '5xl' }}
                      fontWeight="bold"
                      style={{ color: 'var(--chakra-colors-teal-400)' }}
                    >
                      10%
                    </Text>
                    <Text fontSize="lg" color="gray.600">
                      Currently recycled
                    </Text>
                  </VStack>
                </HStack>
              </VStack>

              {/* CTA Buttons */}
              <HStack gap={4} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
                <ConsultationPopup
                  trigger={
                    <Button
                      size="lg"
                      colorPalette="teal"
                      color="var(--chakra-colors-white)"
                      px={8}
                    >
                      Get Consultation
                    </Button>
                  }
                />
                <Link href="#services" _hover={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    variant="outline"
                    colorPalette="teal"
                    color="var(--chakra-colors-teal-400)"
                    px={8}
                  >
                    Learn More
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </GridItem>

          {/* Right Column - Image */}
          <GridItem>
            <Box
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
            >
              <Image
                src="/lacey-williams-Jwh_k0K_QOM-unsplash.jpg"
                alt="Sustainable glass recycling in UAE"
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}