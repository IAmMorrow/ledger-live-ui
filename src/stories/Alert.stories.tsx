import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Alert } from "../components/Alert";

export default {
  title: "UI/Alert",
  component: Alert,
} as Meta;

const Template: Story<Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label:
    "Very subtle and informative piece of text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu arcu a velit fermentum consequat sed et mi. Vivamus a cursus massa, nec mollis lorem. Nam non lectus rutrum, cursus ante nec, efficitur diam",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label:
    "Something that we need to show but you won't read. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu arcu a velit fermentum consequat sed et mi. Vivamus a cursus massa, nec mollis lorem. Nam non lectus rutrum, cursus ante nec, efficitur diam",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  label:
    "Hooray! You achieved something magnificent, congratulations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu arcu a velit fermentum consequat sed et mi. Vivamus a cursus massa, nec mollis lorem. Nam non lectus rutrum, cursus ante nec, efficitur diam",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  label:
    "Tread lightly, you might end up in a bad place if you're not careful. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu arcu a velit fermentum consequat sed et mi. Vivamus a cursus massa, nec mollis lorem. Nam non lectus rutrum, cursus ante nec, efficitur diam",
};

export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
  label:
    "I warned you! Now you done goofed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu arcu a velit fermentum consequat sed et mi. Vivamus a cursus massa, nec mollis lorem. Nam non lectus rutrum, cursus ante nec, efficitur diam",
};
