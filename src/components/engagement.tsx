type EngagementOption = {
  label: string;
  emoji: string;
};

const options: EngagementOption[] = [
  { label: "Hot", emoji: "☕" },
  { label: "Iced", emoji: "🧊" },
  { label: "Sweet", emoji: "🍯" },
];

export default function EngagementSection() {
  return (
    <section className="bg-coffee-900 py-5 text-center text-coffee-50">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Coffee isn’t just a drink—it’s a lifestyle.
      </h2>

      {/* Subtext */}
      <p className="text-coffee-300 max-w-xl mx-auto mb-6">
        Start your day with a cup that fuels your mood, your focus, and your moments.
      </p>

      {/* Question */}
      <p className="italic text-coffee-200 mb-6">
        👉 What’s your go-to brew today?
      </p>

      {/* Options */}
      <div className="flex justify-center gap-4 flex-wrap">
        {options.map((option, index) => (
          <button
            key={index}
            className="px-5 py-2 rounded-full bg-coffee-700 hover:bg-coffee-600 transition duration-300"
          >
            {option.label} {option.emoji}
          </button>
        ))}
      </div>
    </section>
  );
}