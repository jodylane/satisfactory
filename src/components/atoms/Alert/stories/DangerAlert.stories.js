import Alert from '../index';
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
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
      description: dynamicValueDescription(
        'Determines the visual output of the component.',
        Object.keys(theme)
      ),
    },
  },
};

const staticProps = {
  children:
    'This is my super awesome & super legitimate alert for alerting folks with. Some people could be jealous of such fine alerts.',
  theme: 'danger',
};

const Template = (args) => {
  return <Alert {...args} />;
};

export const Default = Template.bind({});
Default.args = { ...staticProps };

export const WithoutTimeout = Template.bind({});
WithoutTimeout.args = { ...staticProps, expire: false };
