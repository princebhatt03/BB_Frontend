import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    // This will run after the translate element is initialized
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'hi', // Base language is English
          includedLanguages: 'en,hi', // Show only English and Hindi
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );

      // Delay to allow the dropdown to render before auto-selecting Hindi
      setTimeout(() => {
        const select = document.querySelector('select.goog-te-combo');
        if (select) {
          select.value = 'en';
          select.dispatchEvent(new Event('change'));
        }
      }, 1000); // 1 second delay
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      className="mt-2 text-sm"></div>
  );
};

export default GoogleTranslate;
