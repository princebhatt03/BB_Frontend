import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUS = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F9E4BC] py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#BF222B]">
            About Blood Bank
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            We're dedicated to saving lives by ensuring a constant supply of
            blood for those in need.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#BF222B]">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to provide a safe and reliable source of blood for
              hospitals and medical facilities. We aim to create a community
              where blood donations are regularly made, and blood banks are
              fully stocked to meet the medical needs of our patients.
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src="./11.jpg"
              alt="Blood Donation"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#BF222B] text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-[#BF222B]">
                Blood Donations
              </h4>
              <p className="mt-4 text-gray-700">
                We organize regular blood donation drives across various
                locations to ensure that our blood supply is always full.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-[#BF222B]">
                Blood Collection
              </h4>
              <p className="mt-4 text-gray-700">
                Our trained professionals ensure safe and hygienic blood
                collection for all donations, with care for both donors and
                patients.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-bold text-[#BF222B]">Blood Supply</h4>
              <p className="mt-4 text-gray-700">
                We provide the collected blood to hospitals and clinics in a
                timely manner to save lives in emergency medical situations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Together, we can make a difference! Join us in our mission to save
            lives.
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="/donar"
              className="inline-block bg-[#BF222B] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#a41d26] transition duration-300 w-full">
              Register as Donor
            </a>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full py-3 text-[#BF222B] border border-[#BF222B] rounded-lg hover:bg-[#BF222B] hover:text-white transition duration-300">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
