'use client'

import { Box, Container, VStack, Text, HStack, Icon, Grid, GridItem } from '@chakra-ui/react'
import { LuTruck, LuUsers, LuTrendingUp, LuLeaf, LuShield, LuClock } from 'react-icons/lu'

const platformFeatures = [
  {
    icon: LuTruck,
    title: 'Efficient Collection',
    description: 'Streamlined glass collection process with scheduled pickups and real-time tracking across UAE.'
  },
  {
    icon: LuUsers,
    title: 'Training Programs',
    description: 'Comprehensive sustainability training for your team to maximize recycling impact.'
  },
  {
    icon: LuTrendingUp,
    title: 'Analytics Dashboard',
    description: 'Real-time insights into your recycling performance and environmental impact metrics.'
  },
  {
    icon: LuLeaf,
    title: 'Carbon Tracking',
    description: 'Track your carbon footprint reduction and sustainability goals with detailed reporting.'
  },
  {
    icon: LuShield,
    title: 'Quality Assurance',
    description: '100% recyclable glass with zero quality loss through our certified processes.'
  },
  {
    icon: LuClock,
    title: 'Regular Updates',
    description: 'Continuous platform improvements and feature updates to enhance your experience.'
  }
]

export default function PlatformFeatures() {
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
              An Amazing Cirqura Platform
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="3xl"
            >
              Built for UAE businesses with cutting-edge recycling technology, comprehensive training programs, and advanced sustainability tracking.
            </Text>
          </VStack>

          {/* Features Grid */}
          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="full"
          >
            {platformFeatures.map((feature, index) => (
              <GridItem key={index}>
                <VStack
                  gap={4}
                  p={6}
                  borderRadius="xl"
                  bg="white"
                  boxShadow="sm"
                  h="full"
                  _hover={{ boxShadow: 'md', transform: 'translateY(-4px)' }}
                  transition="all 0.3s ease"
                >
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg="teal.50"
                    color="teal.500"
                  >
                    <Icon as={feature.icon} boxSize={6} />
                  </Box>
                  <VStack gap={3} textAlign="center" flex={1}>
                    <Text
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight="semibold"
                      color="gray.800"
                    >
                      {feature.title}
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      color="gray.600"
                      lineHeight="1.6"
                    >
                      {feature.description}
                    </Text>
                  </VStack>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}