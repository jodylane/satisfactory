import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-size: 16px;

    @media (max-width: ${(props) => props.theme.deviceSize.md}) { 
      font-size: 18px;
    }

    @media (max-width: ${(props) => props.theme.deviceSize.sm}) { 
      font-size: 20px;
    }
    
  }
`;

export const StorybookContainer = styled.div`
  min-width: 30vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
