import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Patient = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    fullName: '',
    aadhaar: '',
    mobile: '',
    bloodGroup: '',
    details: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = e => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ||
          import.meta.env.VITE_LOCAL_BACKEND_URL
        }/registerPatient`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(patient),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Patient Registered Successfully!');
        setErrorMessage('');
        setPatient({
          fullName: '',
          aadhaar: '',
          mobile: '',
          bloodGroup: '',
          details: '',
        });
      } else {
        setErrorMessage(data.message || 'Error registering patient.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Server Error! Please try again.');
      setSuccessMessage('');
    }
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9E4BC] px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#BF222B] mb-6">
          Register as Patient
        </h2>
        {/* Flash Messages */}
        {successMessage && (
          <div className="bg-green-500 text-white p-2 rounded mb-3 text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-500 text-white p-2 rounded mb-3 text-center">
            {errorMessage}
          </div>
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
              value={patient.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobile"
              value={patient.mobile}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <div>
            <label
              htmlFor="aadharCard"
              className="block text-sm font-medium text-gray-700">
              Aadhar Card Number
            </label>
            <input
              type="text"
              id="aadharCard"
              name="aadhaar"
              value={patient.aadhaar}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
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
              value={patient.bloodGroup}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]">
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

          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-gray-700">
              Why Blood is Required? (Disease)
            </label>
            <textarea
              id="reason"
              name="details"
              value={patient.details}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BF222B]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#BF222B] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#a41d26] transition duration-300">
            Register as Patient
          </button>

          <button
            type="button"
            onClick={() => navigate('/adminHome')}
            className="w-full mt-2 text-[#BF222B] border border-[#BF222B] py-2 rounded-lg hover:bg-[#BF222B] hover:text-white transition">
            Back to Home
          </button>

          <p className="text-sm text-center text-gray-700">
            Need Blood?{' '}
            <a
              href="/donar"
              className="text-[#BF222B] font-medium hover:underline hover:text-[#8e1a21] transition duration-300">
              Register as Donor
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Patient;
