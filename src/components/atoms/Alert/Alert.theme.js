import theme from '@lib/theme';

export default {
  primary: {
    borderColor: theme.colors.blue500.value,
    color: theme.colors.blue500.value,
    backgroundColor: theme.colors.blue400.value,
  },
  secondary: {
    borderColor: theme.colors.white.value,
    color: theme.colors.white.contrastColor,
    backgroundColor: theme.colors.white.value,
  },
  warning: {
    borderColor: theme.colors.yellow700.value,
    color: theme.colors.yellow700.value,
    backgroundColor: theme.colors.yellow400.value,
  },
  info: {
    borderColor: theme.colors.cyan800.value,
    color: theme.colors.cyan800.value,
    backgroundColor: theme.colors.cyan200.value,
  },
  success: {
    borderColor: theme.colors.green500.value,
    color: theme.colors.green500.value,
    backgroundColor: theme.colors.green400.value,
  },
  danger: {
    borderColor: theme.colors.red600.value,
    color: theme.colors.red600.value,
    backgroundColor: theme.colors.red400.value,
  },
};
