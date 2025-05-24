import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

export default function Navbar2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: "Home" },
    { name: "Individual/HUF", hasDropdown: true },
    { name: "Company", hasDropdown: true },
    { name: "Non-Company", hasDropdown: true },
    { name: "Tax Professionals & Others", hasDropdown: true },
    { name: "Downloads" },
    { name: "Help" },
  ];

  const dropdownContent = (
    <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded z-50">
      <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
      <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
      <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
    </div>
  );

  return (
    <nav className="bg-[#2b3990] text-white px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative flex items-center gap-1 cursor-pointer hover:text-gray-300"
              onMouseEnter={() => setHoveredItem(item.hasDropdown ? item.name : null)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span>{item.name}</span>
              {item.hasDropdown && <ChevronDown size={14} />}
              {hoveredItem === item.name && item.hasDropdown && dropdownContent}
            </div>
          ))}
        </div>

        {/* Search & Hamburger */}
        <div className="flex items-center">
          <button className="bg-[#007bdb] p-2 rounded">
            <Search size={18} />
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="ml-4 md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {navItems.map((item) => (
            <div key={item.name} className="flex items-center gap-1 cursor-pointer px-2">
              <span>{item.name}</span>
              {item.hasDropdown && <ChevronDown size={14} />}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
