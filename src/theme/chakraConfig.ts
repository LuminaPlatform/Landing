import { extendTheme } from '@chakra-ui/react'
import { chakraColors } from './colors'

export const chakraTheme = extendTheme({
  colors: chakraColors,
  components: {
    Button: {
      baseStyle: {
        boxShadow: 'none !important',
        height: '40px',
        paddingInline: '16px',
      },
    },
  },

  styles: {
    global: {
      'html, body': {
        fontFamily: 'Lexend',
        scrollBehavior: 'smooth',
      },
      body: {
        bg: 'transparent',
        color: 'none',
      },
    },
  },
})
