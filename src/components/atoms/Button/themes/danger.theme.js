import theme from '@lib/theme';

export default {
  borderColor: theme.colors.red.value,
  color: theme.colors.red.contrastColor,
  backgroundColor: theme.colors.red.value,
  outline: {
    borderColor: theme.colors.red.value,
    color: theme.colors.red.value,
    backgroundColor: theme.colors.transparent.value,
  },
  disabled: {
    borderColor: theme.colors.red400.value,
    color: theme.colors.black300.value,
    backgroundColor: theme.colors.red400.value,
    outline: {
      borderColor: theme.colors.red400.value,
      color: theme.colors.red400.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  active: {
    borderColor: theme.colors.red700.value,
    color: theme.colors.red700.contrastColor,
    backgroundColor: theme.colors.red700.value,
  },
};
