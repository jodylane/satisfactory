import Alert from '../index';
import theme from '../Alert.theme';

export default {
  title: 'Components/Alert/Secondary',
  component: Alert,
  argTypes: {
    children: {
      control: 'text',
    },
    theme: {
      options: Object.keys(theme),
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
};

const staticProps = {
  children:
    'This is my super awesome & super legitimate alert for alerting folks with. Some people could be jealous of such fine alerts.',
  theme: 'secondary',
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = { ...staticProps };
