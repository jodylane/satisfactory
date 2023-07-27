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
  },
};
