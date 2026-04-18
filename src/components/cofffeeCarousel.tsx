import type { MenuItem } from "../types/menuItems";
import menu from "../app/menu.json";

export default function CoffeeMenu() {
  const items: MenuItem[] = menu as MenuItem[];

  return (
    <div className="bg-coffee-900 py-12 px-6 text-amber-900">
      <h2 className="text-center text-3xl font-bold mb-10 transition-transform duration-500 ease-out hover:scale-105">
        ☕ Our Coffee Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-green-50 rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-500 ease-out transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>

              <p className="text-sm text-amber-900 mt-1">
                {item.description}
              </p>

              <p className="mt-3 font-bold text-orange-400">
                ₱{item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center mt-10 italic text-gray-300">
        👉 Your perfect cup is waiting.
      </p>
    </div>
  );
}