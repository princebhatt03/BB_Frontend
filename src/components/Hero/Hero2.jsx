import React from 'react';
import {
  FaSearch,
  FaHospital,
  FaUserPlus,
  FaCalendarAlt,
  FaClipboardList,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaSearch size={24} />,
    title: 'Blood Availability Search',
    color: 'bg-[#BF222B]',
  },
  {
    icon: <FaHospital size={24} />,
    title: 'Blood Bank Directory',
    color: 'bg-[#E63946]',
  },
  {
    icon: <FaUserPlus size={24} />,
    title: 'Donor Register',
    color: 'bg-[#F77F00]',
  },
  {
    icon: <FaCalendarAlt size={24} />,
    title: 'Blood Donation Camps',
    color: 'bg-[#6D597A]',
  },
  {
    icon: <FaClipboardList size={24} />,
    title: 'Register Voluntary Blood Camp',
    color: 'bg-[#2A9D8F]',
  },
];

const Hero2 = () => {
  return (
    <div
      className="relative w-full min-h-[90vh] flex items-center justify-center px-4 py-12 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('../4.jpg')`,
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Be a Hero, Donate Blood, Save Lives
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Your blood can give someone another chance at life.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ${feature.color}`}>
              <div className="mb-3">{feature.icon}</div>
              <h3 className="font-semibold text-sm sm:text-base">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero2;
