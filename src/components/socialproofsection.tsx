import { hoverScale } from "../styles/customStyle";

type Testimonial = {
  text: string;
};

const prompts: string[] = [
  "What’s your go-to coffee?",
  "Hot or iced today?",
  "Tag your coffee buddy ☕",
];

const testimonials: Testimonial[] = [
  { text: "Best coffee in town—hands down." },
  { text: "The vibe, the taste, everything is perfect." },
  { text: "I come here every day. It’s my happy place." },
];

export default function SocialProofSection() {
  return (
    <section className="bg-coffee-800 py-16 text-center text-amber-900">
      
      {/* Interactive Prompts */}
      <div className="mb-12">
        <h2 className={`text-3xl font-bold mb-6 ${hoverScale}`}>Join the Conversation</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {prompts.map((prompt, index) => (
            <p
              key={index}
              className={`mx-4 flex-shrink-0 w-64 h-12 bg-green-50 rounded-full shadow-lg overflow-hidden flex items-center justify-center gap-2 ${hoverScale}`}
            >
               {prompt}
            </p>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className={`text-3xl font-bold mb-6 ${hoverScale}`}> What People Say</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`max-w-xs bg-green-50 text-green-950 p-6 rounded-xl shadow-md ${hoverScale}`}
            >
              <p className={`italic text-green-950 ${hoverScale}`}>“{item.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}