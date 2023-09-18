import styled, { css } from 'styled-components';

export const ColorSwatch = styled.div`
  align-items: center;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  height: 150px;
  justify-content: center;
  width: 150px;

  ${({ color, backgroundColor }) => css`
    background-color: ${backgroundColor};
    border: 1px solid ${color};
    color: ${color};
  `}
`;
