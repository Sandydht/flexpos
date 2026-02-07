import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button",
    variant: "primary",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger Button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    label: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    label: "Submit",
    loading: true,
  },
};

export const Clickable: Story = {
  args: {
    variant: "primary",
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};
