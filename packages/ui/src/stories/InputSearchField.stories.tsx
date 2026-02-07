import type { Meta, StoryObj } from "@storybook/react";
import { InputSearchField } from "../components/InputSearchField";

const meta: Meta<typeof InputSearchField> = {
  title: "UI/InputSearchField",
  component: InputSearchField,
  tags: ["autodocs"],
  args: {
    placeholder: "Search...",
  },
};

export default meta;

type Story = StoryObj<typeof InputSearchField>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Sandy",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled search...",
    disabled: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Search products...",
  },
};
