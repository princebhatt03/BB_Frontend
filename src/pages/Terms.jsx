import React from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to the Blood Bank! By using our services, you agree to the
          following terms and conditions.
        </p>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Users must provide accurate personal details.</li>
          <li>Blood donation is voluntary, and users can opt-out anytime.</li>
          <li>
            We respect user privacy and do not share personal data without
            consent.
          </li>
          <li>
            Our platform only connects donors with recipients, and we are not
            liable for medical issues.
          </li>
        </ul>

        <p className="text-gray-700 mt-4">
          For more details, contact our support team.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Terms;
