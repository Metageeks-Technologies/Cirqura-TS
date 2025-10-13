import { Metadata } from 'next'
import { Layout } from '@/components/Layout'
import { ConsultationPopup } from '@/components/ConsultationPopup'
import {
  Box,
  Container,
  VStack,
  Text,
  SimpleGrid,
  Card,
  Button,
  Link,
  Heading,
  HStack,
  Badge,
  List,
  ListItem,
  Accordion,
  AccordionItemTrigger,
  AccordionItemContent,
} from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Glass Recycling Process - Cirqura | 7-Step Recycling Methodology UAE',
  description: 'Discover Cirqura\'s advanced 7-step glass recycling process in UAE. From collection to finished products, learn how we transform glass waste into valuable resources with 40% energy savings and zero quality loss.',
  keywords: [
    'glass recycling process UAE',
    'glass recycling steps Dubai',
    'sustainable glass recycling',
    'circular economy glass',
    'glass bottle recycling process',
    'environmental technology UAE',
    'glass waste management Dubai'
  ],
  openGraph: {
    title: 'Glass Recycling Process - Cirqura | 7-Step Recycling Methodology UAE',
    description: 'Discover Cirqura\'s advanced 7-step glass recycling process in UAE. From collection to finished products.',
    url: 'https://cirqura.ae/process',
    siteName: 'Cirqura',
    locale: 'en_UAE',
    type: 'website',
  },
}

interface ProcessStep {
  step: number
  title: string
  description: string
  details: string[]
  duration: string
  energySavings: string
  environmentalImpact: string
  icon: string
  color: string
}

interface TechnologyFeature {
  name: string
  description: string
  benefits: string[]
  icon: string
}

interface ProcessMetric {
  label: string
  value: string
  change: string
  icon: string
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Pre-Treatment & Quality Assessment',
    description: 'Initial inspection and preparation of collected glass materials',
    details: [
      'Visual inspection for contaminants',
      'Separation of different glass types',
      'Initial cleaning and decontamination',
      'Quality grading and categorization'
    ],
    duration: '2-4 hours',
    energySavings: 'Baseline assessment',
    environmentalImpact: 'Prevents cross-contamination',
    icon: '🔍',
    color: 'blue.400'
  },
  {
    step: 2,
    title: 'Advanced Sorting Technology',
    description: 'Automated sorting using optical scanners and AI-powered systems',
    details: [
      'Optical color sorting systems',
      'Automated contaminant detection',
      'AI-powered quality assessment',
      'Real-time sorting optimization'
    ],
    duration: '30-45 minutes',
    energySavings: '15% efficiency improvement',
    environmentalImpact: '99.5% purity achievement',
    icon: '🤖',
    color: 'purple.400'
  },
  {
    step: 3,
    title: 'Precision Crushing & Grinding',
    description: 'Size reduction using industrial-grade crushing equipment',
    details: [
      'Primary crushing to manageable sizes',
      'Secondary grinding for uniform particles',
      'Magnetic separation of metal contaminants',
      'Dust extraction and air quality control'
    ],
    duration: '1-2 hours',
    energySavings: '25% reduction in processing energy',
    environmentalImpact: 'Dust emissions controlled',
    icon: '⚙️',
    color: 'orange.400'
  },
  {
    step: 4,
    title: 'Intelligent Batch Mixing',
    description: 'Computer-controlled formulation of glass cullet mixtures',
    details: [
      'Precise recipe formulation',
      'Automated weighing systems',
      'Homogeneous mixing processes',
      'Quality control sampling'
    ],
    duration: '45-60 minutes',
    energySavings: '30% material optimization',
    environmentalImpact: 'Consistent product quality',
    icon: '⚗️',
    color: 'green.400'
  },
  {
    step: 5,
    title: 'High-Efficiency Melting',
    description: 'Advanced furnace technology for optimal melting conditions',
    details: [
      'Electric arc furnace technology',
      'Temperature optimization (1400-1600°C)',
      'Advanced combustion control',
      'Energy recovery systems'
    ],
    duration: '4-6 hours',
    energySavings: '40% energy reduction vs virgin glass',
    environmentalImpact: 'Reduced CO₂ emissions',
    icon: '🔥',
    color: 'red.400'
  },
  {
    step: 6,
    title: 'Precision Molding & Forming',
    description: 'Automated forming of recycled glass into new products',
    details: [
      'Computer-controlled molding',
      'Automated quality inspection',
      'Surface treatment application',
      'Packaging preparation'
    ],
    duration: '2-3 hours',
    energySavings: '35% faster production cycles',
    environmentalImpact: 'Zero quality degradation',
    icon: '🏭',
    color: 'cyan.400'
  }
]

const technologyFeatures: TechnologyFeature[] = [
  {
    name: 'AI-Powered Quality Control',
    description: 'Advanced machine learning algorithms ensure consistent product quality',
    benefits: [
      'Real-time defect detection',
      'Automated quality grading',
      'Predictive maintenance alerts',
      'Continuous process optimization'
    ],
    icon: '🧠'
  },
  {
    name: 'IoT Monitoring Systems',
    description: 'Connected sensors provide real-time insights into every process stage',
    benefits: [
      'Remote process monitoring',
      'Predictive analytics',
      'Energy consumption tracking',
      'Automated reporting'
    ],
    icon: '📡'
  },
  {
    name: 'Advanced Furnace Technology',
    description: 'State-of-the-art electric arc furnaces with energy recovery systems',
    benefits: [
      '40% energy savings',
      'Reduced emissions',
      'Improved melt quality',
      'Extended equipment life'
    ],
    icon: '⚡'
  }
]

const processMetrics: ProcessMetric[] = [
  {
    label: 'Energy Efficiency',
    value: '40%',
    change: 'vs virgin glass production',
    icon: '⚡'
  },
  {
    label: 'CO₂ Reduction',
    value: '35%',
    change: 'lower carbon footprint',
    icon: '🌱'
  },
  {
    label: 'Processing Speed',
    value: '60%',
    change: 'faster than traditional methods',
    icon: '🚀'
  },
  {
    label: 'Quality Consistency',
    value: '99.9%',
    change: 'defect-free production',
    icon: '✨'
  }
]

export default function ProcessPage() {
  return (
    <Layout>
      <Box>
        {/* Hero Section */}
        <Box
          backgroundImage="linear-gradient(135deg, rgba(56, 178, 172, 0.9), rgba(49, 151, 149, 0.9)), url('/noah-buscher-x8ZStukS2PM-unsplash.jpg')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          color="white"
          py={{ base: 16, lg: 24 }}
        >
          <Container maxW="7xl">
            <VStack gap={6} textAlign="center">
              <Badge colorPalette="white" size="lg" variant="solid">
                Our Process
              </Badge>
              <Heading
                size={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Advanced Glass Recycling Technology
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                maxW="3xl"
                opacity={0.9}
                lineHeight="1.6"
              >
                Discover our state-of-the-art 7-step glass recycling process that transforms waste into valuable resources.
                From collection to finished products, we combine traditional expertise with cutting-edge technology for maximum efficiency and environmental impact.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Process Overview */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
              <VStack gap={6} align="start">
                <Heading size="xl" color="teal.400">
                  Revolutionary Recycling Process
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.8">
                  Our advanced 7-step glass recycling methodology combines decades of industry expertise with cutting-edge technology
                  to achieve unprecedented efficiency and environmental benefits. Each step is optimized for maximum energy savings and minimal environmental impact.
                </Text>
                <Text fontSize="lg" color="gray.700" lineHeight="1.8">
                  Unlike traditional recycling methods, our process incorporates AI-powered quality control, IoT monitoring systems,
                  and advanced furnace technology to ensure consistent results while significantly reducing energy consumption and emissions.
                </Text>

                <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} w="full">
                  <VStack gap={2} textAlign="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                    <Text fontSize="2xl" color="teal.400">7</Text>
                    <Text fontSize="xs" color="gray.600" fontWeight="semibold">Process Steps</Text>
                  </VStack>
                  <VStack gap={2} textAlign="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                    <Text fontSize="2xl" color="teal.400">40%</Text>
                    <Text fontSize="xs" color="gray.600" fontWeight="semibold">Energy Savings</Text>
                  </VStack>
                  <VStack gap={2} textAlign="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                    <Text fontSize="2xl" color="teal.400">99.9%</Text>
                    <Text fontSize="xs" color="gray.600" fontWeight="semibold">Quality Rate</Text>
                  </VStack>
                  <VStack gap={2} textAlign="center" p={4} bg="white" borderRadius="lg" boxShadow="sm">
                    <Text fontSize="2xl" color="teal.400">24/7</Text>
                    <Text fontSize="xs" color="gray.600" fontWeight="semibold">Monitoring</Text>
                  </VStack>
                </SimpleGrid>
              </VStack>

              <Box
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
              >
                <Box bg="teal.500" color="white" p={4}>
                  <Heading size="md" textAlign="center">Process Benefits</Heading>
                </Box>
                <VStack gap={4} p={6} align="start">
                  <HStack gap={3} align="start">
                    <Text color="teal.400" fontSize="xl">⚡</Text>
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold">Energy Efficiency</Text>
                      <Text fontSize="sm" color="gray.600">40% less energy than virgin glass production</Text>
                    </VStack>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Text color="teal.400" fontSize="xl">🌍</Text>
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold">Environmental Impact</Text>
                      <Text fontSize="sm" color="gray.600">35% reduction in CO₂ emissions</Text>
                    </VStack>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Text color="teal.400" fontSize="xl">🔄</Text>
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold">Infinite Recyclability</Text>
                      <Text fontSize="sm" color="gray.600">Glass can be recycled infinitely with no quality loss</Text>
                    </VStack>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Text color="teal.400" fontSize="xl">📊</Text>
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold">Real-time Tracking</Text>
                      <Text fontSize="sm" color="gray.600">Complete traceability from collection to product</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        {/* Key Metrics */}
        <Box py={{ base: 16, lg: 24 }}>
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Process Performance Metrics
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Our advanced technology delivers measurable results across all key performance indicators.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 2, lg: 4 }} gap={6}>
                {processMetrics.map((metric, index) => (
                  <Card.Root key={index} variant="elevated">
                    <Card.Body textAlign="center">
                      <Text fontSize="3xl" mb={3}>{metric.icon}</Text>
                      <VStack gap={1}>
                        <Text fontSize="sm" color="gray.600">{metric.label}</Text>
                        <Text fontSize="2xl" color="teal.400" fontWeight="bold">{metric.value}</Text>
                        <Text fontSize="xs" color="gray.500">
                          {metric.change}
                        </Text>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Detailed Process Steps */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Our 7-Step Recycling Process
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Each step in our process is carefully engineered for maximum efficiency, quality, and environmental benefit.
                </Text>
              </VStack>

              <Accordion.Root collapsible defaultValue={["step-1"]} maxW="6xl" mx="auto">
                {processSteps.map((step, index) => (
                  <Accordion.Item key={index} value={`step-${step.step}`}>
                    <AccordionItemTrigger>
                      <Box flex="1" textAlign="left">
                        <HStack gap={4} align="center">
                          <Box
                            w={12}
                            h={12}
                            borderRadius="full"
                            bg={`${step.color}`}
                            color="white"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="lg"
                            fontWeight="bold"
                          >
                            {step.step}
                          </Box>
                          <VStack gap={1} align="start">
                            <Heading size="md" color="teal.400">
                              {step.title}
                            </Heading>
                            <Text fontSize="sm" color="gray.600">
                              Duration: {step.duration} • Energy Savings: {step.energySavings}
                            </Text>
                          </VStack>
                        </HStack>
                      </Box>
                    </AccordionItemTrigger>
                    <AccordionItemContent pb={6}>
                      <VStack gap={6} align="start">
                        <Text color="gray.700" lineHeight="1.7">
                          {step.description}
                        </Text>

                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                          <Box>
                            <Text fontWeight="semibold" color="teal.400" mb={3}>
                              Process Details:
                            </Text>
                            <List.Root gap={2}>
                              {step.details.map((detail, detailIndex) => (
                                <ListItem key={detailIndex}>
                                  <HStack gap={2}>
                                    <Text color="teal.400">✓</Text>
                                    <Text fontSize="sm" color="gray.600">{detail}</Text>
                                  </HStack>
                                </ListItem>
                              ))}
                            </List.Root>
                          </Box>

                          <Box>
                            <Text fontWeight="semibold" color="teal.400" mb={3}>
                              Environmental Impact:
                            </Text>
                            <VStack gap={3} align="start">
                              <HStack gap={2}>
                                <Text color="green.400">🌱</Text>
                                <Text fontSize="sm" color="gray.600">{step.environmentalImpact}</Text>
                              </HStack>
                              <HStack gap={2}>
                                <Text color="blue.400">⚡</Text>
                                <Text fontSize="sm" color="gray.600">Energy: {step.energySavings}</Text>
                              </HStack>
                              <HStack gap={2}>
                                <Text color="purple.400">⏱️</Text>
                                <Text fontSize="sm" color="gray.600">Processing: {step.duration}</Text>
                              </HStack>
                            </VStack>
                          </Box>
                        </SimpleGrid>
                      </VStack>
                    </AccordionItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </VStack>
          </Container>
        </Box>

        {/* Technology Integration */}
        <Box py={{ base: 16, lg: 24 }}>
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Technology Integration
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Advanced technology drives every aspect of our recycling process, ensuring optimal performance and environmental benefits.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                {technologyFeatures.map((feature, index) => (
                  <Card.Root key={index} variant="elevated" h="full">
                    <Card.Body>
                      <VStack gap={4}>
                        <Text fontSize="4xl">{feature.icon}</Text>
                        <Heading size="md" color="teal.400" textAlign="center">
                          {feature.name}
                        </Heading>
                        <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                          {feature.description}
                        </Text>
                        <VStack gap={2} align="start" w="full">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <HStack key={benefitIndex} gap={2}>
                              <Text color="teal.400" fontSize="sm">•</Text>
                              <Text fontSize="xs" color="gray.600">{benefit}</Text>
                            </HStack>
                          ))}
                        </VStack>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Environmental Impact Summary */}
        <Box py={{ base: 16, lg: 24 }} bg="teal.500">
          <Container maxW="7xl">
            <VStack gap={12} color="white">
              <VStack gap={4} textAlign="center">
                <Heading size="xl">
                  Environmental Impact Summary
                </Heading>
                <Text fontSize="lg" opacity={0.9} maxW="3xl">
                  Our advanced recycling process delivers significant environmental benefits compared to traditional glass production methods.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
                <VStack gap={4} textAlign="center">
                  <Text fontSize="5xl">🌍</Text>
                  <VStack gap={2}>
                    <Text fontSize="4xl" fontWeight="bold">35%</Text>
                    <Text fontSize="lg" opacity={0.9}>CO₂ Emission Reduction</Text>
                    <Text fontSize="sm" opacity={0.8}>Compared to virgin glass production</Text>
                  </VStack>
                </VStack>

                <VStack gap={4} textAlign="center">
                  <Text fontSize="5xl">⚡</Text>
                  <VStack gap={2}>
                    <Text fontSize="4xl" fontWeight="bold">40%</Text>
                    <Text fontSize="lg" opacity={0.9}>Energy Consumption Reduction</Text>
                    <Text fontSize="sm" opacity={0.8}>Lower energy requirements</Text>
                  </VStack>
                </VStack>

                <VStack gap={4} textAlign="center">
                  <Text fontSize="5xl">🔄</Text>
                  <VStack gap={2}>
                    <Text fontSize="4xl" fontWeight="bold">100%</Text>
                    <Text fontSize="lg" opacity={0.9}>Recyclability Rate</Text>
                    <Text fontSize="sm" opacity={0.8}>Infinite recycling with no quality loss</Text>
                  </VStack>
                </VStack>
              </SimpleGrid>

              <Box bg="rgba(255, 255, 255, 0.1)" p={8} borderRadius="xl" backdropFilter="blur(10px)">
                <Text fontSize="lg" textAlign="center" lineHeight="1.8">
                  <strong>Total Impact:</strong> For every 1,000 tons of glass recycled through our process,
                  we save 400 tons of CO₂ emissions, conserve enough energy to power 200 UAE households for a year,
                  and preserve natural resources equivalent to 2,000 tons of raw materials.
                </Text>
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* Process Timeline Visualization */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Process Timeline
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Complete transformation from waste glass to finished products in 12-18 hours.
                </Text>
              </VStack>

              <Box w="full" maxW="4xl" mx="auto">
                <VStack gap={4}>
                  {processSteps.map((step, index) => (
                    <Card.Root key={index} variant="elevated">
                      <Card.Body>
                        <HStack gap={6} align="center">
                          <Box
                            minW={16}
                            h={16}
                            borderRadius="full"
                            bg={`${step.color}`}
                            color="white"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="xl"
                            fontWeight="bold"
                            flexShrink={0}
                          >
                            {step.step}
                          </Box>

                          <VStack gap={2} align="start" flex="1">
                            <HStack gap={2}>
                              <Text fontSize="2xl">{step.icon}</Text>
                              <Heading size="md" color="teal.400">
                                {step.title}
                              </Heading>
                            </HStack>
                            <Text fontSize="sm" color="gray.600" lineHeight="1.5">
                              {step.description}
                            </Text>
                            <HStack gap={4} wrap="wrap">
                              <Badge colorPalette="teal" variant="subtle" fontSize="xs">
                                Duration: {step.duration}
                              </Badge>
                              <Badge colorPalette="green" variant="subtle" fontSize="xs">
                                Energy: {step.energySavings}
                              </Badge>
                            </HStack>
                          </VStack>
                        </HStack>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </Container>
        </Box>

        {/* Call to Action */}
        <Box py={{ base: 16, lg: 24 }}>
          <Container maxW="7xl">
            <VStack gap={8} textAlign="center">
              <VStack gap={4}>
                <Heading size={{ base: '2xl', md: '3xl' }}>
                  Ready to Transform Your Glass Waste?
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="3xl">
                  Join leading UAE businesses in implementing our advanced glass recycling process.
                  Reduce your environmental impact while contributing to the circular economy.
                </Text>
              </VStack>

              <VStack gap={4} align="start" maxW="2xl" textAlign="start">
                <Text fontWeight="semibold" color="teal.400">
                  What happens next:
                </Text>
                <List.Root gap={2}>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400" fontSize="lg">1.</Text>
                      <Text fontSize="sm">Free consultation to assess your glass waste volume and type</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400" fontSize="lg">2.</Text>
                      <Text fontSize="sm">Customized recycling solution design based on your needs</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400" fontSize="lg">3.</Text>
                      <Text fontSize="sm">Implementation of collection systems and process integration</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400" fontSize="lg">4.</Text>
                      <Text fontSize="sm">Real-time tracking and environmental impact reporting</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400" fontSize="lg">5.</Text>
                      <Text fontSize="sm">Ongoing optimization and sustainability support</Text>
                    </HStack>
                  </ListItem>
                </List.Root>
              </VStack>

              <HStack gap={4} wrap="wrap" justify="center">
                <ConsultationPopup
                  trigger={
                    <Button
                      size="lg"
                      colorPalette="teal"
                      bg="teal.500"
                      color="white"
                      _hover={{ bg: "teal.600" }}
                      px={8}
                    >
                      Get Free Consultation
                    </Button>
                  }
                />
                <Link href="tel:+971563331416" _hover={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    variant="outline"
                    colorPalette="teal"
                    px={8}
                  >
                    Call: +971 56 333 1416
                  </Button>
                </Link>
              </HStack>

              <VStack gap={2} textAlign="center">
                <Text fontSize="sm" color="gray.600">
                  <strong>Free consultation</strong> • <strong>No commitment required</strong> • <strong>Available across UAE</strong>
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}
