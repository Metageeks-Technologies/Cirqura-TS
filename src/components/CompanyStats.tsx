'use client'

import { Box, Container, VStack, Text, HStack, Grid, GridItem } from '@chakra-ui/react'

const stats = [
  {
    number: '131',
    label: 'Global Brands',
    suffix: '+'
  },
  {
    number: '89',
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    number: '145',
    label: 'Winning Award',
    suffix: '+'
  },
  {
    number: '58',
    label: 'Happy Clients',
    suffix: '+'
  }
]

export default function CompanyStats() {
  return (
    <Box py={{ base: 16, md: 20 }}>
      <Container maxW="7xl">
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={8}
          w="full"
        >
          {stats.map((stat, index) => (
            <GridItem key={index}>
              <VStack gap={2} textAlign="center">
                <Text
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="bold"
                  color="teal.500"
                  lineHeight="1"
                >
                  {stat.number}{stat.suffix}
                </Text>
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  color="gray.600"
                  fontWeight="medium"
                >
                  {stat.label}
                </Text>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}