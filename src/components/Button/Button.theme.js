import theme from '@lib/theme';

export default {
  primary: {
    borderColor: theme.colors.blue.value,
    color: theme.colors.blue.contrastColor,
    backgroundColor: theme.colors.blue.value,
    disabled: {
      borderColor: theme.colors.blueLight.value,
      color: theme.colors.blueLight.contrastColor,
      backgroundColor: theme.colors.blueLight.value,
    },
    active: {
      borderColor: theme.colors.blueDark.value,
      color: theme.colors.blueDark.contrastColor,
      backgroundColor: theme.colors.blueDark.value,
    },
  },
  secondary: {
    borderColor: theme.colors.white.value,
    color: theme.colors.white.contrastColor,
    backgroundColor: theme.colors.white.value,
    disabled: {
      borderColor: theme.colors.blackLight.value,
      color: theme.colors.blackLight.contrastColor,
      backgroundColor: theme.colors.blackLight.value,
    },
    active: {
      borderColor: theme.colors.whiteDark.value,
      color: theme.colors.whiteDark.contrastColor,
      backgroundColor: theme.colors.whiteDark.value,
    },
  },
  warning: {
    borderColor: theme.colors.yellow.value,
    color: theme.colors.yellow.contrastColor,
    backgroundColor: theme.colors.yellow.value,
    disabled: {
      borderColor: theme.colors.yellowLight.value,
      color: theme.colors.yellowLight.contrastColor,
      backgroundColor: theme.colors.yellowLight.value,
    },
    active: {
      borderColor: theme.colors.yellowDark.value,
      color: theme.colors.yellowDark.contrastColor,
      backgroundColor: theme.colors.yellowDark.value,
    },
  },
  info: {
    borderColor: theme.colors.cyan.value,
    color: theme.colors.cyan.contrastColor,
    backgroundColor: theme.colors.cyan.value,
    disabled: {
      borderColor: theme.colors.cyanLight.value,
      color: theme.colors.cyanLight.contrastColor,
      backgroundColor: theme.colors.cyanLight.value,
    },
    active: {
      borderColor: theme.colors.cyanDark.value,
      color: theme.colors.cyanDark.contrastColor,
      backgroundColor: theme.colors.cyanDark.value,
    },
  },
  success: {
    borderColor: theme.colors.green.value,
    color: theme.colors.green.contrastColor,
    backgroundColor: theme.colors.green.value,
    disabled: {
      borderColor: theme.colors.greenLight.value,
      color: theme.colors.greenLight.contrastColor,
      backgroundColor: theme.colors.greenLight.value,
    },
    active: {
      borderColor: theme.colors.greenDark.value,
      color: theme.colors.greenDark.contrastColor,
      backgroundColor: theme.colors.greenDark.value,
    },
  },
  danger: {
    borderColor: theme.colors.red.value,
    color: theme.colors.red.contrastColor,
    backgroundColor: theme.colors.red.value,
    disabled: {
      borderColor: theme.colors.redLight.value,
      color: theme.colors.redLight.contrastColor,
      backgroundColor: theme.colors.redLight.value,
    },
    active: {
      borderColor: theme.colors.redDark.value,
      color: theme.colors.redDark.contrastColor,
      backgroundColor: theme.colors.redDark.value,
    },
  },
};
