import Alert, { fixtures } from '../index';
import theme from '../Alert.theme';
import { dynamicValueDescription } from '@utils/storybookUtils';

export default {
  title: 'Components/Alert/Danger',
  component: Alert,
  argTypes: {
    children: {
      control: 'text',
    },
    theme: {
      options: Object.keys(theme),
      control: { type: 'select' },
      description: dynamicValueDescription(
        'Determines the visual output of the component.',
        Object.keys(theme)
      ),
    },
  },
};

const Template = (args) => {
  return <Alert {...args} />;
};

const staticProps = { ...fixtures, theme: 'danger' };

export const Default = Template.bind({});
Default.args = { ...staticProps };

export const WithoutTimeout = Template.bind({});
WithoutTimeout.args = { ...staticProps, expire: false };
