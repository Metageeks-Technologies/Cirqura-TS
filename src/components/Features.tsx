'use client'

import { Box, Container, VStack, Text, HStack, Icon } from '@chakra-ui/react'
import { LuRecycle, LuTrendingUp, LuAward } from 'react-icons/lu'

const features = [
  {
    icon: LuRecycle,
    title: 'Collection Services',
    description: 'Comprehensive glass collection solutions for businesses across UAE. We handle everything from pickup to processing.',
    color: 'teal'
  },
  {
    icon: LuTrendingUp,
    title: 'Sustainability Analytics',
    description: 'Track your environmental impact with detailed carbon footprint analysis and sustainability reporting.',
    color: 'green'
  },
  {
    icon: LuAward,
    title: 'Quality Assurance',
    description: '100% recyclable glass with zero quality loss. Certified processes ensuring the highest standards.',
    color: 'orange'
  }
]

export default function Features() {
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
              Why Businesses Choose Cirqura
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
            >
              Leading the sustainable glass recycling revolution in UAE with innovative collection, training, and tracking solutions.
            </Text>
          </VStack>

          {/* Features Grid */}
          <HStack
            gap={{ base: 8, md: 12 }}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            justify="center"
            align="start"
          >
            {features.map((feature, index) => (
              <VStack
                key={index}
                gap={4}
                textAlign="center"
                flex="1"
                maxW={{ base: 'full', md: '300px' }}
                p={6}
                borderRadius="xl"
                bg="white"
                boxShadow="sm"
                _hover={{ boxShadow: 'md', transform: 'translateY(-4px)' }}
                transition="all 0.3s ease"
              >
                <Box
                  p={4}
                  borderRadius="full"
                  bg={`${feature.color}.50`}
                  color={`${feature.color}.500`}
                >
                  <Icon as={feature.icon} boxSize={8} />
                </Box>
                <VStack gap={3}>
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
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}