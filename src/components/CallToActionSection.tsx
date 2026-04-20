import { hoverScale } from "../styles/customStyle";

export default function CallToActionSection() {
  return (
    <section className="bg-coffee-900 py-16 text-center text-coffee-50">
      
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Don’t just drink coffee. Experience it.
      </h2>

      {/* Subtext */}
      <p className="text-coffee-300 mb-8">
        Order now and taste the difference.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button className={`px-6 py-3 bg-green-50 text-green-950 rounded-full font-semibold hover:bg-green-100 transition duration-300 ${hoverScale}`}>
          Follow Us
        </button>

        <button className={`px-6 py-3 bg-green-50 text-green-950 rounded-full font-semibold hover:bg-green-100 transition duration-300 ${hoverScale}`}>
          Share Your Sip
        </button>

        <button className={`px-6 py-3 bg-green-50 text-green-950 rounded-full font-semibold hover:bg-green-100 transition duration-300 ${hoverScale}`}>
          Order Now
        </button>
      </div>
    </section>
  );
}