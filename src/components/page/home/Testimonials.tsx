import { testimonials } from "@/data/testimonials";
export default function Testimonials() {
  return (
    <div className="text-center mt-[100px]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 dark:text-white">
        Opinion <span className="text-sky-500">of Our</span> Pupils
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-sky-200 p-6 text-left rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            <h3 className="text-lg font-bold text-sky-500">
              {testimonial.title}
            </h3>
            <p className="text-gray-600 mt-2">{testimonial.text}</p>

            <div className="flex items-center mt-4">
              <img
                src="/men-1.jpg"
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
