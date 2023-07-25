import Button from '../index';
import theme from '../Button.theme';

export default {
  title: 'Components/Button/Danger',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
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
  onClick: () => {
    console.log('hey');
  },
  children: 'My Button',
  disabled: false,
  outline: false,
  theme: 'danger',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { ...staticProps };

export const Disabled = Template.bind({});
Disabled.args = { ...staticProps, disabled: true };

export const Outline = Template.bind({});
Outline.args = { ...staticProps, outline: true };

export const DisabledOutline = Template.bind({});
DisabledOutline.args = { ...staticProps, disabled: true, outline: true };
