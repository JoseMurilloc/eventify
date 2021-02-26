import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
} as Meta;

type TypedStory = Story<ButtonProps>;

const Template: TypedStory = (args) => <Button {...args} />;

export const Default: TypedStory = Template.bind({});
Default.args = {
  title: 'Yo',
};
