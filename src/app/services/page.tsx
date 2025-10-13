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
  Grid,
  GridItem,
  Separator
} from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Services - Cirqura | Glass Recycling Services UAE',
  description: 'Comprehensive glass recycling services in UAE. Collection services, sustainability training, and carbon footprint tracking for Dubai businesses. Professional glass waste management solutions.',
  keywords: [
    'glass collection services UAE',
    'sustainability training Dubai',
    'carbon footprint tracking',
    'glass recycling services',
    'waste management UAE',
    'business recycling Dubai',
    'glass bottle collection',
    'environmental consulting UAE'
  ],
  openGraph: {
    title: 'Services - Cirqura | Glass Recycling Services UAE',
    description: 'Comprehensive glass recycling services in UAE. Collection services, sustainability training, and carbon footprint tracking for Dubai businesses.',
    url: 'https://cirqura.ae/services',
    siteName: 'Cirqura',
    locale: 'en_UAE',
    type: 'website',
  },
}

interface ServiceDetail {
  title: string
  subtitle: string
  description: string
  features: {
    title: string
    description: string
  }[]
  benefits: string[]
  process: string[]
  pricing: {
    basic: string
    premium: string
    enterprise: string
  }
  turnaround: string
  coverage: string
  color: string
}

const servicesData: ServiceDetail[] = [
  {
    title: 'Collection Services',
    subtitle: 'Professional Glass Waste Collection',
    description: 'Comprehensive glass waste collection service designed for UAE businesses. Our specialized fleet and trained professionals ensure efficient, eco-friendly collection with minimal disruption to your operations.',
    color: 'teal',
    features: [
      {
        title: 'Scheduled Collections',
        description: 'Flexible pickup schedules tailored to your business needs, from daily to monthly collections.'
      },
      {
        title: 'GPS Tracking',
        description: 'Real-time tracking of collection vehicles and waste quantities for complete transparency.'
      },
      {
        title: 'Eco-Friendly Equipment',
        description: 'Specialized vehicles and collection bags designed to minimize environmental impact.'
      }
    ],
    benefits: [
      'Reduce waste management costs by up to 40%',
      'Improve workplace safety and cleanliness',
      'Meet UAE environmental compliance requirements',
      'Generate detailed waste management reports',
      'Contribute to UAE\'s sustainability goals'
    ],
    process: [
      'Initial site assessment and waste audit',
      'Customized collection schedule planning',
      'Dedicated collection team assignment',
      'Regular collection and transportation',
      'Quality control and reporting',
      'Continuous optimization and support'
    ],
    pricing: {
      basic: 'AED 500/month',
      premium: 'AED 1,200/month',
      enterprise: 'Custom Pricing'
    },
    turnaround: '2-3 business days setup',
    coverage: 'All Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain)'
  },
  {
    title: 'Sustainability Training',
    subtitle: 'Comprehensive Environmental Education',
    description: 'Expert-led training programs to transform your team into sustainability champions. Our certified trainers provide practical knowledge and tools to implement effective waste management practices across your organization.',
    color: 'green',
    features: [
      {
        title: 'Employee Workshops',
        description: 'Interactive training sessions for all staff levels on sustainable waste practices.'
      },
      {
        title: 'Management Training',
        description: 'Leadership-focused sessions on implementing sustainability strategies.'
      },
      {
        title: 'Certification Programs',
        description: 'Industry-recognized certifications in environmental management and sustainability.'
      }
    ],
    benefits: [
      'Certified sustainability professionals on your team',
      'Improved employee engagement in green initiatives',
      'Reduced waste generation through better practices',
      'Enhanced corporate social responsibility profile',
      'Cost savings through efficient resource management'
    ],
    process: [
      'Training needs assessment and gap analysis',
      'Customized curriculum development',
      'Interactive workshop delivery',
      'Practical implementation guidance',
      'Progress monitoring and evaluation',
      'Certification and continuous support'
    ],
    pricing: {
      basic: 'AED 2,000/session',
      premium: 'AED 5,000/month',
      enterprise: 'Custom Training Programs'
    },
    turnaround: '1 week for program customization',
    coverage: 'UAE-wide with both in-person and virtual options'
  },
  {
    title: 'Carbon Tracking & Analytics',
    subtitle: 'Advanced Environmental Impact Monitoring',
    description: 'State-of-the-art carbon footprint tracking and analytics platform providing real-time insights into your environmental impact. Make data-driven decisions to optimize your sustainability performance.',
    color: 'blue',
    features: [
      {
        title: 'Real-Time Dashboard',
        description: 'Live monitoring of carbon emissions, recycling metrics, and sustainability KPIs.'
      },
      {
        title: 'Custom Reports',
        description: 'Detailed environmental impact reports tailored to your business requirements.'
      },
      {
        title: 'Predictive Analytics',
        description: 'AI-powered insights to forecast and optimize your environmental performance.'
      }
    ],
    benefits: [
      'Quantified environmental impact measurement',
      'Data-driven sustainability goal setting',
      'Regulatory compliance reporting automation',
      'Stakeholder communication enhancement',
      'Continuous improvement through analytics'
    ],
    process: [
      'Platform setup and integration',
      'Baseline carbon footprint assessment',
      'Custom KPI definition and tracking',
      'Real-time monitoring implementation',
      'Monthly reporting and analysis',
      'Strategic planning and optimization'
    ],
    pricing: {
      basic: 'AED 800/month',
      premium: 'AED 2,500/month',
      enterprise: 'Custom Analytics Solutions'
    },
    turnaround: '5-7 business days for platform setup',
    coverage: 'Cloud-based platform accessible across all UAE locations'
  }
]

export default function ServicesPage() {
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
              Professional Services
            </Badge>
            <Heading
              size={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Comprehensive Glass Recycling Solutions
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              maxW="3xl"
              opacity={0.9}
              lineHeight="1.6"
            >
              From collection to carbon tracking, we provide end-to-end glass recycling services
              tailored for UAE businesses. Join the circular economy and make a lasting environmental impact.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={{ base: 16, lg: 24 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack gap={16}>
            {servicesData.map((service, index) => {
              return (
                <Card.Root
                  key={index}
                  variant="elevated"
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="lg"
                >
                  <Card.Body p={0}>
                    <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={0}>
                      {/* Content Section */}
                      <GridItem p={{ base: 6, lg: 8 }}>
                        <VStack gap={6} align="start">
                          <HStack gap={3}>
                            <Text fontSize="2xl">
                              {service.title === 'Collection Services' && '🚛'}
                              {service.title === 'Sustainability Training' && '👥'}
                              {service.title === 'Carbon Tracking & Analytics' && '📊'}
                            </Text>
                            <VStack gap={0} align="start">
                              <Heading size="lg" color={`${service.color}.400`}>
                                {service.title}
                              </Heading>
                              <Text color="gray.600" fontSize="sm">
                                {service.subtitle}
                              </Text>
                            </VStack>
                          </HStack>

                          <Text color="gray.700" lineHeight="1.7">
                            {service.description}
                          </Text>

                          {/* Features */}
                          <VStack gap={4} align="start" w="full">
                            <Text fontWeight="semibold" color={`${service.color}.400`}>
                              Key Features:
                            </Text>
                            <SimpleGrid columns={{ base: 1, md: 1 }} gap={4} w="full">
                              {service.features.map((feature, featureIndex) => (
                                <HStack key={featureIndex} gap={3} align="start">
                                  <Text color={`${service.color}.400`} mt={1}>
                                    {feature.title === 'Scheduled Collections' && '⏰'}
                                    {feature.title === 'GPS Tracking' && '📍'}
                                    {feature.title === 'Eco-Friendly Equipment' && '🌱'}
                                    {feature.title === 'Employee Workshops' && '👥'}
                                    {feature.title === 'Management Training' && '📈'}
                                    {feature.title === 'Certification Programs' && '🎓'}
                                    {feature.title === 'Real-Time Dashboard' && '📊'}
                                    {feature.title === 'Custom Reports' && '📋'}
                                    {feature.title === 'Predictive Analytics' && '🔮'}
                                  </Text>
                                  <VStack gap={1} align="start">
                                    <Text fontWeight="medium" color="gray.800">
                                      {feature.title}
                                    </Text>
                                    <Text fontSize="sm" color="gray.600">
                                      {feature.description}
                                    </Text>
                                  </VStack>
                                </HStack>
                              ))}
                            </SimpleGrid>
                          </VStack>

                          {/* Benefits */}
                          <VStack gap={3} align="start" w="full">
                            <Text fontWeight="semibold" color={`${service.color}.400`}>
                              Benefits:
                            </Text>
                            <List.Root gap={2}>
                              {service.benefits.map((benefit, benefitIndex) => (
                                <ListItem key={benefitIndex}>
                                  <HStack gap={2} align="start">
                                    <Text color={`${service.color}.400`}>✓</Text>
                                    <Text color="gray.700">{benefit}</Text>
                                  </HStack>
                                </ListItem>
                              ))}
                            </List.Root>
                          </VStack>
                        </VStack>
                      </GridItem>

                      {/* Sidebar */}
                      <GridItem bg={`${service.color}.50`} p={{ base: 6, lg: 8 }}>
                        <VStack gap={6} align="start">
                          <VStack gap={3} align="start">
                            <Text fontWeight="semibold" color={`${service.color}.400`}>
                              Service Coverage
                            </Text>
                            <Text fontSize="sm" color="gray.700">
                              {service.coverage}
                            </Text>
                          </VStack>

                          <Separator />

                          <VStack gap={3} align="start">
                            <Text fontWeight="semibold" color={`${service.color}.400`}>
                              Setup Time
                            </Text>
                            <Text fontSize="sm" color="gray.700">
                              {service.turnaround}
                            </Text>
                          </VStack>

                          <Separator />

                          <VStack gap={3} align="start" w="full">
                            <Text fontWeight="semibold" color={`${service.color}.400`}>
                              Pricing
                            </Text>
                            <VStack gap={2} align="start" w="full">
                              <HStack justify="space-between" w="full">
                                <Text fontSize="sm" color="gray.700">Basic Package</Text>
                                <Badge colorPalette={service.color} variant="subtle">
                                  {service.pricing.basic}
                                </Badge>
                              </HStack>
                              <HStack justify="space-between" w="full">
                                <Text fontSize="sm" color="gray.700">Premium Package</Text>
                                <Badge colorPalette={service.color} variant="subtle">
                                  {service.pricing.premium}
                                </Badge>
                              </HStack>
                              <HStack justify="space-between" w="full">
                                <Text fontSize="sm" color="gray.700">Enterprise</Text>
                                <Badge colorPalette={service.color} variant="subtle">
                                  {service.pricing.enterprise}
                                </Badge>
                              </HStack>
                            </VStack>
                          </VStack>

                          <Link href="#contact" _hover={{ textDecoration: 'none' }} w="full">
                            <Button
                              w="full"
                              colorPalette={service.color}
                              size="lg"
                              variant="solid"
                            >
                              Get Started
                            </Button>
                          </Link>
                        </VStack>
                      </GridItem>
                    </Grid>

                    {/* Process Section */}
                    <Box p={{ base: 6, lg: 8 }} bg="gray.50">
                      <VStack gap={4} align="start">
                        <Text fontWeight="semibold" color={`${service.color}.400`}>
                          Our Process:
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3} w="full">
                          {service.process.map((step, stepIndex) => (
                            <HStack key={stepIndex} gap={2} align="start">
                              <Badge colorPalette={service.color} size="sm" variant="solid">
                                {stepIndex + 1}
                              </Badge>
                              <Text fontSize="sm" color="gray.700">
                                {step}
                              </Text>
                            </HStack>
                          ))}
                        </SimpleGrid>
                      </VStack>
                    </Box>
                  </Card.Body>
                </Card.Root>
              )
            })}
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 16, lg: 24 }} bg="teal.500">
        <Container maxW="7xl">
          <VStack gap={8} textAlign="center" color="white">
            <VStack gap={4}>
              <Heading size={{ base: '2xl', md: '3xl' }}>
                Ready to Start Your Sustainability Journey?
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} opacity={0.9} maxW="2xl">
                Join hundreds of UAE businesses already making a positive environmental impact.
                Contact us today for a customized consultation and quote.
              </Text>
            </VStack>

            <HStack gap={4} wrap="wrap" justify="center">
              <ConsultationPopup
                trigger={
                  <Button
                    size="lg"
                    colorPalette="white"
                    variant="solid"
                    bg="white"
                    color="teal.500"
                    _hover={{ bg: 'gray.100' }}
                  >
                    Get Free Consultation
                  </Button>
                }
              />
              <Link href="tel:+971563331416" _hover={{ textDecoration: 'none' }}>
                <Button
                  size="lg"
                  variant="outline"
                  colorPalette="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Call +971 56 333 1416
                </Button>
              </Link>
            </HStack>

            <Text fontSize="sm" opacity={0.8}>
              Free consultation • No commitment • Same-day response
            </Text>
          </VStack>
        </Container>
      </Box>
      </Box>
    </Layout>
  )
}