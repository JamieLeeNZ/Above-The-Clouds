// AttractionPage.jsx
import React, { useEffect } from 'react';
import AttractionCard from './AttractionCard';

const attractions = [
  {
    attraction: 'Tokyo Tower',
    location: 'Minato, Tokyo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tokyo_Tower_Afterglow.JPG/1549px-Tokyo_Tower_Afterglow.JPG?20150702033718',
    description: `Tokyo Tower, standing at 333 meters in central Tokyo, is the world's tallest, self-supported steel tower, modeled after the Eiffel Tower. A symbol of post-war resurgence, it held the title of Japan's tallest structure until 2012. Its main deck at 150 meters provides captivating city views of the city. It also features a souvenir shop, and a cafe.`,
  },
  {
    attraction: 'Yokohama Chinatown',
    location: 'Naka, Yokohama',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Zenrin-mon_Gate_of_Yokohama_Chinatown_at_night%2C_Jun_2015.jpg',
    description: `A taste of China in Japan, Yokohama Chinatown is Japan's largest Chinatown. Established back in 1859 with the arrival of Chinese merchants, the streets of Chinatown today are home to a plethora of vibrant Chinese stores and restaurants. Every Chinese New Year in February, Yokohama Chinatown comes alive, featuring captivating performances such as lion and dragon dances.`,
  },
  {
    attraction: 'Great Buddha (Daibutsu)',
    location: 'Kamakura, Kanagawa',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Kamakura_Daibutsu_20191214.jpg',
    description: `The Kamakura Daibutsu, or Great Buddha of Kamakura, is an 11.4-meter bronze statue of Amida Buddha at Kotokuin Temple. It ranks as Japan's second-tallest bronze Buddha, overshadowed only by Nara's Todaiji Temple. The temple surrounding it was destryoed in a tsunami in 1492, and since has been exposed to oxidise in the open air.`,
  },
  {
    attraction: 'teamLab Planets',
    location: 'Koto, Tokyo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Photos_at_teamlab_planets_tokyo.jpg/1600px-Photos_at_teamlab_planets_tokyo.jpg?20200721073511',
    description: `An Instagrammer's dream - teamLab Planets is an immersive, sensory experience that blends digital art with nature's beauty. This interactive museum features four expansive artwork spaces and two enchanting gardens where visitors walk through water and unite with flowers.`,
  },
  // Add more attractions as needed
];

const AttractionPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add('opacity-100', 'translate-y-0');
          } else {
            item.target.classList.remove('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.5 }
    );

    const attractionElements = document.querySelectorAll('.attraction-card');
    attractionElements.forEach((attraction, index) => {
      observer.observe(attraction);
      attraction.style.transition = `opacity 1s ease, transform 1s ease ${index * 0.4}s`;
    });

    return () => {
      attractionElements.forEach((attraction) => {
        observer.unobserve(attraction);
      });
    };
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex items-center justify-center">
        <div className="w-screen mb-40">
          {attractions.map((attraction, index) => (
            <AttractionCard
              key={index}
              attraction={attraction.attraction}
              location={attraction.location}
              image={attraction.image}
              description={attraction.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttractionPage;
