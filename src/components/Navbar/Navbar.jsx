import React, { useState, useEffect, useRef } from 'react';
import { FaUserCircle, FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const Menu = [
    { id: 1, name: 'About US', link: '/about' },
    { id: 2, name: 'Register Patient', link: '/patient' },
    { id: 3, name: 'Register Donar', link: '/donar' },
  ];

  const DropdownLinks = [
    { id: 1, name: 'Register as Admin', link: '/adminRegister' },
    { id: 2, name: 'Login as Admin', link: '/adminLogin' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Hamburger */}
            {/* <div className="sm:hidden block">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-2xl text-white">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div> */}
            <button
              onClick={() => navigate('/')}
              className="font-extrabold text-left text-lg flex gap-2">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-auto object-contain"
              />
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/adminLogin')}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
              <span className="hidden transition-all duration-200">Login</span>
              <FaUserCircle className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      {/* <div
        data-aos="zoom-in"
        className="justify-center hidden sm:flex">
        <ul className="flex items-center gap-4">
          {Menu.map(data => (
            <li key={data.id}>
              <button
                onClick={() => navigate(data.link)}
                className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </button>
            </li>
          ))}
          <li
            className="relative cursor-pointer group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className="flex items-center gap-[2px] py-2">
              Bank Login
              <FaCaretDown
                className={`transition-all duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute z-[9999] w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map(data => (
                    <li key={data.id}>
                      <button
                        onClick={() => navigate(data.link)}
                        className="inline-block w-full rounded-md p-2 text-left hover:bg-primary/20">
                        {data.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div> */}

      {/* Mobile Nav */}
      {/* {isMobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {Menu.map(data => (
              <li key={data.id}>
                <button
                  onClick={() => {
                    navigate(data.link);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 border-b border-gray-300 dark:border-gray-700 hover:text-primary duration-200">
                  {data.name}
                </button>
              </li>
            ))}
            <li className="relative group">
              <button
                className="flex items-center justify-between w-full py-2"
                onClick={() => setIsDropdownOpen(prev => !prev)}>
                <span>Bank Login</span>
                <FaCaretDown
                  className={`transition-all ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 mt-1 flex flex-col gap-1">
                  {DropdownLinks.map(data => (
                    <li key={data.id}>
                      <button
                        onClick={() => {
                          navigate(data.link);
                          setIsMobileMenuOpen(false);
                          setIsDropdownOpen(false);
                        }}
                        className="block py-1 text-left w-full text-sm hover:text-primary">
                        {data.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
