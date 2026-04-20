import { hoverScale } from "../styles/customStyle";

function Navbar() {
  return (
    <nav className="p-6">
      <div className="container mx-auto flex items-center justify-between">     
        <div className="text-amber-900 text-2 xl font-bold">Coffee Shop</div>
        <ul className="flex space-x-10 text-xl font-medium">
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
                <a href="#" className="text-amber-900 hover:text-amber-700">Store</a>
            </li>
        </ul>   
        <button className="bg-green-50 text-green-950 px-4 py-2 rounded hover:bg-green-100">order</button>
        </div>

    </nav>
  );
}

export default Navbar;

