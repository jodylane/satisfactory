import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@components/globalstyles';
import theme from '@lib/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
