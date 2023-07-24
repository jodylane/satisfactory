import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    large: {
      control: 'boolean',
    },
    outline: {
      control: 'boolean',
    },
    small: {
      control: 'boolean',
    },
  },
};

const staticProps = {
  onClick: () => {
    console.log('hey');
  },
  children: 'My Button',
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { ...staticProps };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { ...staticProps, theme: 'secondary' };

export const WarningButton = Template.bind({});
WarningButton.args = { ...staticProps, theme: 'warning' };

export const InfoButton = Template.bind({});
InfoButton.args = { ...staticProps, theme: 'info' };

export const SuccessButton = Template.bind({});
SuccessButton.args = { ...staticProps, theme: 'success' };

export const DangerButton = Template.bind({});
DangerButton.args = { ...staticProps, theme: 'danger' };
