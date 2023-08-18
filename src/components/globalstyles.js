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

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.75em;
  }

  h4 {
    font-size: 1.5em;
  }

  h5 {
    font-size: 1.25em;
  }

  h6 {
    font-size: 1em;
  }


  // handles formatting of dynamic prop values to match storybook styles
  #storybook-docs {
    .custom-code-container {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 4px;
      min-width: 100px;

      .custom-code {
        background-color: #F7FAFC;
        border-radius: 3px;
        border: 1px solid #ECF4F9;
        color: #2e3438e6;
        font-family: ui-monospace,Menlo,Monaco,"Roboto Mono","Oxygen Mono","Ubuntu Monospace","Source Code Pro","Droid Sans Mono","Courier New",monospace;
        font-size: 12px;
        margin: 0 4px 4px 0;
        padding: 0 3px;
      }
    }
  }
`;

export const StorybookContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  min-width: 30vw;
`;
