'use client'

import { Box, Container, VStack, Text, Grid, GridItem, Badge } from '@chakra-ui/react'
import { Avatar } from '@/components/ui/Avatar'

const teamMembers = [
  {
    name: 'Zuheb Hasan',
    role: 'Founder & CEO',
    image: '/Zuheb.jpeg',
    bio: 'Leading sustainable glass recycling initiatives across UAE with 10+ years of experience in environmental management.'
  },
  {
    name: 'Sarah Al-Mansouri',
    role: 'Operations Director',
    image: '/lacey-williams-Jwh_k0K_QOM-unsplash.jpg',
    bio: 'Expert in logistics and supply chain optimization for recycling operations.'
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'Sustainability Manager',
    image: '/window.svg',
    bio: 'Specialist in environmental compliance and carbon footprint tracking systems.'
  }
]

export default function Team() {
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
              Meet With Our Creative Dedicated Team
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
            >
              Our passionate team of sustainability experts, operations specialists, and recycling professionals working together to create a greener UAE.
            </Text>
          </VStack>

          {/* Team Members */}
          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="full"
          >
            {teamMembers.map((member, index) => (
              <GridItem key={index}>
                <VStack
                  gap={4}
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="sm"
                  _hover={{ boxShadow: 'md', transform: 'translateY(-4px)' }}
                  transition="all 0.3s ease"
                >
                  <Avatar
                    size="xl"
                    src={member.image}
                    name={member.name}
                    border="4px solid"
                    borderColor="teal.100"
                  />
                  <VStack gap={2} textAlign="center">
                    <Text
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight="semibold"
                      color="gray.800"
                    >
                      {member.name}
                    </Text>
                    <Badge
                      colorPalette="teal"
                      variant="subtle"
                      px={3}
                      py={1}
                    >
                      {member.role}
                    </Badge>
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