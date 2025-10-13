# Cirqura Website Component Design

## Core Layout Components

### Header/Navigation Component
```typescript
interface HeaderProps {
  currentLanguage: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange }) => {
  // Responsive navigation with Chakra UI
  // Mobile hamburger menu
  // Language switcher
  // CTA buttons for consultation
}
```

**Features:**
- Fixed top navigation with backdrop blur
- Responsive design (mobile hamburger, desktop horizontal)
- Language switcher (EN/AR) with RTL support
- Primary CTA button (Get Consultation)
- Active page highlighting

### Footer Component
```typescript
const Footer: React.FC = () => {
  // Contact information
  // Quick links grid
  // Social media icons
  // Newsletter signup
  // Copyright and legal links
}
```

**Sections:**
- Company contact details (Zuheb Hasan, operations@Cirqura.ae, +971563331416)
- Service links organized by category
- UAE location information
- Newsletter subscription with email validation

## Page-Specific Components

### Hero Section Component
```typescript
interface HeroProps {
  stats: {
    bottlesGenerated: number;
    recyclingRate: number;
    energySavings: number;
  };
}

const Hero: React.FC<HeroProps> = ({ stats }) => {
  // Animated hero with mission statement
  // Real-time counter animations
  // Primary and secondary CTAs
}
```

**Features:**
- Background video/image with overlay
- Animated statistics counters
- Mission statement: "Together we will do it"
- Dual CTA buttons (Learn More, Get Consultation)

### Service Cards Component
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title, description, icon, features, ctaText, onCtaClick
}) => {
  // Service card with hover effects
  // Feature list with checkmarks
  // CTA button integration
}
```

**Services:**
1. **Collection Services**: Glass, PET, Aluminium, Cardboard
2. **Sustainability Solutions**: Training, Implementation, Monitoring
3. **Data & Analytics**: Carbon tracking, Reporting, Dashboards

### Process Timeline Component
```typescript
interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  duration?: string;
}

const ProcessTimeline: React.FC<{ steps: ProcessStep[] }> = ({ steps }) => {
  // Vertical timeline for 7-step process
  // Step connectors with animations
  // Progress indicators
}
```

**7-Step Process:**
1. Pre-treatment
2. Sorting
3. Crushing
4. Mixing
5. Melting
6. Molding
7. Quality Control

### Impact Calculator Component
```typescript
interface CalculatorInputs {
  bottlesCollected: number;
  period: 'monthly' | 'yearly';
}

const ImpactCalculator: React.FC = () => {
  // Interactive form inputs
  // Real-time calculations
  // Visual results display
  // Share functionality
}
```

**Calculations:**
- CO2 emissions prevented
- Energy savings
- Water conservation
- Economic benefits

### Testimonials Carousel Component
```typescript
interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialsCarousel: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  // Auto-rotating carousel
  // Navigation dots/arrows
  // Pause on hover
  // Company logos display
}
```

**Features:**
- Client logos and headshots
- Star ratings display
- Auto-rotation with manual controls
- Mobile-optimized card layout

## Interactive Components

### Language Switcher Component
```typescript
const LanguageSwitcher: React.FC<{
  current: 'en' | 'ar';
  onChange: (lang: 'en' | 'ar') => void;
}> = ({ current, onChange }) => {
  // Toggle button with flag icons
  // Smooth RTL/LTR transitions
  // Local storage persistence
}
```

### Contact Form Component
```typescript
interface ContactFormData {
  type: 'consultation' | 'partnership' | 'general';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  serviceInterest?: string[];
}

const ContactForm: React.FC<{
  formType: ContactFormData['type'];
  onSubmit: (data: ContactFormData) => void;
}> = ({ formType, onSubmit }) => {
  // Dynamic form fields based on type
  // Validation with Chakra UI form controls
  // Success/error states
  // Anti-spam measures
}
```

**Form Types:**
- General inquiry
- Service consultation
- Partnership development
- Training program interest

### Service Area Map Component
```typescript
const ServiceAreaMap: React.FC = () => {
  // Dubai/UAE coverage visualization
  // Service location markers
  // Coverage radius indicators
  // Interactive zoom/pan
}
```

## Utility Components

### Loading Spinner Component
```typescript
const LoadingSpinner: React.FC<{ size?: string; color?: string }> = ({
  size = "md",
  color = "teal.500"
}) => {
  // Chakra UI spinner with customization
  // Consistent loading states
}
```

### Error Boundary Component
```typescript
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType },
  { hasError: boolean }
> {
  // Error catching and fallback UI
  // Error reporting integration
}
```

### SEO Head Component
```typescript
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

const SEOHead: React.FC<SEOProps> = ({
  title, description, keywords, ogImage, canonical
}) => {
  // Next.js Head component with meta tags
  // Open Graph tags
  // Twitter Card tags
  // Structured data (JSON-LD)
}
```

## Theme Configuration

### Chakra UI Custom Theme
```typescript
const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0f9f0',
      500: '#38B2AC', // Default teal
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
      variants: {
        solid: {
          bg: 'brand.500',
          _hover: { bg: 'brand.600' }
        }
      }
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
})
```

## Component Organization

### File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── ProcessTimeline.tsx
│   ├── ui/
│   │   ├── ServiceCard.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ImpactCalculator.tsx
│   │   └── LanguageSwitcher.tsx
│   └── common/
│       ├── LoadingSpinner.tsx
│       ├── ErrorBoundary.tsx
│       └── SEOHead.tsx
├── lib/
│   ├── theme.ts
│   └── constants.ts
└── types/
    └── components.ts
```

### Component Patterns
- **Compound Components**: For complex forms and modals
- **Render Props**: For customizable behavior
- **Custom Hooks**: For shared logic (useLanguage, useFormValidation)
- **Higher-Order Components**: For authentication and permissions

This component architecture provides a scalable, maintainable foundation for the Cirqura website with strong TypeScript typing, accessibility features, and performance optimizations.