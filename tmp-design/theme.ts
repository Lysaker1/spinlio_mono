import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  components: {
    Button: {
      styles: {
        root: {
          background: 'rgba(255, 255, 255, 0.3)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.4)',
          },
        },
      },
    },
  },
};

// Add the background styles
export const backgroundStyles = {
  gradient: `linear-gradient(
    180deg, 
    rgba(100, 89, 77, 0.00) 4.83%, 
    rgba(100, 89, 77, 0.30) 34.5%, 
    rgba(100, 89, 77, 0.40) 65%
  )`,
  dimensions: {
    width: '95.8125rem',
    height: '70.8125rem'
  }
};