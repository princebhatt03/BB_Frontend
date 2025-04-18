import React from 'react';
import BannerImg from '../../../public/11.jpg';

const data = [
  { type: 'A+', donateTo: 'A+, AB+', receiveFrom: 'A+, A-, O+, O-' },
  { type: 'O+', donateTo: 'O+, A+, B+, AB+', receiveFrom: 'O+, O-' },
  { type: 'B+', donateTo: 'B+, AB+', receiveFrom: 'B+, B-, O+, O-' },
  { type: 'AB+', donateTo: 'AB+', receiveFrom: 'Everyone' },
  { type: 'A-', donateTo: 'A+, A-, AB+, AB-', receiveFrom: 'A-, O-' },
  { type: 'O-', donateTo: 'Everyone', receiveFrom: 'O-' },
  { type: 'B-', donateTo: 'B+, B-, AB+, AB-', receiveFrom: 'B-, O-' },
  { type: 'AB-', donateTo: 'AB+, AB-', receiveFrom: 'AB-, A-, B-, O-' },
];

const Banner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <section className="w-full px-1 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* image section */}
          <div
            data-aos="zoom-in"
            className="w-full md:w-1/2">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div
            data-aos="zoom-in"
            className="w-full md:w-1/2 bg-[#F8D6A4] p-6 rounded-xl shadow-xl animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Compatible Blood Type Donors
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="p-3 border border-gray-300">Blood Type</th>
                    <th className="p-3 border border-gray-300">
                      Donate Blood To
                    </th>
                    <th className="p-3 border border-gray-300">
                      Receive Blood From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr
                      key={i}
                      className="even:bg-gray-100 odd:bg-white hover:bg-red-50 transition">
                      <td className="p-3 border text-center font-semibold text-red-700">
                        {row.type}
                      </td>
                      <td className="p-3 border text-center">{row.donateTo}</td>
                      <td className="p-3 border text-center">
                        {row.receiveFrom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
