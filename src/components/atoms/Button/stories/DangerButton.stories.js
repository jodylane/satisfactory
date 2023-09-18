import Button, { fixtures } from '../index';
import themes from '../themes';
import { dynamicValueDescription } from '@utils/storybookUtils';

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
      options: Object.keys(themes),
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
      description: dynamicValueDescription(
        'Determines the visual output of the component.',
        Object.keys(themes)
      ),
    },
  },
};

const staticProps = {
  ...fixtures,
  theme: 'danger',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { ...staticProps };

export const Disabled = Template.bind({});
Disabled.args = { ...staticProps, disabled: true };

export const FullWidth = Template.bind({});
FullWidth.args = { ...staticProps, fullWidth: true };

export const FullWidthDisabled = Template.bind({});
FullWidthDisabled.args = { ...staticProps, fullWidth: true, disabled: true };

export const Outline = Template.bind({});
Outline.args = { ...staticProps, outline: true };
Outline.story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const FullWidthOutline = Template.bind({});
FullWidthOutline.args = { ...staticProps, fullWidth: true, outline: true };
FullWidthOutline.story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DisabledOutline = Template.bind({});
DisabledOutline.args = { ...staticProps, disabled: true, outline: true };
DisabledOutline.story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const FullwidthDisabledOutline = Template.bind({});
FullwidthDisabledOutline.args = { ...staticProps, disabled: true, outline: true, fullWidth: true };
FullwidthDisabledOutline.story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
