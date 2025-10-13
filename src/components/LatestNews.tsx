'use client'

import { Box, Container, VStack, Text, Grid, GridItem, Badge } from '@chakra-ui/react'
import Image from 'next/image'

const newsItems = [
  {
    image: '/lacey-williams-Jwh_k0K_QOM-unsplash.jpg',
    title: 'UAE Glass Recycling Initiative Launches',
    date: 'Jan 15, 2025',
    category: 'Sustainability'
  },
  {
    image: '/noah-buscher-x8ZStukS2PM-unsplash.jpg',
    title: 'New Collection Centers Open in Dubai',
    date: 'Jan 10, 2025',
    category: 'Expansion'
  },
  {
    image: '/artem-beliaikin-BpQ-ClsKeXg-unsplash.jpg',
    title: 'Corporate Training Program Success',
    date: 'Jan 05, 2025',
    category: 'Education'
  }
]

export default function LatestNews() {
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
              Latest Blogs & News
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
            >
              Stay updated with the latest developments in sustainable glass recycling, industry insights, and company announcements.
            </Text>
          </VStack>

          {/* News Grid */}
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="full"
          >
            {newsItems.map((item, index) => (
              <GridItem key={index}>
                <VStack
                  gap={4}
                  align="start"
                  bg="white"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="sm"
                  _hover={{ boxShadow: 'md', transform: 'translateY(-4px)' }}
                  transition="all 0.3s ease"
                >
                  <Box
                    w="full"
                    h="200px"
                    position="relative"
                    overflow="hidden"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                  <VStack gap={3} p={6} align="start" flex={1}>
                    <Badge
                      colorPalette="teal"
                      variant="subtle"
                      px={3}
                      py={1}
                      alignSelf="flex-start"
                    >
                      {item.category}
                    </Badge>
                    <Text
                      fontSize={{ base: 'md', lg: 'lg' }}
                      fontWeight="semibold"
                      color="gray.800"
                      lineHeight="1.4"
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontSize="sm"
                      color="gray.500"
                    >
                      {item.date}
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