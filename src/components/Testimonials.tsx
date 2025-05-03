import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Pradyumna Doibale",
      quote:
        "I had an excellent experience at Dr Munde's dental clinic! The staff was extremely professional, welcoming, and caring throughout my visit. The clinic is clean, well-equipped with modern technology, and follows strict hygiene standards.",
      rating: 5,
    },
    {
      id: 2,
      name: "Vrushan Waghmare",
      quote:
        "I recently had the pleasure of visiting Dr. Munde's clinic, and I cannot express enough how wonderful my experience was! Dr. Munde took the time to explain my treatment options in detail. Their approach is both professional and compassionate.",
      rating: 5,
    },
    {
      id: 3,
      name: "Vijay Nagrale",
      quote:
        "I had a fractured tooth and visited Munde Dental Clinic for treatment. Dr. Shrinivas Munde diagnosed the issue promptly and recommended a Root Canal Treatment. The entire procedure was handled with great care and precision.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ));
  };

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-gray-100 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're proud to have earned the trust and satisfaction of our
            patients.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-row items-center">
              <button
                onClick={handlePrev}
                className="p-1 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors duration-300 mr-4 flex-shrink-0"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Quote size={20} className="text-emerald-500 mr-2" />
                    <span className="font-semibold text-gray-800">
                      {testimonials[currentIndex].name}
                    </span>
                  </div>
                  <div className="flex">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>

              <button
                onClick={handleNext}
                className="p-1 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors duration-300 ml-4 flex-shrink-0"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
