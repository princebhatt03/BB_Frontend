import React from 'react';

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F8D6A4] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">
          दान के प्रकार
        </h2>

        {/* Description */}
        <p className="text-center text-black max-w-4xl mx-auto mb-10 text-lg leading-relaxed">
          औसत मानव शरीर में लगभग पाँच लीटर रक्त होता है, जो लाल रक्त कोशिकाओं,
          प्लेटलेट्स और प्लाज़्मा जैसे कई सेलुलर और गैर-सेलुलर घटकों से बना होता
          है।
          <br />
          <br />
          प्रत्येक प्रकार के घटक के अपने विशिष्ट गुण होते हैं और उनका उपयोग
          विभिन्न संकेतों के लिए किया जा सकता है। दान किए गए रक्त को रक्त केंद्र
          द्वारा इन घटकों में अलग किया जाता है, और आपके रक्त से अलग किए गए घटकों
          की संख्या के आधार पर एक दान की गई इकाई चार लोगों की जान बचा सकती है।
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* कार्ड 1: पैक्ड रेड ब्लड सेल्स */}
          <div className="bg-[#BF222B] shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300 border-t-4 border-white">
            <h3 className="text-xl font-semibold text-[#F8D6A4] mb-2">
              पैक्ड लाल रक्त कोशिकाएं
            </h3>
            <p className="text-white mb-2">
              <span className="font-semibold">यह क्या है?</span>
              <br />
              रक्त एकत्र किया जाता है, सेंट्रीफ्यूज किया जाता है और लाल कोशिकाओं
              को अलग करके संरक्षक के साथ मिलाया जाता है।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">कौन दान कर सकता है?</span>
              <br />
              18-65 वर्ष की आयु, वजन 45 किलोग्राम या उससे अधिक, स्वस्थ और
              तंदुरुस्त व्यक्ति।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">यह किसके लिए उपयोगी है?</span>
              <br />
              गंभीर एनीमिया, प्रसव, सर्जरी या दुर्घटनाओं के मामलों में।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">
                कितने समय तक सुरक्षित रहता है?
              </span>
              <br />
              2-6°C पर 42 दिनों तक।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">दान में कितना समय लगता है?</span>
              <br />
              15–30 मिनट (पूर्व-जांच सहित)।
            </p>
            <p className="text-white">
              <span className="font-semibold">कितनी बार दान कर सकते हैं?</span>
              <br />
              पुरुष: हर 90 दिन | महिलाएं: हर 120 दिन
            </p>
          </div>

          {/* कार्ड 2: प्लाज्मा */}
          <div className="bg-[#BF222B] shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300 border-t-4 border-white">
            <h3 className="text-xl font-semibold text-[#F8D6A4] mb-2">
              प्लाज्मा
            </h3>
            <p className="text-white mb-2">
              <span className="font-semibold">यह क्या है?</span>
              <br />
              प्लाज्मा रक्त का तरल घटक है जो शरीर में कोशिकाओं और प्रोटीन को ले
              जाता है।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">कौन दान कर सकता है?</span>
              <br />
              18-65 वर्ष के बीच के स्वस्थ व्यक्ति।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">यह किसके लिए उपयोगी है?</span>
              <br />
              खून का थक्का जमने की समस्याओं, जलने और दुर्घटना के मामलों में।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">
                कितने समय तक सुरक्षित रहता है?
              </span>
              <br />
              जमा हुआ प्लाज्मा 1 वर्ष तक स्टोर किया जा सकता है।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">दान में कितना समय लगता है?</span>
              <br />
              लगभग 45 मिनट।
            </p>
            <p className="text-white">
              <span className="font-semibold">कितनी बार दान कर सकते हैं?</span>
              <br />
              हर 2 सप्ताह में।
            </p>
          </div>

          {/* कार्ड 3: प्लेटलेट्स */}
          <div className="bg-[#BF222B] shadow-md p-6 rounded-xl hover:shadow-xl transition-all duration-300 border-t-4 border-white">
            <h3 className="text-xl font-semibold text-[#F8D6A4] mb-2">
              प्लेटलेट्स
            </h3>
            <p className="text-white mb-2">
              <span className="font-semibold">यह क्या है?</span>
              <br />
              प्लेटलेट्स खून के थक्के बनाने में मदद करते हैं। इन्हें रक्त से
              अफेरेसिस या पृथक्करण द्वारा निकाला जाता है।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">कौन दान कर सकता है?</span>
              <br />
              18-60 वर्ष, स्वस्थ और कम से कम 50 किलोग्राम वजन वाले व्यक्ति।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">यह किसके लिए उपयोगी है?</span>
              <br />
              कैंसर के रोगी, सर्जरी, या रक्तस्राव विकार वाले मरीज।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">
                कितने समय तक सुरक्षित रहता है?
              </span>
              <br />
              केवल 5 दिन।
            </p>
            <p className="text-white mb-2">
              <span className="font-semibold">दान में कितना समय लगता है?</span>
              <br />
              1.5 से 2 घंटे।
            </p>
            <p className="text-white">
              <span className="font-semibold">कितनी बार दान कर सकते हैं?</span>
              <br />
              हर 2 सप्ताह में।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
