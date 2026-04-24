import { hoverScale } from "../../styles/customStyle";
import ButtonCard from "../common/ButtonCard";
import { engagementOptions } from "../../data/engagementData";

export default function EngagementSection() {
  return (
    <section className="bg-coffee-900 py-5 text-center text-brown-900 px-4">

      {/* Heading */}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${hoverScale}`}>
        Coffee isn’t just a drink—it’s a lifestyle.
      </h2>

      {/* Subtext */}
      <p className={`text-brown-900 max-w-xl mx-auto mb-6 text-sm sm:text-base ${hoverScale}`}>
        Start your day with a cup that fuels your mood, your focus, and your moments.
      </p>

      {/* Question */}
      <p className={`italic text-brown-900 mb-6 text-sm sm:text-base ${hoverScale}  `}>
         What’s your go-to brew today?
      </p>

      {/* Options */}
      <div className="flex justify-center gap-4 flex-wrap">
        {engagementOptions.map((option, index) => (
          <ButtonCard
            key={index}
            label={option.label}
            emoji={option.emoji}
            className="w-48 sm:w-56 md:w-64 h-12"
          />
        ))}
      </div>
    </section>
  );
}