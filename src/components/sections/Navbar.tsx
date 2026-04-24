import { useState } from 'react';
import { hoverScale } from "../../styles/customStyle";
import logo from "../../assets/images/coffeeLogo2.png";
import type { NavbarItem } from "../../types/navbartypes";

const navbarItems: NavbarItem[] = [
  { label: "Home", href: "#top" },
  { label: "Stories", href: "#stories" },
  { label: "Coffee", href: "#coffee" },
  { label: "Equipment", href: "#equipment" },
  { label: "Store", href: "#store" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Coffee Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
          />
          <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-amber-800">
            Coffee Shop
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 text-lg lg:text-xl font-medium">
          {navbarItems.map((item) => (
            <li key={item.label} className={`${hoverScale}`}>
              <a href={item.href} className="text-amber-900 hover:text-amber-700">{item.label}</a>
            </li>
          ))}
        </ul>

        <button className={`font-bold bg-amber-100 text-green-900 px-3 py-2 sm:px-4 sm:py-3 w-20 sm:w-24 rounded-full hover:bg-amber-200 ${hoverScale}`}>
          Order
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2 text-center">
            {navbarItems.map((item) => (
              <li key={item.label} className={`${hoverScale}`}>
                <a href={item.href} className="text-amber-900 hover:text-amber-700 block py-2">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;