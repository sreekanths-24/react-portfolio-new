// Work.js
import React from 'react';
import Card from '../../components/Card';

function Work() {
  // Example data for the cards
  const cards = [
    {
      title: 'Project 1',
      image: 'https://via.placeholder.com/400x300',
      description: 'A brief description of Project 1.',
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/400x300',
      description: 'A brief description of Project 2.',
    },
    {
      title: 'Project 3',
      image: 'https://via.placeholder.com/400x300',
      description: 'A brief description of Project 3.',
    },
    {
      title: 'Project 4',
      image: 'https://via.placeholder.com/400x300',
      description: 'A brief description of Project 4.',
    },
    {
      title: 'Project 5',
      image: 'https://via.placeholder.com/400x300',
      description: 'A brief description of Project 5.',
    },
    {
      title: 'Project 6',
      image: 'https://via.placeholder.com/400x300',
      description: 'A brief description of Project 6.',
    },
  ];

  return (
      <section className="py-12 px-3 lg:px-36 min-h-dvh bg-black">
          <h2 className="text-5xl leading-tight lg:text-7xl font-bold text-gray-300 mt-5 lg:mt-40 mb-20">Check out <br className='block md:hidden' /><span className='text-indigo-500'>my Portfolio</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} description={card.description} />
        ))}
      </div>
    </section>
  );
}

export default Work;
