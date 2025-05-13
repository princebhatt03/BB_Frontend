import React from 'react';
import Img1 from '../../assets/don/g1.jpg';
import Img2 from '../../assets/don/g2.jpg';
import Img3 from '../../assets/don/g3.jpg';
import Img4 from '../../assets/don/g4.jpg';
import Img5 from '../../assets/don/g5.jpg';
import Img6 from '../../assets/don/g6.jpg';
import Img7 from '../../assets/don/g7.jpg';
import Img8 from '../../assets/don/g8.jpg';
import { FaStar } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: 'रक्तदान',
    aosDelay: '0',
  },
  {
    id: 2,
    img: Img2,
    title: 'चैंप्स देखें',
    aosDelay: '200',
  },
  {
    id: 3,
    img: Img3,
    title: 'रक्त उपलब्धता देखें',
    aosDelay: '400',
  },
  {
    id: 4,
    img: Img4,
    title: 'मरीज़',
    aosDelay: '600',
  },
  {
    id: 5,
    img: Img5,
    title: 'दान',
    aosDelay: '800',
  },
  {
    id: 6,
    img: Img6,
    title: 'जीवन रक्षक',
    aosDelay: '1000',
  },
  {
    id: 7,
    img: Img7,
    title: 'साहसिक दाता',
    aosDelay: '1200',
  },
  {
    id: 8,
    img: Img8,
    title: 'रक्तदाता सम्मान',
    aosDelay: '1400',
  },
];

const Products = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/donar');
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary">
            हमारे योगदान और आशा के क्षणों का अन्वेषण करें।
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold">
            हमारा गौरवशाली दाता
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400">
            रक्त दान एक महान कार्य है जो जीवन को बचाने में मदद करता है। यह न
            केवल दाता के लिए बल्कि प्राप्तकर्ता के लिए भी महत्वपूर्ण है। रक्त
            दान से कई लोगों की जान बचाई जा सकती है और यह समाज में एक सकारात्मक
            प्रभाव डालता है।
          </p>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
          {ProductsData.map(data => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3 text-center">
              <img
                src={data.img}
                alt={data.title}
                className="h-[280px] w-[200px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>5.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={handleRegisterClick}
            className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:bg-red-600 transition-all duration-300">
            डोनर के रूप में रजिस्टर करें
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
