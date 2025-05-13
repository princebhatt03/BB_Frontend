import React, { useEffect, useState } from 'react';
import g1 from '../../assets/g1.jpg';
import g2 from '../../assets/g2.jpg';
import g3 from '../../assets/g3.jpg';
import g4 from '../../assets/g4.jpg';

const slides = [
  {
    image: g1,
    title: 'रक्त की उपलब्धता देखें',
    subtitle: 'रक्त की उपलब्धता की जांच करें और दान करें।',
    buttonText: 'रक्तदान करें अभी',
  },
  {
    image: g2,
    title: 'कटनी रक्त दाता एवं नामांकन सोसायटी',
    subtitle: 'हमारे रक्त दाताओं की सराहना करें।',
    buttonText: 'रक्तदान करें अभी',
  },
  {
    image: g3,
    title: 'कटनी रक्त दाता एवं नामांकन सोसायटी',
    subtitle: 'हमारे रक्त दाताओं की सराहना करें।',
    buttonText: 'रक्तदान करें अभी',
  },
  {
    image: g4,
    title: 'कटनी रक्त दाता एवं नामांकन सोसायटी',
    subtitle: 'हमारे रक्त दाताओं की सराहना करें।',
    buttonText: 'रक्तदान करें अभी',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl mb-5">{slide.subtitle}</p>
            <button
              onClick={() => (window.location.href = slide.link)}
              className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
