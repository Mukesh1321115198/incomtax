import { useState } from "react";
import { Menu, X, ChevronRight, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navItems = [
    {
      name: "Individual/HUF",
      submenu: [
        {
          name: "Salaried Employees",
          subOptions: [
            "Guidance to file Tax Return",
            "Return / Forms applicable to me",
            "Tax slabs",
            "Deductions",
          ],
        },
        { name: "Business/Profession" },
        { name: "Senior Citizen" },
        { name: "Non Resident" },
      ],
    },
    {
      name: "Company",
      submenu: [
        {
          name: "Domestic Company",
          subOptions: ["Return Filing", "Tax Audit", "MAT Credit"],
        },
        { name: "Foreign Company" },
      ],
    },
    {
      name: "Non-Company",
      submenu: [
        {
          name: "LLP",
          subOptions: ["Filing", "Compliance"],
        },
        { name: "Trust" },
        { name: "Society" },
      ],
    },
    {
      name: "Tax Professionals & Others",
      submenu: [
        {
          name: "CA/Legal Practitioner",
          subOptions: ["e-Verification", "Represent Case"],
        },
        { name: "Auditor" },
        { name: "ERIs" },
      ],
    },
    { name: "Downloads" },
    { name: "Help" },
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
    setActiveSubmenu(null);
  };

  return (
    <nav className="bg-[#2b3990] text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center relative">
          <div className="cursor-pointer hover:text-gray-200 border-b-2 border-transparent hover:border-white transition duration-200">
            Home
          </div>

          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onClick={() => item.submenu && toggleDropdown(item.name)}
              onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubmenu(null);
              }}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-200 border-b-2 border-transparent group-hover:border-white transition duration-200">
                {item.name}
                {item.submenu && <ChevronDown size={14} />}
              </div>

              {/* Dropdown Menu */}
              {activeDropdown === item.name && item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black shadow-lg rounded z-50">
                  {item.submenu.map((sub) => (
                    <div
                      key={sub.name}
                      onMouseEnter={() => sub.subOptions && setActiveSubmenu(sub.name)}
                      onMouseLeave={() => sub.subOptions && setActiveSubmenu(null)}
                      className="relative group p-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                    >
                      {sub.name}
                      {sub.subOptions && <ChevronRight size={16} />}

                      {/* Sub-Sub Menu */}
                      {activeSubmenu === sub.name && sub.subOptions && (
                        <div className="absolute top-0 left-full ml-1 w-64 bg-gray-100 shadow-lg rounded z-50">
                          {sub.subOptions.map((opt) => (
                            <div
                              key={opt}
                              className="p-3 hover:bg-gray-200 cursor-pointer"
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search and Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button className="bg-[#007bdb] p-2 rounded">
            <Search size={18} />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="ml-4">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2b3990] px-4 py-2 space-y-2">
          <div className="text-white py-2 border-b border-gray-500">Home</div>
          {navItems.map((item) => (
            <div key={item.name} className="text-white py-2 border-b border-gray-500">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
