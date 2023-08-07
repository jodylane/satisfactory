import theme from '@lib/theme';

export default {
  borderColor: theme.colors.green.value,
  color: theme.colors.green.contrastColor,
  backgroundColor: theme.colors.green.value,
  outline: {
    borderColor: theme.colors.green.value,
    color: theme.colors.green.value,
    backgroundColor: theme.colors.transparent.value,
  },
  disabled: {
    borderColor: theme.colors.green400.value,
    color: theme.colors.black300.value,
    backgroundColor: theme.colors.green400.value,
    outline: {
      borderColor: theme.colors.green400.value,
      color: theme.colors.green400.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  active: {
    borderColor: theme.colors.green600.value,
    color: theme.colors.green600.contrastColor,
    backgroundColor: theme.colors.green600.value,
  },
};
