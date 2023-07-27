import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template: auto / repeat(auto-fill, minmax(150px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
`;
