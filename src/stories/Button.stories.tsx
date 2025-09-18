// src/stories/Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import Button from '../components/Button';
import { Icon } from '../components/Icons'; // 아이콘 컴포넌트를 가져옵니다.

// 스토리의 메타데이터를 정의합니다.
// 이 객체는 Storybook UI에 컴포넌트를 어떻게 보여줄지 설정합니다.
const meta = {
  title: 'Components/Button', // 스토리북의 네비게이션 경로
  component: Button,          // 스토리의 주 컴포넌트
  tags: ['autodocs'],         // 스토리북 문서 자동 생성
  parameters: {
    layout: 'centered',       // 컴포넌트를 캔버스 중앙에 배치
  },
  args: {
    // 공통 args: 모든 스토리에 기본적으로 적용됩니다.
    onClick: fn(),             // 클릭 이벤트를 테스트하기 위한 mock 함수
    label: '버튼',             // 모든 버튼의 기본 라벨
  },
  argTypes: {
    // 각 prop에 대한 Storybook 컨트롤을 설정합니다.
    color: {
      options: ['primary', 'secondary', 'danger'], // 미리 정의된 옵션
      control: {
        type: 'select',
      },
    }, 
    size: {
      options: ['small', 'medium', 'large'], // 미리 정의된 옵션
      control: {
        type: 'select',
      },
    },
    round: {
      options: ['rounded', 'square', 'circular'], // 미리 정의된 옵션
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['filled', 'outlined', 'text'], // 미리 정의된 옵션
      control: {
        type: 'select',
      },
    },
    shadow: {
      options: ['none', 'small', 'medium', 'large'], // 미리 정의된 옵션
      control: {
        type: 'select',
      },
    },
    icon: {
      options: ['none', 'before', 'after', 'only'], // 미리 정의된 옵션
      control: {
        type: 'select',
      },
    },
    iconName: {
      options: Object.keys(Icon), // `Icon` 객체의 키를 옵션으로 사용
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

// StoryObj 타입을 사용하여 개별 스토리를 만듭니다.
type Story = StoryObj<typeof Button>;

// 1. 기본 스타일의 버튼
export const Default: Story = {};

// 2. 다양한 색상의 버튼
export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...args} label="Primary" color="primary" />
      <Button {...args} label="Secondary" color="secondary" />
      <Button {...args} label="Danger" color="danger" />
    </div>
  ),
};

// 3. 다양한 크기의 버튼
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button {...args} label="Small" size="small" />
      <Button {...args} label="Medium" size="medium" />
      <Button {...args} label="Large" size="large" />
    </div>
  ),
};

// 4. 아이콘이 있는 버튼
export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button {...args} label="Icon Before" icon="before" iconName="SearchIcon" />
      <Button {...args} label="Icon After" icon="after" iconName="SearchIcon" />
      <Button {...args} icon="only" iconName="SearchIcon" />
    </div>
  ),
};

// 5. 버튼의 형태 (모서리)
export const Roundness: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button {...args} label="Rounded" round="rounded" />
      <Button {...args} label="Square" round="square" />
      <Button {...args} label="Circular" round="circular" />
    </div>
  ),
};

// 6. 비활성화된 버튼
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};