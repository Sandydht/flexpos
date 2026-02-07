import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "../components/InputField";

const meta: Meta<typeof InputField> = {
  title: "UI/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    id: "input",
    label: "Input Label",
    placeholder: "Type something...",
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your name",
  },
};

export const Required: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: "Email is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Cannot type here",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Prefilled Input",
    defaultValue: "Sandy Dwi",
  },
};
