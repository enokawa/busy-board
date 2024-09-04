import type { Meta, StoryObj } from "@storybook/react";

import Checkboxes from "./Checkboxes";

const meta = {
  component: Checkboxes,
} satisfies Meta<typeof Checkboxes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: 8,
    checkboxes: 16,
  },
};
