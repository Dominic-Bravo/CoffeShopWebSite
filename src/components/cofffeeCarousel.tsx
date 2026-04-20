import type { MenuItem } from "../types/menuItems";
import menu from "../app/menu.json";

export default function CoffeeMenu() {
  const items: MenuItem[] = menu as MenuItem[];

  return (
    <div className="bg-coffee-900 py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-10 text-amber-500">
        ☕ Our Coffee Menu
      </h2>

      {/* Carousel Container */}
      <div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
        
        {/* First Loop */}
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {items.map((item) => (
            <div
              key={item.id}
              className="mx-4 flex-shrink-0 w-64 bg-green-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-500 ease-out transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-amber-900 mt-1">{item.description}</p>
                <p className="mt-3 font-bold text-orange-400">₱{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate Loop for Infinite Effect */}
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
          {items.map((item) => (
            <div
              key={`dup-${item.id}`}
              className="mx-4 flex-shrink-0 w-64 bg-green-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-500 ease-out transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-amber-900 mt-1">{item.description}</p>
                <p className="mt-3 font-bold text-orange-400">₱{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}