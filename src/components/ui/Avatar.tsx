'use client'

import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'

interface AvatarProps extends BoxProps {
  src?: string
  name?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

const sizeMap = {
  sm: '8',
  md: '12',
  lg: '16',
  xl: '20',
  '2xl': '24'
}

// Named export
export function Avatar({ src, name, size = 'md', ...props }: AvatarProps) {
  return (
    <Box
      w={sizeMap[size]}
      h={sizeMap[size]}
      borderRadius="full"
      overflow="hidden"
      position="relative"
      bg="gray.100"
      {...props}
    >
      {src && (
        <Image
          src={src}
          alt={name || 'Avatar'}
          fill
          style={{ objectFit: 'cover' }}
        />
      )}
    </Box>
  )
}

// Default export for compatibility
export default Avatar