import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      width="100%"
    >
      <Header />

      <Box
        as="main"
        flex="1"
        pt={16}
        width="100%"
        maxWidth="100%"
        overflowX="hidden"
      >
        {children}
      </Box>

      <Footer />
    </Box>
  )
}