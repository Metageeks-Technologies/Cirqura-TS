# AGENTS.md

## Project Overview
Cirqura - Sustainable glass recycling platform for UAE market. Building a Next.js website with Chakra UI v3 to showcase collection services, sustainability training, and carbon footprint tracking for businesses.

## Technology Stack Rules

### Framework & Library Requirements
- Next.js 14+ with App Router
- Chakra UI v3 (NOT v2) - strictly follow migration rules
- TypeScript for all components and utilities
- Default teal color palette as accent color (#38A169 - teal.500)
- Light theme only (no dark mode toggle)
- Do Not use shadcn anywhere in this project

### Chakra UI v3 Rules
This project uses Chakra UI v3. Follow these rules:

1. Import from @chakra-ui/react: Alert, Avatar, Button, Card, Field, Table, etc.
2. Import from components/ui: Checkbox, Drawer, Radio, Menu, Dialog, Tooltip,
   etc.
3. Use toaster.create() instead of useToast()
4. Modal is now Dialog with different props
5. Boolean props changed: isOpen → open, isDisabled → disabled
6. colorScheme → colorPalette
7. Button icons are children, not props
8. Always use VStack/HStack, not Stack
9. Use compound components for complex components
10. Check migration guide for component-specific changes

### Do's
- Use Chakra UI v3 teal color palette (`teal.50` to `teal.900`) as primary colors
- Implement responsive design with Chakra's breakpoint system
- Use TypeScript interfaces for all props and data structures
- Create reusable components in `/components` directory
- Use Next.js Image component for all images
- Implement proper SEO with Next.js metadata API
- Use environment variables for API endpoints and sensitive data
- Follow atomic design principles (atoms, molecules, organisms)
- Implement proper loading states and error handling
- Use Chakra's built-in accessibility features

### Don'ts
- Do not use Chakra UI v2 syntax or imports
- Do not hardcode colors - use theme tokens
- Do not use inline styles - use Chakra props
- Do not create custom CSS files unless absolutely necessary
- Do not use any UI library other than Chakra UI
- Do not implement dark mode toggle
- Do not use deprecated Chakra components
- Do not mix styling approaches (stick to Chakra system)

## Component Guidelines

### Layout Components
- Header: Fixed navigation with Cirqura branding and teal accents
- Footer: Company info, contact details, social links
- Navigation: Mobile-responsive with hamburger menu

### Content Sections
- Hero: "Together we will do it" with UAE statistics
- Services: Collection, Training, Analytics with icons
- Impact: Statistics and environmental benefits
- Contact: Form with validation and toast notifications

## Content Requirements

### Key Messages to Include
- UAE generates 100 million empty bottles annually 
- Only 10% currently recycled 
- Glass is 100% recyclable with no quality loss 
- 40% energy savings vs new glass production 
- Services: Collection, Sustainability Training, Carbon Tracking 

### Contact Information
- Primary Contact: Zuheb Hasan (+971563331416, operations@Cirqura.ae) 
- Dubai-based operations 
- Partnership opportunities with government entities 

## Theme Configuration
- Primary color: teal (Chakra's default teal palette)
- Light theme only with teal accents
- Use semantic color tokens for better maintainability
- Responsive breakpoints: base, sm, md, lg, xl

## SEO Requirements
- Implement proper meta tags for glass recycling UAE keywords
- Include structured data for local business
- Optimize images with Next.js Image component
- Create sitemap and robots.txt

## Performance Guidelines
- Optimize images and use WebP format when possible
- Implement lazy loading for below-the-fold content
- Use Next.js built-in optimizations
- Minimize bundle size with proper imports

## Testing Guidelines
- Test responsive design across breakpoints
- Validate form functionality and error states
- Test accessibility with screen readers
- Check color contrast for teal theme compliance

## When Stuck
- Reference Chakra UI v3 official documentation using chakra-ui mcp tool
- Check Next.js App Router best practices
- Propose implementation plan before making large changes
- Ask for clarification on business requirements vs technical implementation

## MCP tools
- Use chrome-devtools to inspect & browse pages
- Use chakra-ui mcp tool