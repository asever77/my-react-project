// src/stories/CardList.stories.jsx

import type { Meta, StoryObj } from '@storybook/react';
import CardList from '../components/CardList';

const meta: Meta<typeof CardList> = {
  title: 'Components/CardList',
  component: CardList,
  tags: ['autodocs'],
  argTypes: {
    // Storybook Controls에서 props를 직접 조작할 수 있도록 타입을 지정합니다.
    cardsData: { control: 'object' },
  }
};

export default meta;

type Story = StoryObj<typeof CardList>;

const sampleData = [
  { id: 1, title: '리액트 공부', content: 'Vite와 Storybook으로 프로젝트를 시작했어요.' },
  { id: 2, title: 'Tailwind CSS', content: '유틸리티 클래스로 빠르게 스타일링하고 있어요.' },
  { id: 3, title: 'TypeScript', content: '타입을 정의해서 안정적인 코드를 만들 수 있어요.' },
];

export const Default: Story = {
  // 스토리에 가짜 데이터를 props로 전달합니다.
  args: {
    cardsData: sampleData,
  }
}; // props를 전달하지 않으므로 빈 객체