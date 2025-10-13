'use client'

import { Box, Container, VStack, Text, HStack, Input, Button, Grid, GridItem } from '@chakra-ui/react'
import { LuMail } from 'react-icons/lu'

export default function Newsletter() {
  return (
    <Box py={{ base: 16, md: 20 }} bg="teal.500">
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
          gap={12}
          alignItems="center"
        >
          {/* Left Column - Content */}
          <GridItem>
            <VStack gap={6} align="start">
              <VStack gap={4} align="start">
                <Text
                  fontSize={{ base: '2xl', md: '3xl' }}
                  fontWeight="bold"
                  color="white"
                  lineHeight="1.2"
                >
                  Let&apos;s Stay Connected
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="white"
                  opacity={0.9}
                  lineHeight="1.7"
                >
                  Join 5000+ startups growing with Cirqura. Get the latest updates on sustainable glass recycling innovations, industry insights, and exclusive sustainability tips.
                </Text>
              </VStack>

              {/* Newsletter Form */}
              <VStack gap={4} w="full" maxW="400px">
                <HStack gap={3} w="full">
                  <Input
                    placeholder="Enter your email address"
                    bg="white"
                    color="gray.800"
                    _placeholder={{ color: 'gray.500' }}
                    size="lg"
                  />
                  <Button
                    colorPalette="white"
                    variant="solid"
                    size="lg"
                    px={6}
                  >
                    <LuMail />
                  </Button>
                </HStack>
                <Text fontSize="sm" color="white" opacity={0.8} textAlign="center">
                  Join 15,000+ professionals already subscribed
                </Text>
              </VStack>
            </VStack>
          </GridItem>

          {/* Right Column - Additional Content */}
          <GridItem>
            <VStack gap={6} align="start" color="white">
              <VStack gap={4} align="start">
                <Text fontSize="lg" fontWeight="semibold">
                  Get Started Today
                </Text>
                <Text fontSize="md" opacity={0.9} lineHeight="1.6">
                  Begin your sustainable glass recycling journey with Cirqura. Contact our team for a customized consultation and discover how we can help your business achieve its environmental goals.
                </Text>
              </VStack>
              <Button
                colorPalette="white"
                variant="outline"
                size="lg"
                color="white"
                borderColor="white"
                _hover={{ bg: 'white', color: 'teal.500' }}
              >
                Get Started Now
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}