'use client'

import { Box, Container, VStack, Text, HStack, Button, Grid, GridItem, Badge } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    period: 'per month',
    description: 'Perfect for small businesses starting their sustainability journey',
    features: [
      'Up to 500kg monthly collection',
      'Bi-weekly pickups',
      'Basic sustainability training',
      'Monthly impact reports',
      'Email support',
      'Standard processing time'
    ],
    cta: 'Try for free',
    popular: false
  },
  {
    name: 'Growth Plan',
    price: '$599',
    period: 'per month',
    description: 'Ideal for growing businesses with higher recycling needs',
    features: [
      'Up to 2 tons monthly collection',
      'Weekly pickups',
      'Advanced sustainability training',
      'Real-time carbon tracking',
      'Priority phone & email support',
      'Express processing',
      'Custom reporting dashboard'
    ],
    cta: 'Try for free',
    popular: true
  },
  {
    name: 'Business',
    price: '$1599',
    period: 'per month',
    description: 'Complete sustainability solution for large enterprises',
    features: [
      'Unlimited collection',
      'Daily pickups available',
      'Comprehensive team training',
      'Advanced analytics & insights',
      'Dedicated account manager',
      'Instant processing',
      'Custom integration options',
      'Sustainability certification support'
    ],
    cta: 'Try for free',
    popular: false
  }
]

export default function Pricing() {
  return (
    <Box py={{ base: 16, md: 20 }} bg="gray.50">
      <Container maxW="7xl">
        <VStack gap={12}>
          {/* Section Header */}
          <VStack gap={4} textAlign="center">
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="bold"
              color="gray.800"
            >
              Great Affordable Pricing Plans
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
            >
              Choose the perfect plan for your business needs. All plans include our core glass recycling services with different levels of support and features.
            </Text>
          </VStack>

          {/* Pricing Cards */}
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="full"
          >
            {pricingPlans.map((plan, index) => (
              <GridItem key={index}>
                <Box
                  position="relative"
                  p={8}
                  borderRadius="xl"
                  bg="white"
                  boxShadow="sm"
                  h="full"
                  border={plan.popular ? '2px solid' : '2px solid'}
                  borderColor={plan.popular ? 'teal.500' : 'gray.200'}
                  _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
                  transition="all 0.3s ease"
                >
                  {plan.popular && (
                    <Badge
                      position="absolute"
                      top={-3}
                      left="50%"
                      transform="translateX(-50%)"
                      colorPalette="teal"
                      variant="solid"
                      px={4}
                      py={1}
                    >
                      Most Popular
                    </Badge>
                  )}

                  <VStack gap={6} h="full">
                    {/* Plan Header */}
                    <VStack gap={2}>
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color="gray.800"
                      >
                        {plan.name}
                      </Text>
                      <VStack gap={1}>
                        <HStack gap={1}>
                          <Text
                            fontSize="4xl"
                            fontWeight="bold"
                            color="teal.500"
                          >
                            {plan.price}
                          </Text>
                          <Text
                            fontSize="lg"
                            color="gray.600"
                          >
                            {plan.period}
                          </Text>
                        </HStack>
                      </VStack>
                      <Text
                        fontSize="sm"
                        color="gray.600"
                        textAlign="center"
                      >
                        {plan.description}
                      </Text>
                    </VStack>

                    {/* Features */}
                    <VStack gap={3} flex={1} align="start" w="full">
                      {plan.features.map((feature, featureIndex) => (
                        <HStack key={featureIndex} gap={3} w="full">
                          <Box color="teal.500" flexShrink={0}>
                            <LuCheck />
                          </Box>
                          <Text
                            fontSize="sm"
                            color="gray.700"
                          >
                            {feature}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>

                    {/* CTA Button */}
                    <Button
                      colorPalette={plan.popular ? 'teal' : 'gray'}
                      variant={plan.popular ? 'solid' : 'outline'}
                      size="lg"
                      w="full"
                      color={plan.popular ? 'white' : 'gray.700'}
                    >
                      {plan.cta}
                    </Button>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  )
}