# Technical Implementation Guide for Cirqura Website

## Technology Stack

### Frontend Framework
- **Next.js 15**: App Router for modern React development
- **React 19**: Latest React with concurrent features
- **TypeScript**: Strict type checking for maintainability
- **Chakra UI**: Component library with teal theme (#38B2AC)

### Development Tools
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS processing with Tailwind integration
- **TypeScript Compiler**: Type checking and compilation

## Installation & Setup

### 1. Install Chakra UI Dependencies
```bash
npm install @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
# or
pnpm add @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
```

### 2. Chakra UI Configuration
Create `src/lib/theme.ts`:
```typescript
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0f9f0',
      100: '#c6f6d5',
      500: '#38B2AC',
      600: '#2C7A7B',
      700: '#285E61',
    }
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand'
      }
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
})
```

### 3. Root Layout Configuration
Update `src/app/layout.tsx`:
```typescript
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/lib/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}
```

## Project Structure

### Directory Organization
```
src/
├── app/
│   ├── (pages)/           # Route groups for organization
│   │   ├── about/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── market/
│   │   ├── benefits/
│   │   ├── process/
│   │   ├── resources/
│   │   └── contact/
│   ├── api/              # API routes for forms/dynamic content
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── ImpactCalculator.tsx
│   │   └── MarketImpact.tsx
│   ├── ui/
│   │   ├── ServiceCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ProcessStep.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── CTAButton.tsx
│   └── common/
│       ├── LoadingSpinner.tsx
│       ├── ErrorBoundary.tsx
│       └── SEOHead.tsx
├── lib/
│   ├── theme.ts
│   ├── constants.ts
│   ├── utils.ts
│   └── validations.ts
├── types/
│   ├── index.ts
│   └── api.ts
└── hooks/
    ├── useLanguage.ts
    ├── useFormValidation.ts
    └── useIntersectionObserver.ts
```

## Component Development Patterns

### 1. Base Component Template
```typescript
import { Box, useColorModeValue } from '@chakra-ui/react'

interface ComponentNameProps {
  // Define props with TypeScript
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  // Destructure props
}) => {
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box bg={bgColor}>
      {/* Component content */}
    </Box>
  )
}
```

### 2. Custom Hook for Language Switching
```typescript
// src/hooks/useLanguage.ts
import { useState, useEffect } from 'react'

type Language = 'en' | 'ar'

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('cirqura-language') as Language
    if (saved) setLanguage(saved)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
    localStorage.setItem('cirqura-language', newLang)
    // Update document direction for RTL
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
  }

  return { language, toggleLanguage }
}
```

### 3. Form Validation Hook
```typescript
// src/hooks/useFormValidation.ts
import { useState } from 'react'

interface ValidationRule {
  required?: boolean
  pattern?: RegExp
  custom?: (value: string) => boolean
  message: string
}

interface FieldConfig {
  [key: string]: ValidationRule[]
}

export const useFormValidation = (config: FieldConfig) => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (data: Record<string, any>): boolean => {
    const newErrors: Record<string, string> = {}

    Object.keys(config).forEach(field => {
      const rules = config[field]
      const value = data[field]

      for (const rule of rules) {
        if (rule.required && (!value || value.toString().trim() === '')) {
          newErrors[field] = rule.message
          break
        }
        if (rule.pattern && value && !rule.pattern.test(value)) {
          newErrors[field] = rule.message
          break
        }
        if (rule.custom && value && !rule.custom(value)) {
          newErrors[field] = rule.message
          break
        }
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return { errors, validate, setErrors }
}
```

## API Routes Implementation

### Contact Form API Route
```typescript
// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  type: 'consultation' | 'partnership' | 'general'
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would integrate with your CRM/email service
    // Example: SendGrid, Mailgun, or CRM API

    console.log('Contact form submission:', data)

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### Newsletter Subscription API
```typescript
// src/app/api/newsletter/route.ts
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation and subscription logic
    // Integrate with email marketing service (Mailchimp, etc.)

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Subscription failed' },
      { status: 500 }
    )
  }
}
```

## Performance Optimization

### Image Optimization
```typescript
// src/components/ui/OptimizedImage.tsx
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src, alt, width, height, priority = false
}) => {
  return (
    <Box position="relative" width={width} height={height}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Box>
  )
}
```

### Lazy Loading Components
```typescript
// src/components/common/LazySection.tsx
import { Box } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

interface LazySectionProps {
  children: React.ReactNode
  threshold?: number
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  threshold = 0.1
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true
  })

  return (
    <Box ref={ref}>
      {inView ? children : <Box height="200px" />}
    </Box>
  )
}
```

## SEO Implementation

### Dynamic Meta Tags
```typescript
// src/components/common/SEOHead.tsx
import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
}

export const SEOHead: React.FC<SEOProps> = ({
  title, description, keywords, canonical, ogImage
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cirqura.ae'
  const fullTitle = `${title} | Cirqura`
  const imageUrl = ogImage || `${siteUrl}/og-image.jpg`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Cirqura" />
    </Head>
  )
}
```

## Deployment Configuration

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://cirqura.ae
NEXT_PUBLIC_API_URL=https://api.cirqura.ae
NEXT_PUBLIC_ANALYTICS_ID=GA_MEASUREMENT_ID

# Email service configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=operations@cirqura.ae
SMTP_PASS=app_password

# CRM integration
CRM_API_KEY=your_crm_api_key
CRM_ENDPOINT=https://api.crm.com/v1
```

### Next.js Configuration
```typescript
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['cirqura.ae', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif']
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeDetection: false
  },
  experimental: {
    optimizeCss: true
  }
}

export default nextConfig
```

### Build Optimization
```typescript
// next.config.ts (continued)
const nextConfig: NextConfig = {
  // ... other config
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
    return config
  }
}
```

This technical implementation guide provides a solid foundation for building the Cirqura website with modern web development practices, performance optimization, and maintainability in mind.