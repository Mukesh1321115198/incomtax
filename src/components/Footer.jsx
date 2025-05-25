import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaYoutube, FaTimes, FaAngleUp } from 'react-icons/fa';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181f3a] text-white pt-10 pb-6 px-4 relative">
      {/* Top Grid Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3 text-lg">About Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            {[
              'About the Portal',
              'History of Direct Taxation',
              'Vision, Mission, Values',
              'Vision, Mission, Values (Hindi)',
              'Who We Are',
              'Right to Information',
              'Organization & Functions',
              'Media Reports',
              'e-Filing Calendar 2023',
              'Tax Payer Charter',
              'Tax Payer Charter (Hindi)',
            ].map((item, idx) => (
              <li key={idx} className="hover:text-white">{item}</li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Contact Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            {['Helpdesk Numbers', 'Grievances', 'View Grievance', 'Help'].map((item, idx) => (
              <li key={idx} className="hover:text-white">{item}</li>
            ))}
          </ul>
        </div>

        {/* Using the Portal */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Using the Portal</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            {['Website Policies', 'Accessibility Statement', 'Site Map', 'Browser Support'].map((item, idx) => (
              <li key={idx} className="hover:text-white">{item}</li>
            ))}
          </ul>
        </div>

        {/* Related Sites */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Related Sites</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-white">Income Tax India</li>
            <li className="hover:text-white">Protean (previously NSDL) <sup>🔗</sup></li>
            <li className="hover:text-white">TRACES</li>
          </ul>
        </div>
      </div>

      {/* Divider and Social */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social buttons */}
        <div className="text-sm font-semibold flex items-center gap-4">
          <span>Follow us on :</span>
          {[<FaYoutube />, <FaTimes />, <FaFacebookF />].map((Icon, i) => (
            <button
              key={i}
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors"
            >
              {Icon}
            </button>
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/india_.svg" alt="emblem" className="h-8" />
          <div>
            <span className="text-sm font-bold">india.gov.in</span>
            <p className="text-xs text-gray-300">national portal of india</p>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="mt-6 text-center text-xs text-gray-400">
        <p>Last reviewed and updated on : 25-May-2025</p>
        <p className="mt-1">
          This site is best viewed in 1024 × 768 resolution with latest version
          of Chrome, Firefox, Safari and Microsoft Edge.
        </p>
        <p className="mt-1">
          Copyright © Income Tax Department, Ministry of Finance, Government of
          India. All Rights Reserved.
        </p>
      </div>

      {/* Scroll to top */}
      {showScroll && (
        <button

       className="fixed bottom-6 right-6 text-white font-bold p-2 shadow transition"
  style={{
    backgroundColor: '#2A3A8D',
    borderRadius: '5px',
    width: '25px',
    height: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
          
          onClick={scrollToTop}
          title="Scroll to top"
        >
          <FaAngleUp size={18} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
