import theme from '@lib/theme';

export default {
  borderColor: theme.colors.white.value,
  color: theme.colors.white.contrastColor,
  backgroundColor: theme.colors.white.value,
  outline: {
    borderColor: theme.colors.white.value,
    color: theme.colors.white.value,
    backgroundColor: theme.colors.transparent.value,
  },
  disabled: {
    borderColor: theme.colors.white500.value,
    color: theme.colors.black300.value,
    backgroundColor: theme.colors.white500.value,
    outline: {
      borderColor: theme.colors.white500.value,
      color: theme.colors.black300.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  active: {
    borderColor: theme.colors.white700.value,
    color: theme.colors.white700.contrastColor,
    backgroundColor: theme.colors.white700.value,
  },
};
