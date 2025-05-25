import { useState, useRef } from "react";
import { Menu, X, ChevronRight, ChevronDown, Search, Download } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownTimeoutRef = useRef(null); // For dropdown delay

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
          subOptions: ["Guidance to file Tax Return", "Return/ Forms application to me", "Tax slabs ","Deductions on which I can get tax b..","Update my profile detials", "Downloads"],
        },
        { name: "Foreign Company",
          subOptions: ["Guidance to file Tax Return", "Return/ Forms application to me", "Tax slabs ","Deductions on which I can get tax b..","Update my profile detials", "Downloads"],
         },
      ],
    },
    {
      name: "Non-Company",
      submenu: [
        {
          name: "AOP/BOI/Trust/AJP",
          subOptions: ["Guidance to file Tax Return", "Return/ Forms application to me", "Tax slabs ","Deductions on which I can get tax b..","Update my profile detials", "Downloads"],
        },
        { name: "Firm/LLP" ,
          subOptions: ["Guidance to file Tax Return", "Return/ Forms application to me", "Tax slabs ","Deductions on which I can get tax b..","Update my profile detials", "Downloads"],
        },
        { name: "Local Authority",
          subOptions: ["Guidance to file Tax Return", "Return/ Forms application to me", "Tax slabs ","Deductions on which I can get tax b..","Update my profile detials", "Downloads"],
         },
      ],
    },
    {
      name: "Tax Professionals & Others",
      submenu: [
        {
          name: "Chartered Accountants",
          subOptions: ["Registration","Service Available"],
        },
        { name: "e-Return Intermediaries",
        
          subOptions: ["Registration","Service Available"],
         },
        { name: "External",subOptions: ["Registration","Service Available"], },
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
          <div className="cursor-pointer hover:underline underline-offset-4 transition duration-200">
            Home
          </div>

          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => {
                clearTimeout(dropdownTimeoutRef.current);
                if (item.submenu) setActiveDropdown(item.name);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setActiveDropdown(null);
                  setActiveSubmenu(null);
                }, 300); // Delay to prevent flickering
              }}
            >
              <div
                className="flex items-center gap-1 cursor-pointer hover:underline underline-offset-4 transition duration-200"
                onClick={() => item.submenu && toggleDropdown(item.name)}
              >
                {item.name}
                {item.submenu && <ChevronDown size={14} />}
              </div>

              {activeDropdown === item.name && item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black shadow-lg rounded z-50">
                  {item.submenu.map((sub) => (
                    <div
                      key={sub.name}
                      className="relative group p-3 hover:bg-gray-100 flex justify-between items-center cursor-pointer"
                      onMouseEnter={() => {
                        clearTimeout(dropdownTimeoutRef.current);
                        sub.subOptions && setActiveSubmenu(sub.name);
                      }}
                      onMouseLeave={() => {
                        dropdownTimeoutRef.current = setTimeout(() => {
                          setActiveSubmenu(null);
                        }, 300);
                      }}
                    >
                      {sub.name}
                      {sub.subOptions && <ChevronRight size={16} />}

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
        <div className="flex items-center gap-2">
          <button
            className="bg-[#007bdb] p-2 rounded"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <Search size={18} />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Bar Section */}
      {searchVisible && (
        <div className="bg-[#fafbff] px-4 py-4 flex items-center justify-center gap-2">
          <input
            type="text"
            placeholder="Search any income tax related things"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full md:w-[77%] border border-blue-600 p-3 rounded focus:outline-none text-gray-900 placeholder-gray-500"
          />
          <button className="bg-[#2b3990] text-white px-6 py-3 rounded hover:bg-blue-800">
            Search
          </button>
        </div>
      )}

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
