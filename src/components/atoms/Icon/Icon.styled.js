import styled from 'styled-components';
import IconOptions from './options';

export const Error = styled(IconOptions['Alert']['Error'])`
  color: ${({ theme }) => theme.colors.red600};
  position: relative;
`;
