import styled, { css } from 'styled-components';
import CloseIcon from '@atoms/Icon';

export const StyledAlert = styled.div`
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
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

export const Icon = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const ProgressBar = styled.div`
  background-color: ${({ theme }) => theme.borderColor};
  bottom: 0;
  height: 3px;
  left: 0;
  position: absolute;
  width: ${({ percent }) => percent}%;
`;
