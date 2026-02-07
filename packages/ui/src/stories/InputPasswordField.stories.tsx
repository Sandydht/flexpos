import type { Meta, StoryObj } from "@storybook/react";
import { InputPasswordField } from "../components/InputPasswordField";

const meta: Meta<typeof InputPasswordField> = {
  title: "UI/InputPasswordField",
  component: InputPasswordField,
  tags: ["autodocs"],
  args: {
    id: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "320px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof InputPasswordField>;

export const Default: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
  },
};

export const Required: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    error: "Password is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    label: "Password",
    defaultValue: "secret123",
  },
};
