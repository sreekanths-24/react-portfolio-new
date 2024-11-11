// Work.js
import React from 'react';
import Card from '../../components/Card';

function Work() {
  // Example data for the cards
  const cards = [
    {
      title: 'KBFC website',
      link: 'https://kbfc.netlify.app/',
      image: 'https://i.imgur.com/QiSukzs.mp4', // Updated Imgur video link
      description: 'I won first place for designing this website.',
    },
    {
      title: 'My old Portfolio Website',
      link: 'https://iamsreekanths.netlify.app/',
      image: 'https://i.imgur.com/FbJ83Dp.mp4',
      description: 'Ahh the good old days..',
    },
    {
      title: 'All In One Shoppe',
      link: 'https://allinoneshoppe.com/shop/',
      image: 'https://i.imgur.com/7kRheS1.mp4',
      description: 'An Ecommerce website for a small retailer.',
    },
    {
      title: 'Saaya23 Website',
      link: 'https://saaya23.netlify.app/',
      image: 'https://i.imgur.com/XpSkQEa.mp4',
      description: 'A website for my college\'s arts and cultural fest.',
    },
    {
      title: 'Athma23 Website',
      link: 'https://athma23.netlify.app/',
      image: 'https://i.imgur.com/hLA66e8.mp4',
      description: 'A website for my college\'s tech fest.',
    },
    {
      title: 'Kalhara Concepts PVT LTD',
      link: 'https://kalharaconcepts.com/',
      image: 'https://i.imgur.com/ASXpw2r.mp4',
      description: 'Portfolio website of a construction company.',
    },
  ];

  return (
    <section className="pt-36 pb-20 px-3 lg:p-36 min-h-dvh bg-black">
      <h2 className="text-5xl leading-none lg:text-7xl font-bold text-gray-300 mt-5 mb-20">
        Check out <br className="block md:hidden" />
        <span className="text-indigo-500">my Portfolio</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            link={card.link}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
