import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State for Flash Message
  const [message, setMessage] = useState('');

  // Handle Input Change
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/adminLogin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),

          // ✅ Important for sending cookies (sessions)
          credentials: 'include',
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Login Successful!' });

        // ✅ Save session info in sessionStorage
        sessionStorage.setItem('admin', JSON.stringify(data.admin));

        // ✅ Redirect to admin dashboard
        navigate('/adminHome');
      } else {
        setMessage({ type: 'error', text: data.error || 'Login failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server Error. Try again later.' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9E4BC] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#BF222B] mb-6">
          Admin Login
        </h2>

        {message && (
          <div
            className={`text-center p-2 rounded ${
              message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white mb-4`}>
            {message.text}
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700">
              Admin Username
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
            Cancel
          </button>

          <p className="text-sm text-center text-gray-700">
            Don't have an account?{' '}
            <a
              onClick={() => navigate('/adminRegister')}
              className="text-[#BF222B] cursor-pointer font-medium hover:underline hover:text-[#8e1a21] transition duration-300">
              Register as Admin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
