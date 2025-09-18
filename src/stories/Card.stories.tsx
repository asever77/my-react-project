// src/stories/Card.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card', 
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Hello, React!',
    content: '이것은  Storybook으로 만든 첫 번째 카드 컴포넌트입니다.',
  },
};