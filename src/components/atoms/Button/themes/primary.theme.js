import theme from '@lib/theme';

export default {
  borderColor: theme.colors.blue.value,
  color: theme.colors.blue.contrastColor,
  backgroundColor: theme.colors.blue.value,
  outline: {
    borderColor: theme.colors.blue200.value,
    color: theme.colors.blue200.value,
    backgroundColor: theme.colors.transparent.value,
  },
  disabled: {
    borderColor: theme.colors.blue400.value,
    color: theme.colors.black300.value,
    backgroundColor: theme.colors.blue400.value,
    outline: {
      borderColor: theme.colors.blue400.value,
      color: theme.colors.blue400.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  active: {
    borderColor: theme.colors.blue600.value,
    color: theme.colors.blue600.contrastColor,
    backgroundColor: theme.colors.blue600.value,
  },
};
