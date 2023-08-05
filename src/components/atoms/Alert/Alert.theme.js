import theme from '@lib/theme';

export default {
  primary: {
    borderColor: theme.colors.blue.value,
    color: theme.colors.blue.contrastColor,
    backgroundColor: theme.colors.blue.value,
    outline: {
      borderColor: theme.colors.blue200.value,
      color: theme.colors.blue200.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  secondary: {
    borderColor: theme.colors.white.value,
    color: theme.colors.white.contrastColor,
    backgroundColor: theme.colors.white.value,
    outline: {
      borderColor: theme.colors.white.value,
      color: theme.colors.white.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  warning: {
    borderColor: theme.colors.yellow.value,
    color: theme.colors.yellow.contrastColor,
    backgroundColor: theme.colors.yellow.value,
    outline: {
      borderColor: theme.colors.yellow.value,
      color: theme.colors.yellow.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  info: {
    borderColor: theme.colors.cyan.value,
    color: theme.colors.cyan.contrastColor,
    backgroundColor: theme.colors.cyan.value,
    outline: {
      borderColor: theme.colors.cyan.value,
      color: theme.colors.cyan.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  success: {
    borderColor: theme.colors.green.value,
    color: theme.colors.green.contrastColor,
    backgroundColor: theme.colors.green.value,
    outline: {
      borderColor: theme.colors.green.value,
      color: theme.colors.green.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
  danger: {
    borderColor: theme.colors.red.value,
    color: theme.colors.red.contrastColor,
    backgroundColor: theme.colors.red.value,
    outline: {
      borderColor: theme.colors.red.value,
      color: theme.colors.red.value,
      backgroundColor: theme.colors.transparent.value,
    },
  },
};
