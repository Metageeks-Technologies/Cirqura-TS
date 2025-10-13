import { Box, Container, VStack, Text, SimpleGrid, Card, Button, Link } from '@chakra-ui/react'

interface ServiceCard {
  title: string
  description: string
  features: string[]
  icon: string
}

const servicesData: ServiceCard[] = [
  {
    title: 'Collection Services',
    description: 'Comprehensive glass waste collection from businesses across the UAE with scheduled pickups and dedicated collection teams.',
    features: [
      'Scheduled collection routes',
      'Fleet of specialized vehicles',
      'Real-time tracking system',
      'Eco-friendly collection bags'
    ],
    icon: '🚛'
  },
  {
    title: 'Sustainability Solutions',
    description: 'Training programs and consulting services to help businesses implement sustainable waste management practices.',
    features: [
      'Employee training workshops',
      'Sustainability consulting',
      'Waste audit and analysis',
      'Certification support'
    ],
    icon: '🎯'
  },
  {
    title: 'Data & Analytics',
    description: 'Advanced tracking and reporting of carbon footprint reduction, recycling metrics, and environmental impact measurement.',
    features: [
      'Carbon footprint tracking',
      'Recycling metrics dashboard',
      'Environmental impact reports',
      'Performance analytics'
    ],
    icon: '📊'
  }
]

export default function ServiceOverview() {
  return (
    <Box py={16} bg="gray.50" id="services">
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="teal.400"
            >
              Our Services
            </Text>
            <Text
              fontSize="lg"
              color="gray.600"
              maxW="2xl"
              mx="auto"
            >
              Comprehensive glass recycling solutions designed to meet the unique needs of UAE businesses
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            gap={8}
            w="full"
          >
            {servicesData.map((service, index) => (
              <Card.Root
                key={index}
                variant="elevated"
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'xl'
                }}
                transition="all 0.3s ease"
              >
                <Card.Body p={6}>
                  <VStack gap={4} align="stretch">
                    <VStack gap={3} align="start">
                      <Text fontSize="3xl">
                        {service.icon}
                      </Text>
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color="teal.400"
                      >
                        {service.title}
                      </Text>
                      <Text color="gray.600" lineHeight="1.6">
                        {service.description}
                      </Text>
                    </VStack>

                    <VStack gap={2} align="start">
                      {service.features.map((feature, featureIndex) => (
                        <Text
                          key={featureIndex}
                          fontSize="sm"
                          color="gray.700"
                          display="flex"
                          alignItems="center"
                          gap={2}
                        >
                          <Text as="span" color="teal.400">✓</Text>
                          {feature}
                        </Text>
                      ))}
                    </VStack>
                  </VStack>
                </Card.Body>

                <Card.Footer p={6} pt={0}>
                  <Link href="#contact" _hover={{ textDecoration: 'none' }} w="full">
                    <Button
                      w="full"
                      variant="outline"
                      colorPalette="teal"
                      size="sm"
                    >
                      Learn More
                    </Button>
                  </Link>
                </Card.Footer>
              </Card.Root>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}