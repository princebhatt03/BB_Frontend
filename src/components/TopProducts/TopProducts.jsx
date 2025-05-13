import React from 'react';
import Img1 from '../../assets/b1.png';
import Img2 from '../../assets/b2.png';
import Img3 from '../../assets/b3.png';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'Blood Group O+',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Img2,
    title: 'Blood Group O-',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Img3,
    title: 'Blood Group A+',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const TopProducts = () => {
  const navigate = useNavigate();

  const handleOrderPopup = () => {
    navigate('/patient');
  };

  return <></>;
};

export default TopProducts;
