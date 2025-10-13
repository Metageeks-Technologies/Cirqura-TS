import { Metadata } from 'next'
import { Layout } from '@/components/Layout'
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
  Separator,
  Icon,
  Timeline
} from '@chakra-ui/react'
import { Avatar } from '@/components/ui/Avatar'

export const metadata: Metadata = {
  title: 'About Us - Cirqura | Leading Glass Recycling Company UAE',
  description: 'Learn about Cirqura\'s mission to revolutionize glass recycling in UAE. Dubai-based company providing sustainable waste management, environmental training, and carbon tracking solutions for businesses.',
  keywords: [
    'glass recycling company UAE',
    'sustainable waste management Dubai',
    'environmental consulting UAE',
    'glass recycling experts',
    'circular economy UAE',
    'sustainability company Dubai',
    'waste management services',
    'environmental training UAE'
  ],
  openGraph: {
    title: 'About Us - Cirqura | Leading Glass Recycling Company UAE',
    description: 'Learn about Cirqura\'s mission to revolutionize glass recycling in UAE. Dubai-based company providing sustainable waste management solutions.',
    url: 'https://cirqura.ae/about',
    siteName: 'Cirqura',
    locale: 'en_UAE',
    type: 'website',
  },
}

interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
  expertise: string[]
}

interface Milestone {
  year: string
  title: string
  description: string
}

interface Value {
  title: string
  description: string
  icon: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Zuheb Hasan',
    role: 'Founder & CEO',
    bio: 'Visionary leader with over 8 years of experience in UAE\'s environmental sector. Passionate about creating sustainable solutions for the region\'s waste management challenges.',
    image: '/Zuheb.jpeg',
    expertise: ['Strategic Planning', 'Environmental Policy', 'Business Development', 'Sustainability Innovation']
  },
  {
    name: 'Sarah Al-Mansouri',
    role: 'Head of Operations',
    bio: 'Environmental engineer specializing in waste management systems. Led numerous sustainability initiatives across UAE government and private sectors.',
    expertise: ['Waste Management', 'Process Optimization', 'Environmental Compliance', 'Team Leadership']
  },
  {
    name: 'Dr. Ahmed Al-Rashid',
    role: 'Sustainability Director',
    bio: 'PhD in Environmental Science with expertise in circular economy and carbon footprint analysis. Former advisor to UAE Ministry of Environment.',
    expertise: ['Carbon Analytics', 'Circular Economy', 'Environmental Research', 'Policy Development']
  }
]

const milestones: Milestone[] = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'Cirqura established in Dubai with a vision to transform UAE\'s glass recycling landscape.'
  },
  {
    year: '2023',
    title: 'First Collection Route',
    description: 'Launched glass collection services in Dubai Marina, serving 50+ businesses in the first month.'
  },
  {
    year: '2024',
    title: 'Sustainability Training Program',
    description: 'Developed and launched comprehensive environmental training programs for corporate clients.'
  },
  {
    year: '2024',
    title: 'Carbon Tracking Platform',
    description: 'Introduced AI-powered carbon footprint tracking and analytics platform for businesses.'
  },
  {
    year: '2024',
    title: 'UAE-Wide Expansion',
    description: 'Expanded operations across all seven Emirates, establishing collection networks nationwide.'
  }
]

const companyValues: Value[] = [
  {
    title: 'Sustainability First',
    description: 'Every decision we make prioritizes environmental impact and long-term ecological balance.',
    icon: '🌱'
  },
  {
    title: 'Innovation Driven',
    description: 'We continuously develop cutting-edge solutions to make glass recycling more efficient and accessible.',
    icon: '💡'
  },
  {
    title: 'Community Focused',
    description: 'We believe in building strong partnerships with local communities and businesses across UAE.',
    icon: '🤝'
  },
  {
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in service delivery and environmental compliance.',
    icon: '⭐'
  }
]

export default function AboutPage() {
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
                About Cirqura
              </Badge>
              <Heading
                size={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Transforming Glass Recycling in UAE
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                maxW="3xl"
                opacity={0.9}
                lineHeight="1.6"
              >
                Founded in Dubai, Cirqura is pioneering sustainable glass recycling solutions for businesses across the UAE.
                We&#39;re committed to closing the loop on glass waste and creating a circular economy that benefits both business and environment.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Company Overview */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
              <VStack gap={6} align="start">
                <Heading size="xl" color="teal.400">
                  Our Story
                </Heading>
                <Text fontSize="lg" color="gray.700" lineHeight="1.8">
                  Cirqura was born from a simple observation: UAE generates 100 million glass bottles annually, yet only 10% are recycled.
                  While glass is 100% recyclable with no quality loss and offers 40% energy savings compared to new production,
                  the lack of proper collection and processing infrastructure was holding back progress.
                </Text>
                <Text fontSize="lg" color="gray.700" lineHeight="1.8">
                  Founded by environmental experts with deep roots in UAE&#39;s sustainability sector, Cirqura bridges this gap by providing
                  comprehensive glass recycling services, sustainability training, and carbon tracking solutions tailored for businesses.
                </Text>
                <HStack gap={6} wrap="wrap">
                  <VStack gap={1} textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="teal.400">100M+</Text>
                    <Text fontSize="sm" color="gray.600">Glass bottles generated annually in UAE</Text>
                  </VStack>
                  <VStack gap={1} textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="teal.400">10%</Text>
                    <Text fontSize="sm" color="gray.600">Current recycling rate</Text>
                  </VStack>
                  <VStack gap={1} textAlign="center">
                    <Text fontSize="3xl" fontWeight="bold" color="teal.400">40%</Text>
                    <Text fontSize="sm" color="gray.600">Energy savings from recycling</Text>
                  </VStack>
                </HStack>
              </VStack>

              <Box
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
              >
                <Box bg="teal.500" color="white" p={4}>
                  <Heading size="md" textAlign="center">UAE Glass Recycling Challenge</Heading>
                </Box>
                <VStack gap={4} p={6} align="start">
                  <HStack gap={3} align="start">
                    <Text color="teal.400" fontSize="xl">📊</Text>
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold">Current Situation</Text>
                      <Text fontSize="sm" color="gray.600">90% of glass waste ends up in landfills</Text>
                    </VStack>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Text color="teal.400" fontSize="xl">🌍</Text>
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold">Environmental Impact</Text>
                      <Text fontSize="sm" color="gray.600">Lost opportunity for resource conservation</Text>
                    </VStack>
                  </HStack>
                  <HStack gap={3} align="start">
                    <Text color="teal.400" fontSize="xl">💡</Text>
                    <VStack gap={1} align="start">
                      <Text fontWeight="semibold">Our Solution</Text>
                      <Text fontSize="sm" color="gray.600">Complete recycling ecosystem for businesses</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        {/* Mission & Values */}
        <Box py={{ base: 16, lg: 24 }}>
          <Container maxW="7xl">
            <VStack gap={16}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Our Mission & Values
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  We&#39;re driven by a commitment to environmental stewardship and sustainable business practices across the UAE.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
                {companyValues.map((value, index) => (
                  <Card.Root key={index} variant="elevated">
                    <Card.Body textAlign="center">
                      <Text fontSize="4xl" mb={4}>{value.icon}</Text>
                      <Heading size="md" color="teal.400" mb={3}>
                        {value.title}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        {value.description}
                      </Text>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Leadership Team */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Leadership Team
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Meet the experienced professionals leading Cirqura&#39;s mission to transform glass recycling in UAE.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                {teamMembers.map((member, index) => (
                  <Card.Root key={index} variant="elevated" h="full">
                    <Card.Body>
                      <VStack gap={4}>
                        <Avatar size="xl" name={member.name} src={member.image} />
                        <VStack gap={2} textAlign="center">
                          <Heading size="md" color="teal.400">
                            {member.name}
                          </Heading>
                          <Text fontWeight="semibold" color="gray.600">
                            {member.role}
                          </Text>
                          <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                            {member.bio}
                          </Text>
                        </VStack>

                        <VStack gap={2} align="start" w="full">
                          <Text fontWeight="semibold" color="teal.400" fontSize="sm">
                            Areas of Expertise:
                          </Text>
                          <SimpleGrid columns={2} gap={2} w="full">
                            {member.expertise.map((skill, skillIndex) => (
                              <Badge key={skillIndex} colorPalette="teal" variant="subtle" fontSize="xs">
                                {skill}
                              </Badge>
                            ))}
                          </SimpleGrid>
                        </VStack>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Company Timeline */}
        <Box py={{ base: 16, lg: 24 }}>
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Our Journey
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Key milestones in our mission to revolutionize glass recycling across UAE.
                </Text>
              </VStack>

              {/* Timeline using alternating content pattern */}
              <Timeline.Root size="lg" variant="subtle" maxW="6xl" mx="auto">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <Timeline.Item key={index}>
                      {/* Content on left for even items, right for odd items */}
                      {isEven ? (
                        <>
                          <Timeline.Content flex="1">
                            <Card.Root variant="elevated" bg="white" shadow="md">
                              <Card.Body>
                                <Badge
                                  colorPalette="teal"
                                  variant="solid"
                                  mb={3}
                                  fontSize="md"
                                  px={4}
                                  py={2}
                                  alignSelf="flex-start"
                                >
                                  {milestone.year}
                                </Badge>
                                <Timeline.Title color="teal.400" fontSize="xl" fontWeight="bold" mb={3}>
                                  {milestone.title}
                                </Timeline.Title>
                                <Text color="gray.600" lineHeight="1.7" fontSize="md">
                                  {milestone.description}
                                </Text>
                              </Card.Body>
                            </Card.Root>
                          </Timeline.Content>
                          <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                              <Box
                                w={4}
                                h={4}
                                borderRadius="full"
                                bg="teal.400"
                              />
                            </Timeline.Indicator>
                          </Timeline.Connector>
                          <Timeline.Content flex="1" />
                        </>
                      ) : (
                        <>
                          <Timeline.Content flex="1" />
                          <Timeline.Connector>
                            <Timeline.Separator />
                            <Timeline.Indicator>
                              <Box
                                w={4}
                                h={4}
                                borderRadius="full"
                                bg="teal.400"
                              />
                            </Timeline.Indicator>
                          </Timeline.Connector>
                          <Timeline.Content flex="1">
                            <Card.Root variant="elevated" bg="white" shadow="md">
                              <Card.Body>
                                <Badge
                                  colorPalette="teal"
                                  variant="solid"
                                  mb={3}
                                  fontSize="md"
                                  px={4}
                                  py={2}
                                  alignSelf="flex-start"
                                >
                                  {milestone.year}
                                </Badge>
                                <Timeline.Title color="teal.400" fontSize="xl" fontWeight="bold" mb={3}>
                                  {milestone.title}
                                </Timeline.Title>
                                <Text color="gray.600" lineHeight="1.7" fontSize="md">
                                  {milestone.description}
                                </Text>
                              </Card.Body>
                            </Card.Root>
                          </Timeline.Content>
                        </>
                      )}
                    </Timeline.Item>
                  );
                })}
              </Timeline.Root>
            </VStack>
          </Container>
        </Box>

        {/* Impact Section */}
        <Box py={{ base: 16, lg: 24 }} bg="teal.500">
          <Container maxW="7xl">
            <VStack gap={12} color="white">
              <VStack gap={4} textAlign="center">
                <Heading size="xl">
                  Our Environmental Impact
                </Heading>
                <Text fontSize="lg" opacity={0.9} maxW="3xl">
                  Together with our partners, we&#39;re making a measurable difference in UAE&#39;s sustainability landscape.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 2, md: 4 }} gap={8}>
                <VStack gap={2} textAlign="center">
                  <Text fontSize="4xl">🏢</Text>
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold">500+</Text>
                    <Text fontSize="sm" opacity={0.9}>Businesses Served</Text>
                  </VStack>
                </VStack>
                <VStack gap={2} textAlign="center">
                  <Text fontSize="4xl">♻️</Text>
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold">2M+</Text>
                    <Text fontSize="sm" opacity={0.9}>Glass Bottles Recycled</Text>
                  </VStack>
                </VStack>
                <VStack gap={2} textAlign="center">
                  <Text fontSize="4xl">🌍</Text>
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold">800+</Text>
                    <Text fontSize="sm" opacity={0.9}>Tons CO₂ Saved</Text>
                  </VStack>
                </VStack>
                <VStack gap={2} textAlign="center">
                  <Text fontSize="4xl">📚</Text>
                  <VStack gap={1}>
                    <Text fontSize="3xl" fontWeight="bold">1,000+</Text>
                    <Text fontSize="sm" opacity={0.9}>Employees Trained</Text>
                  </VStack>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* Partnership CTA */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <VStack gap={8} textAlign="center">
              <VStack gap={4}>
                <Heading size={{ base: '2xl', md: '3xl' }}>
                  Partner With Us
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="3xl">
                  Join us in creating a sustainable future for UAE. Whether you&#39;re a business looking to improve your environmental impact
                  or a government entity seeking recycling partnerships, we&#39;d love to work with you.
                </Text>
              </VStack>

              <VStack gap={4} align="start" maxW="2xl" textAlign="start">
                <Text fontWeight="semibold" color="teal.400">
                  Partnership Opportunities:
                </Text>
                <List.Root gap={2}>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400">✓</Text>
                      <Text color="gray.700">Corporate glass recycling programs</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400">✓</Text>
                      <Text color="gray.700">Government and municipality partnerships</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400">✓</Text>
                      <Text color="gray.700">Sustainability consulting and training</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400">✓</Text>
                      <Text color="gray.700">Environmental impact assessment</Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack gap={2} align="start">
                      <Text color="teal.400">✓</Text>
                      <Text color="gray.700">Custom recycling solutions</Text>
                    </HStack>
                  </ListItem>
                </List.Root>
              </VStack>

              <HStack gap={4} wrap="wrap" justify="center">
                <Link href="/contact" _hover={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    colorPalette="teal"
                    variant="solid"
                  >
                    Start Partnership Discussion
                  </Button>
                </Link>
                <Link href="tel:+971563331416" _hover={{ textDecoration: 'none' }}>
                  <Button
                    size="lg"
                    variant="outline"
                    colorPalette="teal"
                    _hover={{ bg: 'teal.50' }}
                  >
                    Call +971 56 333 1416
                  </Button>
                </Link>
              </HStack>

              <VStack gap={2} textAlign="center">
                <Text fontSize="sm" color="gray.600">
                  Contact: Zuheb Hasan • operations@cirqura.ae
                </Text>
                <Text fontSize="sm" opacity={0.8}>
                  Dubai-based operations • Serving all Emirates
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}