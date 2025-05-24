import React from 'react';
import { FaFacebookF, FaYoutube, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#181f3a] text-white pt-10 pb-6 px-4">
      {/* Top Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3 text-lg">About Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>About the Portal</li>
            <li>History of Direct Taxation</li>
            <li>Vision, Mission, Values</li>
            <li>Vision, Mission, Values (Hindi)</li>
            <li>Who We Are</li>
            <li>Right to Information</li>
            <li>Organization & Functions</li>
            <li>Media Reports</li>
            <li>e-Filing Calendar 2023</li>
            <li>Tax Payer Charter</li>
            <li>Tax Payer Charter (Hindi)</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Contact Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Helpdesk Numbers</li>
            <li>Grievances</li>
            <li>View Grievance</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Using the Portal */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Using the Portal</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Website Policies</li>
            <li>Accessibility Statement</li>
            <li>Site Map</li>
            <li>Browser Support</li>
          </ul>
        </div>

        {/* Related Sites */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Related Sites</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Income Tax India</li>
            <li>
              Protean (previously NSDL) <sup>🔗</sup>
            </li>
            <li>TRACES</li>
          </ul>
        </div>
      </div>

      {/* Social Media & Divider */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social */}
        <div className="text-sm font-semibold flex items-center gap-4">
          <span>Follow us on :</span>
          <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
            <FaYoutube />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
            <FaTimes />
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded">
            <FaFacebookF />
          </button>
        </div>

        {/* Emblem + Link */}
        <div className="flex items-center gap-2">
          <img src="/india_.svg" alt="emblem" className="h-8" />
          <div>
            <span className="text-sm font-bold">india.gov.in</span>
            <p className="text-xs text-gray-300">national portal of india</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-xs text-gray-400">
        <p>Last reviewed and updated on : 23-May-2025</p>
        <p className="mt-1">
          This site is best viewed in 1024 × 768 resolution with latest version
          of Chrome, Firefox, Safari and Microsoft Edge.
        </p>
        <p className="mt-1">
          Copyright © Income Tax Department, Ministry of Finance, Government of
          India. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;