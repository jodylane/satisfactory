/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from 'styled-components';
import theme from '@lib/theme';
import { GlobalStyles, StorybookContainer } from '@components/globalstyles';

const preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: 'clear', value: 'transparent', default: true },
        { name: 'light', value: '#F8F8F8' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StorybookContainer>{Story()}</StorybookContainer>
      </ThemeProvider>
    ),
  ],
};

export default preview;
