'use client'

import { Box, Container, VStack, Text, Grid, GridItem, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// Counter animation hook
function useCounterAnimation(targetValue: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * targetValue))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(targetValue)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, targetValue, duration])

  return { count, ref }
}

// Statistics data
const projectStats = [
  {
    number: 150,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successful glass recycling implementations'
  },
  {
    number: 2500,
    suffix: '+',
    label: 'Tons Recycled',
    description: 'Glass diverted from landfills'
  },
  {
    number: 85,
    suffix: '%',
    label: 'CO₂ Reduction',
    description: 'Carbon emissions saved annually'
  },
  {
    number: 50,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Businesses achieving sustainability goals'
  }
]

const projects = [
  {
    image: '/lacey-williams-Jwh_k0K_QOM-unsplash.jpg',
    title: 'Downtown Dubai Office Complex',
    category: 'Commercial Collection'
  },
  {
    image: '/noah-buscher-x8ZStukS2PM-unsplash.jpg',
    title: 'Abu Dhabi Hotel Chain',
    category: 'Hospitality Solutions'
  },
  {
    image: '/artem-beliaikin-BpQ-ClsKeXg-unsplash.jpg',
    title: 'Sharjah Shopping Mall',
    category: 'Retail Partnership'
  },
  {
    image: '/window.svg',
    title: 'Dubai Marina Restaurants',
    category: 'Food & Beverage'
  }
]

// Animated Counter Component
function AnimatedCounter({ target, suffix, label, description }: {
  target: number
  suffix: string
  label: string
  description: string
}) {
  const { count, ref } = useCounterAnimation(target)

  return (
    <VStack gap={2} textAlign="center" ref={ref}>
      <Text
        fontSize={{ base: '3xl', md: '4xl' }}
        fontWeight="bold"
        color="teal.500"
        lineHeight="1"
      >
        {count.toLocaleString()}
        {suffix}
      </Text>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontWeight="semibold"
        color="gray.800"
      >
        {label}
      </Text>
      <Text
        fontSize="sm"
        color="gray.600"
        maxW="xs"
      >
        {description}
      </Text>
    </VStack>
  )
}

export default function LatestProjects() {
  return (
    <Box py={{ base: 16, md: 20 }}>
      <Container maxW="7xl">
        <VStack gap={16}>
          {/* Section Header */}
          <VStack gap={4} textAlign="center">
            <Text
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="bold"
              color="gray.800"
            >
              Our Latest Projects
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
            >
              Discover how Cirqura is helping businesses across UAE achieve their sustainability goals through innovative glass recycling solutions.
            </Text>
          </VStack>

          {/* Project Statistics */}
          <Box w="full">
            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
              gap={{ base: 8, md: 12 }}
              w="full"
            >
              {projectStats.map((stat, index) => (
                <GridItem key={index}>
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    label={stat.label}
                    description={stat.description}
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>

          {/* Projects Grid */}
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={6}
            w="full"
          >
            {projects.map((project, index) => (
              <GridItem key={index}>
                <VStack
                  gap={4}
                  _hover={{ transform: 'translateY(-4px)' }}
                  transition="all 0.3s ease"
                >
                  <Box
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="lg"
                    w="full"
                    aspectRatio="4/3"
                    position="relative"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <VStack gap={2}>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="teal.500"
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      {project.category}
                    </Text>
                    <Text
                      fontSize={{ base: 'sm', md: 'md' }}
                      fontWeight="semibold"
                      color="gray.800"
                      textAlign="center"
                    >
                      {project.title}
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