'use client'

import { useState } from 'react'
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  DialogBackdrop,
} from '@chakra-ui/react'
import {
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'

interface ConsultationPopupProps {
  trigger: React.ReactNode
}

export function ConsultationPopup({ trigger }: ConsultationPopupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    glassVolume: '',
    message: '',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the data to your API
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))

      toaster.create({
        title: 'Consultation Request Submitted',
        description: 'Thank you for your interest. Our team will contact you within 24 hours.',
        type: 'success',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        businessType: '',
        glassVolume: '',
        message: '',
      })
    } catch {
      toaster.create({
        title: 'Submission Failed',
        description: 'Please try again or contact us directly.',
        type: 'error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <span style={{ display: 'contents' }}>
          {trigger}
        </span>
      </DialogTrigger>

      <DialogBackdrop
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.800"
        zIndex={9998}
      />
      <DialogContent
        position="fixed"
        top="50vh"
        left="50vw"
        transform="translate(-50%, -50%)"
        maxW="md"
        w="90%"
        zIndex={9999}
      >
        <DialogHeader>
          <DialogTitle>
            <Heading size="lg" color="teal.400">
              Get Free Consultation
            </Heading>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <DialogBody>
            <VStack gap={4}>
              <Text color="gray.600" fontSize="sm">
                Fill out the form below and our sustainability experts will contact you within 24 hours to discuss your glass recycling needs.
              </Text>

              <VStack gap={3} align="stretch" w="full">
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />

                <HStack gap={3}>
                  <Input
                    placeholder="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Phone *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </HStack>

                <Input
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  required
                />

                <select
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                  }}
                >
                  <option value="">Business Type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                  <option value="cafe">Cafe</option>
                  <option value="bar">Bar/Pub</option>
                  <option value="retail">Retail Store</option>
                  <option value="office">Office Building</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>

                <select
                  value={formData.glassVolume}
                  onChange={(e) => handleInputChange('glassVolume', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #E2E8F0',
                    borderRadius: '6px',
                    fontSize: '14px',
                    backgroundColor: 'white',
                  }}
                >
                  <option value="">Monthly Glass Volume</option>
                  <option value="small">Small (1-10 boxes/month)</option>
                  <option value="medium">Medium (10-50 boxes/month)</option>
                  <option value="large">Large (50-200 boxes/month)</option>
                  <option value="enterprise">Enterprise (200+ boxes/month)</option>
                </select>

                <Textarea
                  placeholder="Tell us about your current waste management and sustainability goals..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={3}
                />
              </VStack>
            </VStack>
          </DialogBody>

          <DialogFooter>
            <HStack gap={3} w="full">
              <DialogCloseTrigger asChild>
                <Button variant="ghost" disabled={isSubmitting}>
                  Cancel
                </Button>
              </DialogCloseTrigger>
              <Button
                type="submit"
                colorPalette="teal"
                disabled={isSubmitting}
                loading={isSubmitting}
                w="full"
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </Button>
            </HStack>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogRoot>
  )
}