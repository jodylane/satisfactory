// import Component from '../index';
// import theme from '../Component.theme';
// import fixtures from '../fixtures';
// import { dynamicValueDescription } from '@utils/storybookUtils';

// export default {
//   title: 'Components/NewComponent',
//   component: Component,
//   argTypes: {
//     propName: {
//       control: 'text',
//     },
//     theme: {
//       options: Object.keys(theme),
//       control: { type: 'select' }, // Automatically inferred when 'options' is defined
//       description: dynamicValueDescription(
//         'Determines the visual output of the component.',
//         Object.keys(theme)
//       ),
//     },
//   },
// };

// const Template = (args) => {
//   return <Alert {...args} />;
// };

// export const Default = Template.bind({});
// Default.args = { ...fixtures };

// export const WithoutTimeout = Template.bind({});
// WithoutTimeout.args = { ...fixtures, expire: false };
