import styled, { css } from 'styled-components';
// import { Close } from '@styled-icons/material/Close';

export const StyledAlert = styled.div`
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  font-size: 0.9em;
  font-weight: bold;
  padding: 1em 1.875em;
  position: relative;
  width: 100%;

  ${({ theme }) => {
    return css`
      background-color: ${theme.backgroundColor};
      border-color: ${theme.borderColor};
      color: ${theme.color};
    `;
  }}
`;
