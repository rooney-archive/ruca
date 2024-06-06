import type { Meta, StoryObj } from "@storybook/react";
import "@ruca/react-components-layout/styles.css";

import { Block as _Block } from "@ruca/react-components-layout";

const meta: Meta<typeof _Block> = {
  title: "React Components/Layout/Block",
  component: _Block,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof _Block>;

export const BlockStory: Story = {};
