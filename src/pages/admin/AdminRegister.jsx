import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  // Handling input change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/adminRegister`,
        formData
      );

      if (response.status === 201) {
        setSuccess('Admin registered successfully!');
        setTimeout(() => navigate('/adminHome'), 1000);
      }
    } catch (err) {
      setError(
        err.response?.data?.error || 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9E4BC] p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center text-[#BF222B] mb-6">
          Admin Registration
        </h2>
        {error && (
          <p className="bg-red-500 text-white p-2 rounded mb-3 text-center">
            {error}
          </p>
        )}
        {success && (
          <p className="bg-green-500 text-white p-2 rounded mb-3 text-center">
            {success}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-4">
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
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700">
              Unique Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#BF222B] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#a41d26] transition duration-300">
            Register as Admin
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full mt-2 text-[#BF222B] border border-[#BF222B] py-2 rounded-lg hover:bg-[#BF222B] hover:text-white transition">
            Back to Home
          </button>
          <p className="text-sm text-center text-gray-700">
            Already have a Admin Account?{' '}
            <a
              onClick={() => navigate('/adminLogin')}
              className="text-[#BF222B] cursor-pointer font-medium hover:underline hover:text-[#8e1a21] transition duration-300">
              Login as a Admin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
