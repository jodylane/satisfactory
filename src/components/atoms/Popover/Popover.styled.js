import styled, { css } from 'styled-components';

const SMALL = '1em';
const LARGE = '1.5em';

const themedStyles = (theme, position, target, self) => {
  let styleRule = null;
  if (target) {
    console.log(target.getBoundingClientRect(), self.getBoundingClientRect());
    const { height, width } = self.getBoundingClientRect();
    const { top, left, bottom, right, height: targetHeight } = target.getBoundingClientRect();

    if (position === 'bottom') {
      styleRule = css`
        top: calc(-${top / 2}px - ${height}px - calc(1em));
      `;
    } else if (position === 'top') {
      styleRule = css`
        bottom: calc(-${top / 2}px);
      `;
    } else if (position === 'right') {
      styleRule = css`
        left: calc(-${left}px + calc(-1.5em - ${LARGE}));
        top: calc(-${top / 2}px - ${(targetHeight / 4) * 3}px);
      `;
    }
  }

  return css`
    ${styleRule}
    background-color: ${theme.colors.white.value};
    border: 1px solid ${theme.colors.black.value};
  `;
};

const determineFontSize = (size, small) => css`
  ${small ? `calc(${size} - 1px)` : size}
`;

const determinePosition = (size, small) => css`
  ${small ? `calc(${size} + 1px)` : `calc(${size} - 1px)`}
`;

const determineColor = (theme, small) => css`
  ${small ? theme.colors.white.value : theme.colors.black.value}
`;

const horizontalFacingTriangle = (shouldFaceLeft, theme, small) => {
  const baseTriangleStyles = css`
    border-bottom: ${determineFontSize(SMALL, small)} solid transparent;
    border-top: ${determineFontSize(SMALL, small)} solid transparent;
    top: 50%;
    transform: translateY(-50%);
  `;

  if (shouldFaceLeft)
    return css`
      ${baseTriangleStyles};
      border-right: ${determineFontSize(LARGE, small)} solid ${determineColor(theme, small)};
      left: ${determinePosition(`-${LARGE}`, small)};
    `;

  return css`
    ${baseTriangleStyles}
    border-left: ${determineFontSize(LARGE, small)} solid ${determineColor(theme, small)};
    right: ${determinePosition(`-${LARGE}`, small)};
  `;
};

const verticalFacingTriangle = (shouldFaceUp, theme, small) => {
  const baseTriangleStyles = css`
    border-left: ${determineFontSize(SMALL, small)} solid transparent;
    border-right: ${determineFontSize(SMALL, small)} solid transparent;
    left: 50%;
    transform: translateX(-50%);
  `;

  if (shouldFaceUp)
    return css`
      ${baseTriangleStyles};
      border-bottom: ${determineFontSize(LARGE, small)} solid ${determineColor(theme, small)};
      top: ${determinePosition(`-${LARGE}`, small)};
    `;

  return css`
    ${baseTriangleStyles}
    border-top: ${determineFontSize(LARGE, small)} solid ${determineColor(theme, small)};
    bottom: ${determinePosition(`-${LARGE}`, small)};
  `;
};

const determineTrianglePosition = (position, theme, small) => {
  if (['left', 'right'].includes(position))
    return horizontalFacingTriangle(position === 'left', theme, small);

  return verticalFacingTriangle(position === 'top', theme, small);
};

export const Container = styled.div`
  ${({ theme, target, position, self }) => themedStyles(theme, position, target, self)}
  padding: 1em 1.875em;
  position: relative;

  &:after,
  &:before {
    content: '';
    height: 0;
    position: absolute;
    width: 0;
  }

  &:after {
    ${({ theme, position }) => {
      return css`
        ${determineTrianglePosition(position, theme, true)}
      `;
    }}
  }

  &:before {
    ${({ theme, position, target }) => {
      if (target) {
        const boundaries = target.getBoundingClientRect();
        console.log(theme);
      }

      return css`
        ${determineTrianglePosition(position, theme)}
      `;
    }}
  }
`;
