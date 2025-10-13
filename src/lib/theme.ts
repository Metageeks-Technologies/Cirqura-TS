import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        teal: {
          50: { value: "#E6FFFA" },
          100: { value: "#B2F5EA" },
          200: { value: "#81E6D9" },
          300: { value: "#4FD1C9" },
          400: { value: "#38B2AC" },
          500: { value: "#319795" },
          600: { value: "#2C7A7B" },
          700: { value: "#285E61" },
          800: { value: "#234E52" },
          900: { value: "#1A365D" },
          950: { value: "#0F2628" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customTheme);
