import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 8px 15px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border-color: ${(props) => props.theme.borderColor};

  &:hover,
  &:active {
    color: ${(props) => props.theme.active.color};
    * {
      fill: ${(props) => props.theme.active.color};
    }

    background-color: ${(props) => props.theme.active.backgroundColor};
    border-color: ${(props) => props.theme.active.borderColor};
  }

  &:disabled {
    color: ${(props) => props.theme.disabled.color};
    * {
      fill: ${(props) => props.theme.disabled.color};
    }

    background-color: ${(props) => props.theme.disabled.backgroundColor};
    border-color: ${(props) => props.theme.disabled.borderColor};
  }
`;
