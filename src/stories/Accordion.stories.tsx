// src/components/ui/accordion/accordion.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { AccordionDemo } from '../demo/AccordionDemo'; // 컴포넌트 경로에 맞게 수정

// 컴포넌트 메타데이터 정의
const meta: Meta<typeof AccordionDemo> = {
  title: 'ui/Accordion', // 스토리북 내에서 컴포넌트가 위치할 경로
  component: AccordionDemo,
  tags: ['autodocs'],
};

export default meta;

// StoryObj 타입 정의
type Story = StoryObj<typeof AccordionDemo>;

// 기본 스토리
export const Default: Story = {
  args: {},
};