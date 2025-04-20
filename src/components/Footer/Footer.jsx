import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../assets/website/footer-pattern.jpg';
import { FaGithub, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const FooterLinks = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Terms & Conditions',
    link: '/terms',
  },
];

const FooterLinks2 = [
  {
    title: 'Admin Register',
    link: '/adminRegister',
  },
  {
    title: 'Admin Login',
    link: '/adminLogin',
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div
      style={BannerImg}
      className="text-white">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Logo
            </h1>
            <p>Give the Gift of Life, Donate Blood Today!</p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map(link => (
                    <li key={link.title}>
                      <button
                        onClick={() => navigate(link.link)}
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 bg-transparent border-none p-0 text-left">
                        {link.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Bank Login
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks2.map(link => (
                    <li key={link.title}>
                      <button
                        onClick={() => navigate(link.link)}
                        className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 bg-transparent border-none p-0 text-left">
                        {link.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/prince20.02/">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="https://github.com/princebhatt03">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://www.linkedin.com/in/prince-bhatt-0958a725a/">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6 w-full">
                <div className="flex w-full items-center gap-5 mt-3">
                  <FaUser />
                  <p>
                    Designed By:{' '}
                    <a href="https://www.linkedin.com/in/prince-bhatt-0958a725a/">
                      Prince Bhatt
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
