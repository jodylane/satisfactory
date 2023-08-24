import styled, { css } from 'styled-components';

const SMALL = '1em';
const LARGE = '1.5em';

const themedStyles = (theme, position, target, self) => {
  if (target && self) {
    const targetRect = target.getBoundingClientRect();
    const popoverRect = self.getBoundingClientRect();
    let top = 0;
    let left = 0;

    if (position === 'top') {
      top = targetRect.bottom + 30;
      left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
    } else if (position === 'right') {
      top = targetRect.top + targetRect.height / 2 - popoverRect.height / 2;
      left = targetRect.left - popoverRect.width - 30;
    } else if (position === 'bottom') {
      top = targetRect.top - popoverRect.height - 30;
      left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
    } else if (position === 'left') {
      top = targetRect.top + targetRect.height / 2 - popoverRect.height / 2;
      left = targetRect.right + 30;
    }

    return css`
      top: ${top}px;
      left: ${left}px;
    `;
  }
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
