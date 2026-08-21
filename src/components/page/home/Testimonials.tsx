import { testimonials } from "@/data/testimonials";
export default function Testimonials() {
  return (
    <section className="py-8 md:py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2 dark:text-white">
        Opinion <span className="text-indigo-600 dark:text-cyan-400">of Our</span> Students
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        Read real feedback from students who transformed their skills and careers with EduMart
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 text-left rounded-lg shadow-xs hover:border-indigo-500/50 transition duration-300 space-y-3 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-indigo-600 dark:text-cyan-400">
                {testimonial.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>

            <div className="flex items-center pt-3 border-t border-gray-100 dark:border-gray-800">
              <img
                src="/men-1.jpg"
                alt={testimonial.name}
                className="w-10 h-10 rounded-md object-cover mr-3 border border-gray-200 dark:border-gray-800"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
