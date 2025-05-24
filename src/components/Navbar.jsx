import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="e-Filing Logo" className="h-10" />
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-700">
              <span>📞 Call Us</span>
              <span>|</span>
              <span>🌐 English</span>
              <span>|</span>
              <span className="font-bold">A</span>
              <span className="text-lg">A⁺</span>
              <span>|</span>
              <span>🌓</span>
            </div>
            <button className="border px-4 py-1 text-sm rounded hover:bg-gray-100">
              Login
            </button>
            <button className="bg-blue-700 text-white px-4 py-1 text-sm rounded hover:bg-blue-800">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 text-sm">
            <div className="flex flex-col items-start space-y-1 text-gray-700">
              <span>📞 Call Us</span>
              <span>🌐 English</span>
              <span>A | A⁺</span>
              <span>🌓 Dark Mode</span>
            </div>
            <div className="flex space-x-2 pt-2">
              <button className="border px-4 py-1 rounded hover:bg-gray-100">
                Login
              </button>
              <button className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
