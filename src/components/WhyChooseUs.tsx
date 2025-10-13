'use client'

import { Box, Container, VStack, Text, HStack, Link, Grid, GridItem, Button } from '@chakra-ui/react'
import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <Box py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={12}
          alignItems="center"
        >
          {/* Left Column - Images */}
          <GridItem>
            <HStack gap={4} justify="center">
              <Box
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                maxW="250px"
              >
                <Image
                  src="/noah-buscher-x8ZStukS2PM-unsplash.jpg"
                  alt="Glass recycling professionals at work"
                  width={250}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
              <Box
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                maxW="250px"
                mt={8}
              >
                <Image
                  src="/artem-beliaikin-BpQ-ClsKeXg-unsplash.jpg"
                  alt="Sustainable glass processing facility"
                  width={250}
                  height={300}
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </HStack>
          </GridItem>

          {/* Right Column - Content */}
          <GridItem>
            <VStack gap={8} align="start">
              <VStack gap={4} align="start">
                <Text
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="bold"
                  color="gray.800"
                  lineHeight="1.2"
                >
                  Why Choose Us
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="gray.600"
                  lineHeight="1.7"
                >
                  Cirqura leads the sustainable glass recycling revolution in UAE with cutting-edge collection technology, comprehensive training programs, and advanced carbon tracking systems. We&apos;re not just recycling glass—we&apos;re building a sustainable future.
                </Text>
              </VStack>

              <VStack gap={4} align="start">
                <HStack gap={3} align="start">
                  <Box
                    w={6}
                    h={6}
                    borderRadius="full"
                    bg="teal.500"
                    mt={1}
                    flexShrink={0}
                  />
                  <VStack gap={2} align="start">
                    <Text fontWeight="semibold" color="gray.800">
                      Advanced Glass Recycling Technology
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      Our cutting-edge collection systems and carbon tracking technology help UAE businesses recycle smarter, track environmental impact, and contribute to the circular economy.
                    </Text>
                  </VStack>
                </HStack>

                <HStack gap={3} align="start">
                  <Box
                    w={6}
                    h={6}
                    borderRadius="full"
                    bg="teal.500"
                    mt={1}
                    flexShrink={0}
                  />
                  <VStack gap={2} align="start">
                    <Text fontWeight="semibold" color="gray.800">
                      Designed for Sustainability
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      Every feature is crafted to maximize environmental impact while maintaining operational efficiency for UAE businesses.
                    </Text>
                  </VStack>
                </HStack>
              </VStack>

              <Link href="#contact" _hover={{ textDecoration: 'none' }}>
                <Button
                  size="lg"
                  colorPalette="teal"
                  color="white"
                  px={8}
                >
                  Learn More
                </Button>
              </Link>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}