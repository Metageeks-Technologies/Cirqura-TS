import { Field as ChakraField } from '@chakra-ui/react'

export const Field = ChakraField

// Export individual Field components for compound usage
export const {
  Root: FieldRoot,
  Label: FieldLabel,
  HelperText: FieldHelperText,
  ErrorText: FieldErrorText,
  RequiredIndicator: FieldRequiredIndicator
} = ChakraField