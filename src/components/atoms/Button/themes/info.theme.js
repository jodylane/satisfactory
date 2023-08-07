import theme from '@lib/theme';

export default {
  borderColor: theme.colors.cyan.value,
  color: theme.colors.cyan.contrastColor,
  backgroundColor: theme.colors.cyan.value,
  outline: {
    borderColor: theme.colors.cyan.value,
    color: theme.colors.cyan.value,
    backgroundColor: theme.colors.transparent.value,
  },
  disabled: {
    borderColor: theme.colors.cyan100.value,
    color: theme.colors.black300.value,
    backgroundColor: theme.colors.cyan100.value,
    outline: {
      borderColor: theme.colors.cyan100.value,
      color: theme.colors.cyan100.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  active: {
    borderColor: theme.colors.cyan700.value,
    color: theme.colors.cyan700.contrastColor,
    backgroundColor: theme.colors.cyan700.value,
  },
};
