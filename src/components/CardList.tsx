// src/components/CardList.jsx

import React from 'react';
import Card from './Card';

interface CardData {
  id: number;
  title: string;
  content: string;
}

interface CardListProps {
  cardsData: CardData[];
}

const CardList = ({ cardsData }: CardListProps) => {
  return (
    <div className='flex flex-wrap gap-6 p-10 justify-center'>
      {cardsData.map((card) => (
        <Card key={card.id} title={card.title} content={card.content} />
      ))}
    </div>
  )
}

export default CardList;
