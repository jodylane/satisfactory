import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 15px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`;
