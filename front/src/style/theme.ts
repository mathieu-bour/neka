import merge from 'lodash/merge';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme((defaultTheme) => {
  return merge(defaultTheme, {
    config: {
      initialColorMode: 'dark',
    },
    fonts: {
      headings: `Fira Code, ${defaultTheme.fonts.headings}`,
      body: `Fira Code, ${defaultTheme.fonts.body}`,
    },
    styles: {
      global: {
        body: {
          bgColor: 'gray.900',
          color: 'white',
        },
      },
    },
    components: {
      Container: {
        baseStyle: {
          w: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
          },
          maxW: 'auto',
        },
      },
      Button: {
        defaultProps: {
          colorScheme: 'green',
        },
      },
      Modal: {
        defaultProps: {
          bgColor: 'gray.700', // TODO: does not work for some reason
        },
      },
    },
  });
});

export default theme;
