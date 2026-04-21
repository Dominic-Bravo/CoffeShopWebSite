import type { EngagementOption } from "../types/engagementtypes";
import { hoverScale } from "../styles/customStyle";

const options: EngagementOption[] = [
  { label: "Hot", emoji: "☕" },
  { label: "Iced", emoji: "🧊" },
  { label: "Sweet", emoji: "🍯" },
];

export default function EngagementSection() {
  return (
    <section className="bg-coffee-900 py-5 text-center text-amber-900">
      
      {/* Heading */}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${hoverScale}`}>
        Coffee isn’t just a drink—it’s a lifestyle.
      </h2>

      {/* Subtext */}
      <p className={`text-amber-900 max-w-xl mx-auto mb-6 ${hoverScale}`}>
        Start your day with a cup that fuels your mood, your focus, and your moments.
      </p>

      {/* Question */}
      <p className={`italic text-amber-900 mb-6 ${hoverScale}  `}>
         What’s your go-to brew today?
      </p>

      {/* Options */}
      <div className="flex justify-center gap-4 flex-wrap">
        {options.map((option, index) => (
          <button
            key={index}
            className={`mx-4 flex-shrink-0 w-64 h-12 bg-green-50 rounded-full shadow-lg overflow-hidden flex items-center justify-center gap-2 ${hoverScale}`}
          >
            <span className="text-lg font-semibold">{option.label}</span>
            <span className="text-4xl text-amber-900">{option.emoji}</span>  
          </button>
        ))}
      </div>
    </section>
  );
}