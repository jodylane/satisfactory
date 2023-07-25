import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.outline ? props.theme.outline.backgroundColor : props.theme.backgroundColor};
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.outline ? props.theme.outline.borderColor : props.theme.borderColor)};
  color: ${(props) => (props.outline ? props.theme.outline.color : props.theme.color)};
  cursor: pointer;
  padding: 8px 15px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.active.backgroundColor};
    border-color: ${(props) => props.theme.active.borderColor};
    color: ${(props) => props.theme.active.color};

    * {
      fill: ${(props) => props.theme.active.color};
    }
  }

  &:disabled {
    background-color: ${(props) =>
      props.outline ? props.theme.colors.white.value : props.theme.disabled.backgroundColor};
    border-color: ${(props) => props.theme.disabled.borderColor};
    color: ${(props) =>
      props.outline ? props.theme.disabled.backgroundColor : props.theme.disabled.color};
    cursor: not-allowed;

    * {
      fill: ${(props) =>
        props.outline ? props.theme.disabled.backgroundColor : props.theme.disabled.color};
    }
  }
`;
