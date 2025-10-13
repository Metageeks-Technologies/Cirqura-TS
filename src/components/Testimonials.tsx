'use client'

import { Box, Container, VStack, Text, HStack, Card } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Cirqura's recycling solutions helped us reduce our carbon footprint by 40% while significantly cutting operational costs. Their expertise in UAE glass recycling is unmatched.",
    name: "Ahmed Al-Rashid",
    role: "Operations Director",
    company: "Dubai Beverage Co.",
  },
  {
    quote: "The sustainability training provided by Cirqura transformed our waste management approach. We've achieved 95% recycling rates across all our facilities.",
    name: "Fatima Al-Zahra",
    role: "Sustainability Manager",
    company: "Food & Beverage Corp",
  },
  {
    quote: "Partnering with Cirqura gave us access to cutting-edge recycling technology and real-time carbon tracking. Our environmental goals are now measurable and achievable.",
    name: "Omar Hassan",
    role: "CEO",
    company: "Green Packaging Solutions",
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const currentTestimonial = testimonials[currentSlide]

  return (
    <Box py={{ base: 12, md: 20 }} bg="gray.50">
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="teal.600"
            >
              What Our Clients Say
            </Text>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="3xl"
            >
              Discover how we&apos;re helping businesses across the UAE achieve their sustainability goals through innovative glass recycling solutions.
            </Text>
          </VStack>

          {/* Slider Container */}
          <Box
            w="full"
            maxW="4xl"
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            minH="300px"
          >
            {testimonials.map((testimonial, index) => (
              <Card.Root
                key={index}
                variant="elevated"
                borderRadius="xl"
                boxShadow="lg"
                maxW="4xl"
                w="full"
                position="absolute"
                top="0"
                left="0"
                opacity={index === currentSlide ? 1 : 0}
                transform={`translateX(${(index - currentSlide) * 100}%)`}
                transition="all 0.5s ease-in-out"
                pointerEvents={index === currentSlide ? "auto" : "none"}
              >
                <Card.Body>
                  <VStack gap={6} align="start">
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color="gray.700"
                      fontStyle="italic"
                      lineHeight="tall"
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </Text>
                    <HStack gap={4}>
                      <Box
                        w={{ base: '12', md: '16' }}
                        h={{ base: '12', md: '16' }}
                        borderRadius="full"
                        bg="teal.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        fontSize={{ base: 'lg', md: 'xl' }}
                        fontWeight="bold"
                      >
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </Box>
                      <VStack gap={0} align="start">
                        <Text fontWeight="semibold" color="gray.900">
                          {testimonial.name}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                          {testimonial.role}
                        </Text>
                        <Text fontSize="sm" color="teal.600">
                          {testimonial.company}
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Card.Body>
              </Card.Root>
            ))}
          </Box>

          {/* Slide Indicators */}
          <HStack gap={2}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                w="3"
                h="3"
                borderRadius="full"
                bg={index === currentSlide ? "teal.500" : "gray.300"}
                cursor="pointer"
                transition="all 0.3s ease"
                onClick={() => setCurrentSlide(index)}
                _hover={{ bg: index === currentSlide ? "teal.600" : "gray.400" }}
              />
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}