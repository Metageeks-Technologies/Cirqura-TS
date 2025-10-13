import { Box, Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'

interface StatisticItem {
  value: string
  label: string
  description: string
}

const statisticsData: StatisticItem[] = [
  {
    value: '100%',
    label: 'Recyclable',
    description: 'Glass is 100% recyclable with no quality loss'
  },
  {
    value: '40%',
    label: 'Energy Savings',
    description: '40% energy savings vs new glass production'
  },
  {
    value: '90%',
    label: 'Less Landfill',
    description: '90% less landfill waste through recycling'
  },
  {
    value: '70%',
    label: 'CO2 Reduction',
    description: '70% CO2 emissions reduction per bottle'
  }
]

export default function Statistics() {
  return (
    <Box py={16} bg="white">
      <Container maxW="7xl">
        <VStack gap={12}>
          <VStack gap={4} textAlign="center">
            <Text
              fontSize={{ base: '3xl', md: '4xl' }}
              fontWeight="bold"
              color="teal.400"
            >
              The Impact of Glass Recycling
            </Text>
            <Text
              fontSize="lg"
              color="gray.600"
              maxW="2xl"
              mx="auto"
            >
              Discover the environmental and economic benefits of choosing sustainable glass recycling solutions
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            gap={8}
            w="full"
          >
            {statisticsData.map((stat, index) => (
              <Box
                key={index}
                p={6}
                bg="teal.50"
                borderRadius="lg"
                border="1px solid"
                borderColor="teal.200"
                _hover={{
                  bg: 'teal.100',
                  transform: 'translateY(-2px)',
                  shadow: 'lg'
                }}
                transition="all 0.3s ease"
              >
                <VStack gap={3} textAlign="center">
                  <Text
                    fontSize="4xl"
                    fontWeight="bold"
                    color="teal.400"
                  >
                    {stat.value}
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight="semibold"
                    color="teal.400"
                  >
                    {stat.label}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    lineHeight="1.4"
                  >
                    {stat.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}