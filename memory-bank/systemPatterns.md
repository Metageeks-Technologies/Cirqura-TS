# System Patterns *Optional*

This file documents recurring patterns and standards used in the project.
It is optional, but recommended to be updated as the project evolves.
2025-10-13 04:54:49 - Initialized system patterns for Cirqura Next.js website.

## Coding Patterns

- **TypeScript Usage**: Strict TypeScript for type safety, using interfaces for props and API responses.
- **Component Structure**: Functional React components with hooks (useState, useEffect) for state management.
- **Styling Approach**: Tailwind CSS for utility-first styling, with custom CSS modules if needed for complex components.
- **File Naming**: PascalCase for components (e.g., RecyclingServices.tsx), camelCase for utilities.
- **Import/Export**: ES6 imports, default exports for main components, named exports for utilities.

## Architectural Patterns

- **Next.js App Router**: Use of src/app/ directory for file-based routing, with layout.tsx for shared layout and page.tsx for home page.
- **Component Composition**: Modular components (e.g., Header, Footer, ServiceCard) composed into pages using Chakra UI.
- **Data Flow**: Client-side state for interactive elements, potential API routes for dynamic content, integration with app-based tracking system.
- **Responsive Design**: Mobile-first approach with breakpoints for desktop/tablet/mobile views, targeting UAE users with RTL support.
- **Chakra UI Theme System**: Custom teal accent theme extending Chakra defaults, consistent color palette and component variants.

## Design Patterns

- **Sustainable Aesthetics**: Earth-tone color palette with teal accent (#38B2AC), minimal digital footprint design.
- **Accessibility First**: WCAG 2.1 AA compliance using Chakra's built-in accessibility features.
- **Performance Optimized**: Lightweight components, lazy loading, optimized images for fast loading.
- **Multi-language Support**: RTL layout support for Arabic, language switching functionality.

## Testing Patterns

- **Unit Testing**: Jest or Vitest for component testing, focusing on user interactions and data rendering.
- **Integration Testing**: Testing page loads and API integrations.
- **E2E Testing**: Playwright for full user journey testing (e.g., contact form submission).
- **Standards**: Aim for 80%+ code coverage, tests in __tests__/ directory or co-located with components.