import { hoverScale } from "../styles/customStyle";
import logo from "../assets/images/coffeeLogo2.png"

function Navbar() {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">     
        <div className="flex items-center ml-10 gap-3">
            <img 
                src={logo} 
                alt="Coffee Logo" 
                className="w-12 h-12 object-contain"
            />
            <div className="text-2xl font-bold tracking-wide text-amber-800">
                Coffee Shop
            </div>
        </div>
        <ul className="flex space-x-10 text-xl ml-15 font-medium">
            <li className={`${hoverScale}`}>
                <a href="#" className="text-amber-900 hover:text-amber-700">Stories</a>
            </li>
            <li className={`${hoverScale}`}>
                <a href="#" className="text-amber-900 hover:text-amber-700">Coffee</a>     
            </li>
            <li className={`${hoverScale}`}>
                <a href="#" className="text-amber-900 hover:text-amber-700">Equipment</a>
            </li>
            <li className={`${hoverScale}`}>
                <a href="#" className="text-amber-900 hover:text-amber-700">Store</a>z
            </li>
        </ul>   
        <button className={`font-bold bg-amber-100 text-green-900 mr-10 px-4 py-4 w-24 rounded-full hover:bg-amber-110 ${hoverScale}`}>Order</button>
        </div>

    </nav>
  );
}

export default Navbar;

