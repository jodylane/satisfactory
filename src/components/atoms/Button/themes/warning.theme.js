import theme from '@lib/theme';

export default {
  borderColor: theme.colors.yellow.value,
  color: theme.colors.yellow.contrastColor,
  backgroundColor: theme.colors.yellow.value,
  outline: {
    borderColor: theme.colors.yellow.value,
    color: theme.colors.yellow.value,
    backgroundColor: theme.colors.transparent.value,
  },
  disabled: {
    borderColor: theme.colors.yellow400.value,
    color: theme.colors.black300.value,
    backgroundColor: theme.colors.yellow400.value,
    outline: {
      borderColor: theme.colors.yellow400.value,
      color: theme.colors.yellow400.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  active: {
    borderColor: theme.colors.yellow600.value,
    color: theme.colors.yellow600.contrastColor,
    backgroundColor: theme.colors.yellow600.value,
  },
};
