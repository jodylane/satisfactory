/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = {
      fallback: {
        crypto: false,
        constants: false,
        stream: false,
        fs: false,
      },
      alias: {
        path: require.resolve('path-browserify'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@layouts': path.resolve(__dirname, '../src/layouts'),
        '@lib': path.resolve(__dirname, '../src/lib'),
        '@pages': path.resolve(__dirname, '../src/pages'),
        '@utils': path.resolve(__dirname, '../src/utils'),
        '@screens': path.resolve(__dirname, '../src/screens'),
      },
    };
    return config;
  },
  docs: {
    autodocs: true,
  },
};
export default config;
