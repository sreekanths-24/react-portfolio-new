// Work.js
import React from 'react';
import Card from '../../components/Card';
import { Link, useLocation } from "react-router-dom";
function Work() {
  // Example data for the cards
  const location = useLocation();
  const cards = [
    {
      id: 1,
      forHomepage: 1,
      title: 'Web For Team',
      link: 'https://kbfc.netlify.app/',
      image: 'https://i.imgur.com/QiSukzs.mp4', // Updated Imgur video link
      description: 'Build this website in 24 hours and won 1st place for a website design competition.',
    },
    {
      id: 2,
      forHomepage: 1,
      title: 'My old Portfolio',
      link: 'https://iamsreekanths.netlify.app/',
      image: 'https://i.imgur.com/FbJ83Dp.mp4',
      description: 'My old portfolio website. Developed to showcase my skills and projects.',
    },
    {
      id: 3,
      forHomepage: 1,
      title: 'All In One Shoppe',
      link: 'https://allinoneshoppe.com/shop/',
      image: 'https://i.imgur.com/7kRheS1.mp4',
      description: 'An Ecommerce website for a small retailer. My first project with a client.',
    },
    {
      id: 4,
      forHomepage: 1,
      title: 'Saaya23 Website',
      link: 'https://saaya23.netlify.app/',
      image: 'https://i.imgur.com/XpSkQEa.mp4',
      description: 'A showcase website for my college\'s arts and cultural fest.',
    },
    {
      id: 5,
      forHomepage: 1,
      title: 'Athma23 Website',
      link: 'https://athma23.netlify.app/',
      image: 'https://i.imgur.com/hLA66e8.mp4',
      description: 'A showcase website for my college\'s technical fest.',
    },
    {
      id: 6,
      forHomepage: 0,
      title: 'Kalhara Concepts',
      link: 'https://kalharaconcepts.com/',
      image: 'https://i.imgur.com/ASXpw2r.mp4',
      description: 'Portfolio website for a construction company.',
    },
    {
      id: 7,
      forHomepage: 1,
      title: 'Envi 6 Techfest',
      link: 'https://sreekanths-24.github.io/envi6/',
      image: 'https://i.imgur.com/vQCTYXS.mp4',
      description: 'Won 2nd price for developing this website in 3 hours.',
    },
  ];

  return (
    <section className="py-20 px-4 lg:p-36 min-h-dvh bg-black">
      <h2 className="text-4xl leading-none lg:text-7xl font-bold text-gray-300 mt-5 mb-20">
        These are some of <br className="block md:hidden" />
        <span className="text-indigo-400">my Best Work...</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 lg:gap-x-12">
      {cards
  .filter(card => location.pathname === '/' ? card.forHomepage === 1 : true)
  .map((card, index) => (
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
