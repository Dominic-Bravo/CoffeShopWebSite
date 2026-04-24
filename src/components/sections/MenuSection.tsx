import type { MenuItem } from "../../types/menuItems";
import menu from "../../data/menu.json";
import Card from "../common/Card";

export default function MenuSection() {
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
            <Card
              key={item.id}
              title={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              className="mx-4 flex-shrink-0 w-64 sm:w-72 md:w-80"
            />
          ))}
        </div>

        {/* Duplicate Loop for Infinite Effect */}
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
          {items.map((item) => (
            <Card
              key={`dup-${item.id}`}
              title={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              className="mx-4 flex-shrink-0 w-64 sm:w-72 md:w-80"
            />
          ))}
        </div>
      </div>
    </div>
  );
}