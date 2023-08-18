import type { Meta, StoryObj } from '@storybook/react';
import { DockedButton } from './DockedButton';

const meta = {
  title: 'UI/Buttons/DockedButton',
  component: DockedButton,
  tags: ['autodocs'],
} satisfies Meta<typeof DockedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'button',
  },
};

export const Line: Story = {
  args: {
    variant: 'line',
    children: 'button',
  },
};
