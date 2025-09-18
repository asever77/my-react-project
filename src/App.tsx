// src/App.tsx

import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';

interface CardData {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]); //초기값 빈 배열
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect: 컴포넌트가 렌더링된 후 특정 작업을 수행하도록 하는 React 훅
  useEffect(() => {
    const fetchCards = () => {
      // 실제로는 여기에 axios나 fetch 등을 사용하여 API를 호출합니다.
      // fetch('https://api.example.com/cards')
      //   .then(response => response.json())
      //   .then(data => {
      //     setCardsData(data);
      //     setIsLoading(false);
      //   });

      setTimeout(() => {
        const sampleData = [
          { id: 1, title: '리액트의 상태 관리', content: 'useState 훅을 사용해 컴포넌트의 상태를 관리합니다.' },
          { id: 2, title: '데이터 가져오기', content: 'useEffect 훅을 사용해 컴포넌트가 렌더링된 후 데이터를 불러옵니다.' },
          { id: 3, title: '재사용 가능한 UI', content: '데이터 로직과 UI를 분리하여 컴포넌트의 재사용성을 높입니다.' },
        ];
        setCardsData(sampleData);
        setIsLoading(false);
      }, 1000);
    };

    fetchCards();
  }, []); // 2. 빈 배열은 컴포넌트가 처음 마운트될 때만 실행하라는 의미입니다. 이 패턴은 초기 데이터 로딩에 가장 많이 사용

  // 3. 로딩 상태에 따른 UI 처리
  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <p className='text-xl'>데이터를 불러오는 중...</p>
      </div>
    );
  }

  // 4. 데이터가 준비되면 CardList 컴포넌트에 props로 전달합니다.
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center py-10">블로그 글 목록</h1>
      <CardList cardsData={cardsData} />
    </div>
  );
}
 
export default App;