// src/stories/Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';
import { fn } from 'storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    type: { 
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: { control: 'boolean'},
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Button>;

// 4. Default 스토리
export const Primary: Story = {
  args: {
    label: '기본 버튼',
    onClick: () => {},
    type: 'primary',
    disabled: false,
  },
};

// 5. Disabled 상태 스토리
export const Disabled: Story = {
  args: {
    label: '비활성화 버튼',
    onClick: () => {},
    type: 'primary',
    disabled: true,
  },
};

// 6. 다른 타입의 버튼 스토리 (비활성화 상태 포함)
export const Secondary: Story = {
  args: {
    label: '보조 버튼',
    onClick: () => {},
    type: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    label: '경고 버튼',
    onClick: () => {},
    type: 'danger',
  },
};