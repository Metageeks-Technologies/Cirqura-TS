"use client"

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
  Icon,
  Badge,
  List,
  ListItem,
  Separator,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { Field } from '@/components/ui/field'
import { Input, Textarea } from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'

interface ContactInfo {
  type: string
  value: string
  label: string
  icon: string
}

interface ServiceInterest {
  value: string
  label: string
}

const contactInfo: ContactInfo[] = [
  {
    type: 'phone',
    value: '+971563331416',
    label: 'Primary Contact',
    icon: '📞'
  },
  {
    type: 'email',
    value: 'operations@Cirqura.ae',
    label: 'Operations Email',
    icon: '✉️'
  },
  {
    type: 'location',
    value: 'Dubai, United Arab Emirates',
    label: 'Headquarters',
    icon: '📍'
  },
  {
    type: 'hours',
    value: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    label: 'Business Hours',
    icon: '🕒'
  }
]

const serviceInterests: ServiceInterest[] = [
  { value: 'collection', label: 'Glass Collection Services' },
  { value: 'training', label: 'Sustainability Training' },
  { value: 'analytics', label: 'Carbon Tracking & Analytics' },
  { value: 'consulting', label: 'Environmental Consulting' },
  { value: 'partnership', label: 'Government Partnership' },
  { value: 'other', label: 'Other' }
]

export function ContactPageClient() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Show success toast
    toaster.create({
      title: 'Message Sent Successfully!',
      description: 'Thank you for contacting Cirqura. We\'ll get back to you within 24 hours.',
      type: 'success',
      duration: 5000,
    })
  }

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
                Contact Us
              </Badge>
              <Heading
                size={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                lineHeight="1.2"
              >
                Let&apos;s Build a Sustainable Future Together
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                maxW="3xl"
                opacity={0.9}
                lineHeight="1.6"
              >
                Ready to transform your glass waste management? Get in touch with our team to discuss collection services,
                sustainability training, or partnership opportunities across UAE.
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Contact Form & Info */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12}>
              {/* Contact Form */}
              <Card.Root variant="elevated" bg="white">
                <Card.Body>
                  <VStack gap={6}>
                    <VStack gap={2} textAlign="center">
                      <Heading size="lg" color="teal.400">
                        Send Us a Message
                      </Heading>
                      <Text color="gray.600">
                        Fill out the form below and we&apos;ll get back to you within 24 hours.
                      </Text>
                    </VStack>

                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                      <VStack gap={4}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                           <Field.Root required>
                             <Field.Label color="teal.400">First Name</Field.Label>
                             <Input
                               placeholder="Enter your first name"
                               bg="white"
                               borderColor="gray.300"
                               _hover={{ borderColor: 'teal.400' }}
                               _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px var(--chakra-colors-teal-400)' }}
                             />
                           </Field.Root>
                           <Field.Root required>
                             <Field.Label color="teal.400">Last Name</Field.Label>
                             <Input
                               placeholder="Enter your last name"
                               bg="white"
                               borderColor="gray.300"
                               _hover={{ borderColor: 'teal.400' }}
                               _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px var(--chakra-colors-teal-400)' }}
                             />
                           </Field.Root>
                         </SimpleGrid>

                        <Field.Root required>
                          <Field.Label color="teal.400">Email Address</Field.Label>
                          <Input
                            type="email"
                            placeholder="your.email@company.com"
                            bg="white"
                            borderColor="gray.300"
                            _hover={{ borderColor: 'teal.400' }}
                            _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px var(--chakra-colors-teal-400)' }}
                          />
                        </Field.Root>

                        <Field.Root required>
                          <Field.Label color="teal.400">Phone Number</Field.Label>
                          <Input
                            placeholder="+971 XX XXX XXXX"
                            bg="white"
                            borderColor="gray.300"
                            _hover={{ borderColor: 'teal.400' }}
                            _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px var(--chakra-colors-teal-400)' }}
                          />
                        </Field.Root>

                        <Field.Root required>
                          <Field.Label color="teal.400">Company/Organization</Field.Label>
                          <Input
                            placeholder="Enter your company name"
                            bg="white"
                            borderColor="gray.300"
                            _hover={{ borderColor: 'teal.400' }}
                            _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px var(--chakra-colors-teal-400)' }}
                          />
                        </Field.Root>

                        <Field.Root required>
                          <Field.Label color="teal.400">Service Interest</Field.Label>
                          <select
                            className="w-full p-2 border border-gray-300 rounded-md bg-white hover:border-teal-400 focus:border-teal-400 focus:outline-none focus:ring-1 focus:ring-teal-400"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            {serviceInterests.map((service) => (
                              <option key={service.value} value={service.value}>
                                {service.label}
                              </option>
                            ))}
                          </select>
                        </Field.Root>

                        <Field.Root required>
                          <Field.Label color="teal.400">Message</Field.Label>
                          <Textarea
                            placeholder="Tell us about your glass recycling needs, partnership opportunities, or any questions you have..."
                            rows={5}
                            bg="white"
                            borderColor="gray.300"
                            _hover={{ borderColor: 'teal.400' }}
                            _focus={{ borderColor: 'teal.400', boxShadow: '0 0 0 1px var(--chakra-colors-teal-400)' }}
                          />
                        </Field.Root>

                        <Button
                          type="submit"
                          colorPalette="teal"
                          size="lg"
                          w="full"
                          mt={4}
                        >
                          Send Message
                        </Button>
                      </VStack>
                    </form>
                  </VStack>
                </Card.Body>
              </Card.Root>

              {/* Contact Information */}
              <VStack gap={8} align="start">
                <VStack gap={4} align="start">
                  <Heading size="lg" color="teal.400">
                    Get in Touch
                  </Heading>
                  <Text color="gray.600" lineHeight="1.7">
                    Ready to start your sustainability journey with Cirqura? We&apos;re here to help you implement
                    effective glass recycling solutions for your business or organization.
                  </Text>
                </VStack>

                <SimpleGrid columns={1} gap={4} w="full">
                  {contactInfo.map((info, index) => (
                    <Card.Root key={index} variant="outline">
                      <Card.Body>
                        <HStack gap={4} align="start">
                          <Text fontSize="2xl">{info.icon}</Text>
                          <VStack gap={1} align="start" flex={1}>
                            <Text fontWeight="semibold" color="teal.400">
                              {info.label}
                            </Text>
                            {info.type === 'phone' ? (
                              <Link
                                href={`tel:${info.value}`}
                                color="gray.700"
                                fontSize="md"
                                _hover={{ color: 'teal.400', textDecoration: 'none' }}
                              >
                                {info.value}
                              </Link>
                            ) : info.type === 'email' ? (
                              <Link
                                href={`mailto:${info.value}`}
                                color="gray.700"
                                fontSize="md"
                                _hover={{ color: 'teal.400', textDecoration: 'none' }}
                              >
                                {info.value}
                              </Link>
                            ) : (
                              <Text color="gray.700" fontSize="md">
                                {info.value}
                              </Text>
                            )}
                          </VStack>
                        </HStack>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </SimpleGrid>

                {/* Quick Contact Options */}
                <Card.Root variant="elevated" bg="teal.50">
                  <Card.Body>
                    <VStack gap={4}>
                      <Heading size="md" color="teal.400" textAlign="center">
                        Need Immediate Assistance?
                      </Heading>
                      <HStack gap={4} wrap="wrap" justify="center">
                        <Link href="tel:+971563331416" _hover={{ textDecoration: 'none' }}>
                          <Button
                            colorPalette="teal"
                            variant="solid"
                          >
                            <Text fontSize="lg" mr={2}>📞</Text>
                            Call Now
                          </Button>
                        </Link>
                        <Link href="mailto:operations@Cirqura.ae" _hover={{ textDecoration: 'none' }}>
                          <Button
                            colorPalette="teal"
                            variant="outline"
                          >
                            <Text fontSize="lg" mr={2}>✉️</Text>
                            Email Us
                          </Button>
                        </Link>
                      </HStack>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </VStack>
            </SimpleGrid>
          </Container>
        </Box>

        {/* Partnership Opportunities */}
        <Box py={{ base: 16, lg: 24 }}>
          <Container maxW="7xl">
            <VStack gap={16}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Partnership Opportunities
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  We&apos;re actively seeking partnerships with government entities, businesses, and organizations
                  across UAE to expand sustainable glass recycling initiatives.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                <Card.Root variant="elevated">
                  <Card.Body textAlign="center">
                    <VStack gap={4}>
                      <Text fontSize="4xl">🏛️</Text>
                      <Heading size="md" color="teal.400">
                        Government Partnerships
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        Collaborate with municipalities and government agencies to implement
                        large-scale glass recycling programs across emirates.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root variant="elevated">
                  <Card.Body textAlign="center">
                    <VStack gap={4}>
                      <Text fontSize="4xl">🏢</Text>
                      <Heading size="md" color="teal.400">
                        Corporate Partnerships
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        Join forces with businesses to create customized glass recycling solutions
                        that support corporate sustainability goals.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root variant="elevated">
                  <Card.Body textAlign="center">
                    <VStack gap={4}>
                      <Text fontSize="4xl">🌐</Text>
                      <Heading size="md" color="teal.400">
                        Community Initiatives
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        Partner with community organizations and NGOs to promote glass recycling
                        awareness and education across UAE.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </SimpleGrid>

              <Card.Root variant="elevated" bg="teal.500" color="white">
                <Card.Body textAlign="center">
                  <VStack gap={4}>
                    <Heading size="lg">
                      Ready to Partner With Us?
                    </Heading>
                    <Text opacity={0.9} maxW="2xl">
                      Contact Zuheb Hasan directly to discuss partnership opportunities and how we can work together
                      to advance glass recycling initiatives across UAE.
                    </Text>
                    <HStack gap={4} wrap="wrap" justify="center">
                      <Link href="tel:+971563331416" _hover={{ textDecoration: 'none' }}>
                        <Button
                          colorPalette="white"
                          variant="solid"
                          size="lg"
                        >
                          Call Zuheb: +971 56 333 1416
                        </Button>
                      </Link>
                      <Link href="mailto:operations@Cirqura.ae" _hover={{ textDecoration: 'none' }}>
                        <Button
                          colorPalette="white"
                          variant="outline"
                          size="lg"
                        >
                          Email: operations@Cirqura.ae
                        </Button>
                      </Link>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            </VStack>
          </Container>
        </Box>

        {/* Service Areas */}
        <Box py={{ base: 16, lg: 24 }} bg="gray.50">
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Service Areas Across UAE
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  We provide glass recycling services across all seven Emirates, with special focus on major cities and business districts.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={6}>
                {[
                  'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman',
                  'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'
                ].map((emirate, index) => (
                  <Card.Root key={index} variant="outline" textAlign="center">
                    <Card.Body>
                      <VStack gap={2}>
                        <Text fontSize="2xl">🏙️</Text>
                        <Heading size="md" color="teal.400">
                          {emirate}
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          Full service coverage
                        </Text>
                      </VStack>
                    </Card.Body>
                  </Card.Root>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box py={{ base: 16, lg: 24 }}>
          <Container maxW="7xl">
            <VStack gap={12}>
              <VStack gap={4} textAlign="center">
                <Heading size="xl" color="teal.400">
                  Frequently Asked Questions
                </Heading>
                <Text fontSize="lg" color="gray.600" maxW="3xl">
                  Quick answers to common questions about our glass recycling services and partnership opportunities.
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                <Card.Root variant="elevated">
                  <Card.Body>
                    <VStack gap={3} align="start">
                      <Heading size="md" color="teal.400">
                        How do you collect glass?
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        We provide scheduled collection services using specialized vehicles designed for safe glass transport.
                        Collections can be arranged daily, weekly, or monthly based on your volume requirements.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root variant="elevated">
                  <Card.Body>
                    <VStack gap={3} align="start">
                      <Heading size="md" color="teal.400">
                        What are your service areas?
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        We operate across all seven Emirates of UAE, with particular focus on Dubai, Abu Dhabi, and Sharjah business districts.
                        Contact us to discuss service availability in your specific area.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root variant="elevated">
                  <Card.Body>
                    <VStack gap={3} align="start">
                      <Heading size="md" color="teal.400">
                        Do you provide training?
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        Yes! We offer comprehensive sustainability training programs for businesses and organizations,
                        covering glass recycling best practices, waste reduction strategies, and environmental compliance.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>

                <Card.Root variant="elevated">
                  <Card.Body>
                    <VStack gap={3} align="start">
                      <Heading size="md" color="teal.400">
                        How do I get started?
                      </Heading>
                      <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                        Simply contact us through this form, call us directly, or email our operations team.
                        We&apos;ll arrange a consultation to assess your needs and create a customized recycling solution.
                      </Text>
                    </VStack>
                  </Card.Body>
                </Card.Root>
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>
      </Box>
    </Layout>
  )
}