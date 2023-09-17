import styled from 'styled-components';

export const ColorSwatch = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => props.color};
  font-size: 24px;
  font-weight: bold;
`;
