import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Donar = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    bloodGroup: '',
    agreeTerms: false,
    donateBlood: false,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/userRegister`,
        formData
      );

      setMessage(response.data.message);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        bloodGroup: '',
        agreeTerms: false,
        donateBlood: false,
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9E4BC] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#BF222B] mb-6">
          Register as Donor
        </h2>
        {message && (
          <p className="bg-green-500 text-white p-2 rounded mb-3 text-center">
            {message}
          </p>
        )}
        {error && (
          <p className="bg-red-500 text-white p-2 rounded mb-3 text-center">
            {error}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="bloodGroup"
              className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF222B]">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="h-4 w-4 text-[#BF222B] focus:ring-[#BF222B] border-gray-300 rounded"
              required
            />
            <label
              htmlFor="agreeTerms"
              className="text-sm text-gray-700">
              I agree to the Terms and Conditions
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="donateBlood"
              name="donateBlood"
              checked={formData.donateBlood}
              onChange={handleChange}
              className="h-4 w-4 text-[#BF222B] focus:ring-[#BF222B] border-gray-300 rounded"
              required
            />
            <label
              htmlFor="donateBlood"
              className="text-sm text-gray-700">
              I am willing to donate blood
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#BF222B] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#a41d26] transition duration-300">
            Register as Donor
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full mt-2 text-[#BF222B] border border-[#BF222B] py-2 rounded-lg hover:bg-[#BF222B] hover:text-white transition">
            Back to Home
          </button>

          <p className="text-sm text-center text-gray-700">
            Require Blood?{' '}
            <a
              href="/patient"
              className="text-[#BF222B] font-medium hover:underline hover:text-[#8e1a21] transition duration-300">
              Register Patient
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Donar;
