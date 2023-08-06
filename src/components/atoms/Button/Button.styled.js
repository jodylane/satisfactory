import styled, { css } from 'styled-components';

const OutlineStyles = (theme) => css`
  background-color: ${theme.outline.backgroundColor};
  border-color: ${theme.outline.borderColor};
  color: ${theme.outline.color};

  &:disabled {
    background-color: ${theme.disabled.outline.backgroundColor};
    border-color: ${theme.disabled.outline.borderColor};
    color: ${theme.disabled.outline.color};

    * {
      fill: ${theme.disabled.outline.color};
    }
  }
`;

const StandardStyles = (theme) => css`
  background-color: ${theme.backgroundColor};
  border-color: ${theme.borderColor};
  color: ${theme.color};

  &:disabled {
    background-color: ${theme.disabled.backgroundColor};
    border-color: ${theme.disabled.borderColor};
    color: ${theme.disabled.color};

    * {
      fill: ${theme.disabled.color};
    }
  }
`;

const ActiveHoverStyles = (theme) => css`
  background-color: ${theme.active.backgroundColor};
  border-color: ${theme.active.borderColor};
  color: ${theme.active.color};

  * {
    fill: ${theme.active.color};
  }
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  font-size: 0.9em;
  padding: 0.5em 0.9375em;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  ${({ outline, theme }) => {
    if (outline) {
      return OutlineStyles(theme);
    }

    return StandardStyles(theme);
  }}

  &:hover,
  &:active {
    ${({ theme }) => {
      return ActiveHoverStyles(theme);
    }}
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
