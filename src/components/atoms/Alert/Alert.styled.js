import styled from 'styled-components';

export const StyledAlert = styled.div`
  background-color: ${(props) =>
    props.outline ? props.theme.outline.backgroundColor : props.theme.backgroundColor};
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.outline ? props.theme.outline.borderColor : props.theme.borderColor)};
  color: ${(props) => (props.outline ? props.theme.outline.color : props.theme.color)};
  font-size: 0.9em;
  padding: 0.5em 0.9375em;
  width: 100%;
`;
