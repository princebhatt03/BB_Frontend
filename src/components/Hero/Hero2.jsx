import { useState } from 'react';
import { motion } from 'framer-motion';

const indiaData = {
  'Madhya Pradesh': [
    'Bhopal',
    'Indore',
    'Jabalpur',
    'Gwalior',
    'Ujjain',
    'Rewa',
    'Sagar',
    'Satna',
    'Dewas',
    'Ratlam',
    'Chhindwara',
    'Hoshangabad',
    'Shivpuri',
    'Vidisha',
    'Khargone',
    'Katni',
    'Singrauli',
    'Khandwa',
    'Bhind',
    'Betul',
  ],

  Maharashtra: [
    'Mumbai',
    'Pune',
    'Nagpur',
    'Nashik',
    'Thane',
    'Aurangabad',
    'Solapur',
    'Amravati',
    'Kolhapur',
    'Nanded',
    'Jalgaon',
    'Latur',
    'Dhule',
    'Sangli',
    'Akola',
    'Ahmednagar',
    'Chandrapur',
    'Beed',
    'Wardha',
    'Ratnagiri',
  ],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Varanasi', 'Agra'],
  Rajasthan: [
    'Jaipur',
    'Udaipur',
    'Jodhpur',
    'Kota',
    'Ajmer',
    'Bikaner',
    'Bharatpur',
    'Alwar',
    'Sikar',
    'Pali',
    'Nagaur',
    'Chittorgarh',
    'Barmer',
    'Jhunjhunu',
    'Tonk',
    'Bhilwara',
    'Hanumangarh',
    'Dholpur',
    'Sawai Madhopur',
    'Jhalawar',
  ],
  Gujarat: [
    'Ahmedabad',
    'Surat',
    'Vadodara',
    'Rajkot',
    'Bhavnagar',
    'Jamnagar',
    'Junagadh',
    'Gandhinagar',
    'Anand',
    'Navsari',
    'Mehsana',
    'Bharuch',
    'Amreli',
    'Patan',
    'Porbandar',
    'Narmada',
    'Tapi',
    'Banaskantha',
    'Dahod',
    'Valsad',
  ],
  // Add more states and districts here
};

const Hero2 = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearch = () => {
    console.log(
      'Search camp in:',
      selectedState,
      selectedDistrict,
      selectedDate
    );
    // Future: Call API to fetch blood donation camps
  };

  return (
    <div className="relative min-h-[90vh] bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="../../../4.jpg"
          alt="Blood Donation"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Search Blood Donation Camps
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* State Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium">State</label>
            <select
              value={selectedState}
              onChange={e => {
                setSelectedState(e.target.value);
                setSelectedDistrict('');
              }}
              className="w-full p-2 rounded-md text-black">
              <option value="">Select State</option>
              {Object.keys(indiaData).map(state => (
                <option
                  key={state}
                  value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* District Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium">District</label>
            <select
              value={selectedDistrict}
              onChange={e => setSelectedDistrict(e.target.value)}
              disabled={!selectedState}
              className="w-full p-2 rounded-md text-black">
              <option value="">Select District</option>
              {selectedState &&
                indiaData[selectedState].map(district => (
                  <option
                    key={district}
                    value={district}>
                    {district}
                  </option>
                ))}
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block mb-1 text-sm font-medium">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              className="w-full p-2 rounded-md text-black"
            />
          </div>
        </motion.div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="mt-6 bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg">
          Search Camp
        </motion.button>
      </div>
    </div>
  );
};

export default Hero2;
