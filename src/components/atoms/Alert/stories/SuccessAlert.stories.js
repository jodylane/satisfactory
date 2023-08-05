import Alert from '../index';
import theme from '../Alert.theme';

export default {
  title: 'Components/Alert/Success',
  component: Alert,
  argTypes: {
    children: {
      control: 'text',
    },
    outline: {
      control: 'boolean',
    },
    theme: {
      options: Object.keys(theme),
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
};

const staticProps = {
  children: 'My Alert',
  outline: false,
  theme: 'success',
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = { ...staticProps };

export const Outline = Template.bind({});
Outline.args = { ...staticProps, outline: true };
Outline.story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
