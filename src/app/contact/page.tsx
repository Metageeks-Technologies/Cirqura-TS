import { Metadata } from 'next'
import { ContactPageClient } from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us - Cirqura | Glass Recycling Services UAE',
  description: 'Get in touch with Cirqura for glass recycling services in UAE. Contact Zuheb Hasan for collection services, sustainability training, and carbon tracking solutions. Dubai-based operations.',
  keywords: [
    'contact Cirqura UAE',
    'glass recycling Dubai contact',
    'sustainability training UAE',
    'carbon tracking contact',
    'waste management Dubai',
    'glass collection services',
    'environmental consulting contact'
  ],
  openGraph: {
    title: 'Contact Us - Cirqura | Glass Recycling Services UAE',
    description: 'Get in touch with Cirqura for glass recycling services in UAE. Dubai-based operations providing sustainable waste management solutions.',
    url: 'https://cirqura.ae/contact',
    siteName: 'Cirqura',
    locale: 'en_UAE',
    type: 'website',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}