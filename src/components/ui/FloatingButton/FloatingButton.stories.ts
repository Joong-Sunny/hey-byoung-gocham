import type { Meta, StoryObj } from '@storybook/react';

import FloatingButton from '@/components/ui/FloatingButton/FloatingButton';

const meta = {
  title: 'UI/Buttons/FloatingButton',
  component: FloatingButton,
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'button',
    onClick: () => console.log('clicked!'),
  },
};
