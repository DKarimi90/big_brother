import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Grace Mwende",
    title: "Nairobi, Kenya",
    image: "/gallery/five.jpeg",
    colors: "from-orange-100/80 via-orange-200/90 to-yellow-100/70",
    feedback:
      "Big Brothers Grave Services handled my father’s memorial with such care and artistry. The headstone design was breathtaking, and their compassion turned a hard time into a meaningful memory.",
  },
  {
    id: 2,
    name: "James Otieno",
    title: "Kisumu, Kenya",
    image: "/gallery/seven.jpeg",
    colors: "from-gray-100/80 via-gray-200/90 to-gray-50/70",
    feedback:
      "Their team restored our grandparents’ grave with respect and precision. The granite work is strong, polished, and beautiful. Every detail shows true craftsmanship.",
  },
  {
    id: 3,
    name: "Mary Njeri",
    title: "Nakuru, Kenya",
    image: "/gallery/six.jpeg",
    colors: "from-amber-100/80 via-yellow-100/90 to-orange-50/70",
    feedback:
      "Professional, reliable, and heartfelt service. The floral designs were exquisite, and their dedication to detail truly honors loved ones with dignity.",
  },
  {
    id: 4,
    name: "Samuel Karanja",
    title: "Eldoret, Kenya",
    image: "/gallery/four.jpeg",
    colors: "from-orange-50/80 via-orange-100/90 to-gray-50/70",
    feedback:
      "They exceeded expectations in every way. The team was gentle, responsive, and creative — the final memorial looked timeless and full of love.",
  },
];

const Testimonials = () => {
  return (
    <section
      name="testimonials"
      className="relative max-w-[1400px] mx-auto w-full py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden"
    >
      {/* Background Glass Layer */}
      <div className="absolute inset-0 backdrop-blur-3xl opacity-20 bg-gradient-to-tr from-orange-100 via-yellow-50 to-gray-100"></div>

      {/* Header */}
      <div className="text-center mb-20 relative z-20">
        <h2 className="text-orange-500 font-semibold text-lg uppercase tracking-wide">
          Testimonials
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800 mt-2">
          Words That Warm the Heart
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
          Every stone, every flower, every inscription tells a story. Here’s
          what our clients say about the love and respect we bring to every
          project.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 relative z-20">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative bg-gradient-to-br ${testimonial.colors} p-6 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl hover:border-orange-200 transition-all duration-500 group`}
          >
            {/* Glowing Accent */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-200/50 rounded-full blur-3xl group-hover:opacity-100 opacity-0 transition-all duration-700"></div>

            {/* Image */}
            <div className="flex justify-center mb-5">
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 object-cover rounded-full shadow-lg border-4 border-white group-hover:border-orange-400 transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              />
            </div>

            {/* Feedback */}
            <p className="text-gray-800 italic mb-4 leading-relaxed text-center">
              “{testimonial.feedback}”
            </p>

            {/* Name & Location */}
            <div className="text-center mt-4">
              <h4 className="font-bold text-lg text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>

            {/* Light shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Floating Decoratives */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-yellow-100/50 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Testimonials;
