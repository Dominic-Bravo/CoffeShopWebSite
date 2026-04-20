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
    <section className="bg-coffee-800 py-16 text-center text-coffee-50">
      
      {/* Interactive Prompts */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>

        <div className="flex flex-col items-center gap-3">
          {prompts.map((prompt, index) => (
            <p
              key={index}
              className="bg-coffee-700 px-6 py-2 rounded-full text-sm hover:bg-coffee-600 transition"
            >
               {prompt}
            </p>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-3xl font-bold mb-6"> What People Say</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`max-w-xs bg-green-50 text-green-950 p-6 rounded-xl shadow-md ${hoverScale}`}
            >
              <p className="italic text-coffee-200">“{item.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}