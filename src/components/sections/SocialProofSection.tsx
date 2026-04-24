import { hoverScale } from "../../styles/customStyle";
import ButtonCard from "../common/ButtonCard";
import Card from "../common/Card";
import { prompts, testimonials } from "../../data/socialProofData";

export default function SocialProofSection() {
  return (
    <section className="bg-coffee-800 py-16 text-center text-brown-900 px-4">

      {/* Interactive Prompts */}
      <div className="mb-12">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${hoverScale}`}>Join the Conversation</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          {prompts.map((prompt, index) => (
            <ButtonCard
              key={index}
              className="w-48 sm:w-56 md:w-64 h-12 px-4"
            >
              {prompt}
            </ButtonCard>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${hoverScale}`}> What People Say</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="max-w-xs w-full sm:w-80"
            >
              <p className={`italic text-green-950 ${hoverScale}`}>“{item.text}”</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}