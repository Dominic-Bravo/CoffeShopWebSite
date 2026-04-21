import { hoverScale } from "../styles/customStyle";
import logo from "../assets/images/coffeeLogo2.png"
import type { NavbarItem } from "../types/navbartypes";

const navbarItems: NavbarItem[] = [
  { label: "Stories", href: "#" },
  { label: "Coffee", href: "#" },
  { label: "Equipment", href: "#" },
  { label: "Store", href: "#" },
];


function Navbar() {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">     
        <div className="flex items-center gap-3">
            <img 
                src={logo} 
                alt="Coffee Logo" 
                className="w-20 h-20 object-contain"
            />
            <div className="text-2xl font-bold tracking-wide text-amber-800">
                Coffee Shop
            </div>
        </div>
            <ul className="flex space-x-10 mr-15 text-xl font-medium">
                {navbarItems.map((item) => (
                    <li key={item.label} className={`${hoverScale}`}>
                        <a href={item.href} className="text-amber-900 hover:text-amber-700">{item.label}</a>
                    </li>
                ))}
            </ul>   
        <button className={`font-bold bg-amber-100 text-green-900 px-4 py-4 w-24 rounded-full hover:bg-amber-110 ${hoverScale}`}>Order</button>
        </div>

    </nav>
  );
}

export default Navbar;

