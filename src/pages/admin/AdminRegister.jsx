import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminID: '',
    adminUsername: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

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
          className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Admin ID
            </label>
            <input
              type="text"
              name="adminID"
              value={formData.adminID}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Admin Username
            </label>
            <input
              type="text"
              name="adminUsername"
              value={formData.adminUsername}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#BF222B] text-white py-2 rounded-lg hover:bg-[#a51e26] transition">
            {loading ? 'Registering...' : 'Register'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full mt-2 text-[#BF222B] border border-[#BF222B] py-2 rounded-lg hover:bg-[#BF222B] hover:text-white transition">
            Back to Home
          </button>

          <p className="mt-4 text-sm text-center text-gray-700">
            Already have an account?{' '}
            <a
              href="/adminLogin"
              className="text-[#BF222B] font-medium hover:underline hover:text-[#8e1a21] transition duration-300">
              Login as Admin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
