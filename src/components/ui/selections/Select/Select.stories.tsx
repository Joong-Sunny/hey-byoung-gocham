import type { Meta, StoryObj } from '@storybook/react';

import Select from '@/components/ui/selections/Select';

const meta: Meta<typeof Select> = {
  title: 'UI/Selections/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const OPTIONS = [
  {
    value: 0,
    label: '옵션 1',
  },
  {
    value: 1,
    label: '옵션 2',
  },
  {
    value: 2,
    label: '옵션 3',
  },
  {
    value: 3,
    label: '옵션 4',
  },
];

export const Default: Story = {
  args: {
    id: 'select',
    label: '라벨',
    options: OPTIONS,
    placeholder: '플레이스 홀더',
  },
};

export const Error: Story = {
  args: {
    id: 'select',
    label: '라벨',
    options: OPTIONS,
    placeholder: '플레이스 홀더',
    errorMessage: '에러 메시지',
  },
};

export const PostSelect: Story = {
  args: {
    id: 'select',
    label: '라벨',
    options: OPTIONS,
    placeholder: '플레이스 홀더',
    labelClassName: 'text-subheading',
    wrapperClassName: 'w-[15.7rem]',
  },
};
