"use client"

import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Card,
  Icon,
  Badge,
} from '@chakra-ui/react'
import { FaAndroid, FaApple, FaMobileAlt, FaRocket } from 'react-icons/fa'

export const MobileAppsComingSoon: React.FC = () => {

  return (
    <Box py={20} bg="linear(to-br, teal.50, blue.50)">
      <Container maxW="6xl">
        <VStack gap={12} align="center" textAlign="center">
          {/* Main Heading */}
          <VStack gap={4}>
            <Badge
              colorPalette="teal"
              variant="subtle"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
            >
              <Icon as={FaRocket} mr={2} />
              Coming Soon
            </Badge>

            <Heading
              size="2xl"
              color="gray.800"
              fontWeight="bold"
              lineHeight={1.2}
            >
              Mobile Apps
              <Text as="span" color="teal.400"> On The Go</Text>
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Access Cirqura&apos;s sustainable glass recycling solutions right from your smartphone.
              Track collections, schedule pickups, and monitor your environmental impact anywhere, anytime.
            </Text>
          </VStack>

          {/* Mobile App Cards */}
          <HStack
            gap={8}
            align="stretch"
            flexWrap={{ base: "wrap", md: "nowrap" }}
            justify="center"
          >
            {/* Android App Card */}
            <Card.Root
              bg="white"
              borderRadius="2xl"
              p={8}
              shadow="lg"
              border="1px solid"
              borderColor="teal.100"
              _hover={{
                shadow: "xl",
                transform: "translateY(-4px)",
                borderColor: "teal.200"
              }}
              transition="all 0.3s ease"
              minW={{ base: "full", md: "300px" }}
            >
              <Card.Body>
                <VStack gap={6}>
                  <VStack gap={4}>
                    <Box
                      p={4}
                      bg="linear-gradient(135deg, #3DDC84, #2E7D32)"
                      borderRadius="xl"
                      color="white"
                    >
                      <Icon as={FaAndroid} boxSize={12} />
                    </Box>

                    <VStack gap={2}>
                      <Heading size="lg" color="teal.400">
                        Android App
                      </Heading>
                      <Text fontSize="sm" color="gray.500" fontWeight="medium">
                        Google Play Store
                      </Text>
                    </VStack>
                  </VStack>

                  <VStack gap={3}>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Track your recycling impact, schedule collections, and get real-time updates on your sustainability journey.
                    </Text>

                    <Button
                      variant="outline"
                      colorScheme="teal"
                      size="lg"
                      w="full"
                      disabled
                      opacity={0.7}
                    >
                      <Icon as={FaAndroid} mr={2} />
                      Coming Soon
                    </Button>
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>

            {/* iOS App Card */}
            <Card.Root
              bg="white"
              borderRadius="2xl"
              p={8}
              shadow="lg"
              border="1px solid"
              borderColor="teal.100"
              _hover={{
                shadow: "xl",
                transform: "translateY(-4px)",
                borderColor: "teal.200"
              }}
              transition="all 0.3s ease"
              minW={{ base: "full", md: "300px" }}
            >
              <Card.Body>
                <VStack gap={6}>
                  <VStack gap={4}>
                    <Box
                      p={4}
                      bg="linear-gradient(135deg, #007AFF, #000000)"
                      borderRadius="xl"
                      color="white"
                    >
                      <Icon as={FaApple} boxSize={12} />
                    </Box>

                    <VStack gap={2}>
                      <Heading size="lg" color="teal.400">
                        iOS App
                      </Heading>
                      <Text fontSize="sm" color="gray.500" fontWeight="medium">
                        App Store
                      </Text>
                    </VStack>
                  </VStack>

                  <VStack gap={3}>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      Seamlessly manage your glass recycling program with intuitive iOS design and Apple ecosystem integration.
                    </Text>

                    <Button
                      variant="outline"
                      colorScheme="teal"
                      size="lg"
                      w="full"
                      disabled
                      opacity={0.7}
                    >
                      <Icon as={FaApple} mr={2} />
                      Coming Soon
                    </Button>
                  </VStack>
                </VStack>
              </Card.Body>
            </Card.Root>
          </HStack>

          {/* Features Preview */}
          <VStack gap={6} maxW="4xl">
            <Heading size="lg" color="gray.800">
              App Features Preview
            </Heading>

            <HStack
              gap={6}
              flexWrap="wrap"
              justify="center"
            >
              {[
                "Real-time Collection Tracking",
                "Instant Pickup Scheduling",
                "Carbon Footprint Analytics",
                "Sustainability Reports",
                "Push Notifications",
                "Offline Access"
              ].map((feature) => (
                <HStack key={feature} gap={2}>
                  <Icon as={FaMobileAlt} color="teal.400" />
                  <Text fontSize="sm" color="gray.600" fontWeight="medium">
                    {feature}
                  </Text>
                </HStack>
              ))}
            </HStack>
          </VStack>

          {/* CTA Section */}
          <VStack gap={4}>
            <Text fontSize="lg" color="gray.700" fontWeight="medium">
              Be the first to know when we launch!
            </Text>

            <HStack gap={4} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                colorPalette="teal"
                variant="solid"
              >
                <Icon as={FaRocket} mr={2} />
                Notify Me
              </Button>

              <Text fontSize="sm" color="gray.500">
                Join 500+ businesses already on the waitlist
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}