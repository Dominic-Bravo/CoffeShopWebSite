import { hoverScale } from "../../styles/customStyle";

export default function CallToActionSection() {
  return (
    <section className="bg-coffee-900 py-12 sm:py-16 text-center text-coffee-50 px-4">

      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Don’t just drink coffee. Experience it.
      </h2>

      {/* Subtext */}
      <p className="text-coffee-300 mb-8 text-sm sm:text-base">
        Order now and taste the difference.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button className={`px-4 py-2 sm:px-6 sm:py-3 bg-green-50 text-green-950 rounded-full font-semibold hover:bg-green-100 transition duration-300 text-sm sm:text-base ${hoverScale}`}>
          Follow Us
        </button>

        <button className={`px-4 py-2 sm:px-6 sm:py-3 bg-green-50 text-green-950 rounded-full font-semibold hover:bg-green-100 transition duration-300 text-sm sm:text-base ${hoverScale}`}>
          Share Your Sip
        </button>

        <button className={`px-4 py-2 sm:px-6 sm:py-3 bg-green-50 text-green-950 rounded-full font-semibold hover:bg-green-100 transition duration-300 text-sm sm:text-base ${hoverScale}`}>
          Order Now
        </button>
      </div>
    </section>
  );
}