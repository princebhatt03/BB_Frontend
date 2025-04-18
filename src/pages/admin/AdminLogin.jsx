import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminUsername: '',
    password: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Add login logic here
    console.log('Admin Login Data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9E4BC] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#BF222B] mb-6">
          Admin Login
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          <div>
            <label
              htmlFor="adminUsername"
              className="block text-sm font-medium text-gray-700">
              Admin Username
            </label>
            <input
              type="text"
              id="adminUsername"
              name="adminUsername"
              value={formData.adminUsername}
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
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full mt-2 text-[#BF222B] border border-[#BF222B] py-2 rounded-lg hover:bg-[#BF222B] hover:text-white transition">
            Back to Home
          </button>

          <p className="text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <a
              href="/adminRegister"
              className="text-[#BF222B] font-medium hover:underline hover:text-[#8e1a21] transition duration-300">
              Register as Admin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
