import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "../components/Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  label: "Secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  disabled: true,
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  size: "small",
  label: "Link",
};

export const Alert = Template.bind({});
Alert.args = {
  type: "alert",
  label: "Alert",
};

export const AlertSecondary = Template.bind({});
AlertSecondary.args = {
  type: "alert-secondary",
  label: "Alert Secondary",
};
