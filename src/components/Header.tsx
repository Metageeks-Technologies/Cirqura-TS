"use client"

import {
  Box,
  Button,
  Container,
  HStack,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react'
import { MdElectricBolt } from 'react-icons/md'
import { ConsultationPopup } from '@/components/ConsultationPopup'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

export const Header: React.FC = () => {
  const bgColor = 'whiteAlpha.900'
  const borderColor = 'gray.200'

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bgColor}
      backdropFilter="blur(10px)"
      borderBottom={1}
      borderColor={borderColor}
      shadow="sm"
      width="100%"
    >
      <Container maxW="7xl" px={4}>
        <HStack justify="space-between" h={16}>
          {/* Logo/Brand */}
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <HStack gap={2}>
              <Box
                w={8}
                h={8}
                bg="teal.400"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="lg" fontWeight="bold" color="white">
                  <MdElectricBolt />
                </Text>
              </Box>
              <VStack gap={0} align="start">
                <Text fontSize="xl" fontWeight="bold" color="teal.400">
                  Cirqura
                </Text>
              </VStack>
            </HStack>
          </Link>

          {/* Desktop Navigation */}
          <HStack gap={8} display={{ base: 'none', lg: 'flex' }}>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                fontSize="sm"
                fontWeight="medium"
                color="gray.700"
                _hover={{ color: 'teal.400' }}
                transition="color 0.2s"
              >
                {item.label}
              </Link>
            ))}
          </HStack>

          {/* Desktop Actions */}
          <HStack gap={4} display={{ base: 'none', lg: 'flex' }}>
            {/* CTA Button */}
            <ConsultationPopup
              trigger={
                <Button
                  size="sm"
                  bg="teal.400"
                  color="white"
                  _hover={{ bg: 'teal.400' }}
                >
                  Get Consultation
                </Button>
              }
            />
          </HStack>

          {/* Mobile CTA - shown only on mobile */}
          <Button
            size="sm"
            bg="teal.400"
            color="white"
            _hover={{ bg: 'teal.400' }}
            display={{ base: 'block', lg: 'none' }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact
          </Button>
        </HStack>
      </Container>
    </Box>
  )
}