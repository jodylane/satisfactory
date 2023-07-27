import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@components/globalstyles';
import theme from '@lib/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
