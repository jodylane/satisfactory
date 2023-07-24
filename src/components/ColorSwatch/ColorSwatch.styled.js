import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template: auto / repeat(auto-fill, minmax(150px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
`;

export const Swatch = styled.div`
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
