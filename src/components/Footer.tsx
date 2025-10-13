"use client"

import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Link,
  Button,
  Input,
  Grid,
  Separator,
  Icon,
} from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'
import { FaAndroid, FaApple } from 'react-icons/fa'

const serviceLinks = [
  { label: 'Collection Services', href: '/services/collection' },
  { label: 'Sustainability Training', href: '/services/training' },
  { label: 'Carbon Analytics', href: '/services/analytics' },
  { label: 'Impact Calculator', href: '/impact-calculator' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

export const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toaster.create({
      title: "Subscribed successfully!",
      description: "Thank you for subscribing to our newsletter.",
      type: "success",
    })
  }

  return (
    <Box as="footer" bg="gray.50" borderTopWidth={1} borderColor="gray.200">
      <Container maxW="7xl" py={12}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={8}>
          {/* Company Info */}
          <VStack align="start" gap={4}>
            <VStack align="start" gap={1}>
              <Text fontSize="2xl" fontWeight="bold" color="teal.400">
                Cirqura
              </Text>
              <Text fontSize="sm" color="gray.600">
                Sustainable Glass Recycling Solutions
              </Text>
            </VStack>

            <VStack align="start" gap={2}>
              <Text fontSize="sm" fontWeight="medium" color="gray.700">
                Contact Information
              </Text>
              <VStack align="start" gap={1}>
                <Text fontSize="sm" color="gray.600">
                  Zuheb Hasan
                </Text>
                <Text fontSize="sm" color="gray.600">
                  +971 56 333 1416
                </Text>
                <Text fontSize="sm" color="gray.600">
                  operations@Cirqura.ae
                </Text>
              </VStack>
            </VStack>
          </VStack>

          {/* Services */}
          <VStack align="start" gap={4}>
            <Text fontSize="lg" fontWeight="semibold" color="gray.800">
              Services
            </Text>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'teal.400' }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Company */}
          <VStack align="start" gap={4}>
            <Text fontSize="lg" fontWeight="semibold" color="gray.800">
              Company
            </Text>
            {companyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                fontSize="sm"
                color="gray.600"
                _hover={{ color: 'teal.400' }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Newsletter */}
          <VStack align="start" gap={4}>
            <Text fontSize="lg" fontWeight="semibold" color="gray.800">
              Stay Updated
            </Text>
            <Text fontSize="sm" color="gray.600">
              Subscribe to our newsletter for the latest updates on sustainable recycling solutions.
            </Text>
            <Box as="form" w="full" onSubmit={handleNewsletterSubmit}>
              <VStack gap={3}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  size="sm"
                  bg="white"
                  borderColor="gray.300"
                  _focus={{ borderColor: 'teal.400' }}
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  w="full"
                  bg="teal.400"
                  color="white"
                  _hover={{ bg: 'teal.400' }}
                >
                  Subscribe
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Grid>

        <Separator my={8} />

        {/* Mobile Apps Announcement */}
        <Box py={4} textAlign="center">
          <HStack gap={4} justify="center" align="center" flexWrap="wrap">
            <Text fontSize="sm" color="gray.600" fontWeight="medium">
              📱 Mobile Apps Coming Soon:
            </Text>
            <HStack gap={3}>
              <HStack gap={1} align="center">
                <Icon as={FaAndroid} color="teal.400" />
                <Text fontSize="xs" color="gray.500">Android</Text>
              </HStack>
              <Text fontSize="xs" color="gray.400">•</Text>
              <HStack gap={1} align="center">
                <Icon as={FaApple} color="teal.400" />
                <Text fontSize="xs" color="gray.500">iOS</Text>
              </HStack>
            </HStack>
          </HStack>
        </Box>

        <Separator my={6} />

        {/* Bottom Section */}
        <HStack justify="space-between" align="center" flexWrap="wrap" gap={4}>
          <Text fontSize="sm" color="gray.500">
            © 2025 Cirqura. All rights reserved.
          </Text>

          <HStack gap={6}>
            <Link
              href="/privacy"
              fontSize="sm"
              color="gray.500"
              _hover={{ color: 'teal.400' }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              fontSize="sm"
              color="gray.500"
              _hover={{ color: 'teal.400' }}
            >
              Terms of Service
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
