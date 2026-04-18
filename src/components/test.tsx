import coffeepicture from '../assets/images/coffee.jpg'
import { hoverScale } from '../styles/customStyle';

function Hello() {
  return (
    <div className="flex min-h-screen">
      
      {/* Text column */}
      <div className="w-1/2 flex flex-col items-center justify-start mt-30 ">
        <h1 className={`text-6xl font-bold text-amber-900 italic ${hoverScale}`}>
          “Brewed to perfection. Served with passion.”
        </h1>
        <p className="text-amber-900 mt-4 indent-10 text-2xl mt-15 transition-transform duration-500 ease-out hover:scale-105">
          At our coffee shop, every cup tells a story. From carefully sourced beans to expertly crafted drinks, we turn simple moments into something special. Whether you're here to work, relax, or catch up with friends—there’s always a perfect brew waiting for you.
        </p>
        <div className="flex space-x-4 mt-10">
          <button className="bg-green-50 text-green-950 px-6 py-3 rounded mt-10
            transition-transform duration-500 ease-out
            hover:scale-105 hover:bg-green-100">
            Order Now
          </button>
          <button className="bg-green-50 text-green-950 px-6 py-3 rounded mt-10
            transition-transform duration-500 ease-out
            hover:scale-105 hover:bg-green-100">
            Explore Menu 
          </button>
          <button className="bg-green-50 text-green-950 px-6 py-3 rounded mt-10
            transition-transform duration-500 ease-out
            hover:scale-105 hover:bg-green-100">
            Find Your Brew
          </button>
        </div>
      </div>

      {/* Image column */}
      <div className="w-1/2 flex items-center justify-center transition-transform duration-500 ease-out hover:scale-105">
        <img
          src={coffeepicture}
          alt="Coffee"
          className="w-165 h-165 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default Hello;