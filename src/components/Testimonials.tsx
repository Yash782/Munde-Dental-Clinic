import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer Smith",
      quote:
        "I used to be terrified of dental visits until I found SmileCare. Dr. Johnson and her team make me feel so comfortable. My smile has never looked better!",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      id: 2,
      name: "Robert Williams",
      quote:
        "The entire staff is friendly and professional. I had a dental emergency and they got me in right away. Dr. Chen explained everything clearly and fixed my issue painlessly.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      quote:
        "Taking my children to the dentist used to be a struggle, but Dr. Martinez is amazing with kids. Now they actually look forward to their dental appointments!",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      quote:
        "I had a complex dental surgery with Dr. Wilson and the experience was much better than I expected. The follow-up care was exceptional too.",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
          className={`w-5 h-5 ${
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
      className="py-20 bg-white"
      style={{
        background: "linear-gradient(to bottom, #f3f4f6 0%, white 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            We're proud to have earned the trust and satisfaction of our
            patients. Here's what they have to say about their experiences at
            Munde Dental Clinic.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="absolute top-8 left-8 opacity-10">
                <Quote size={80} className="text-emerald-600" />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-100">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <p className="text-gray-600 italic mb-6 text-lg">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              2500+
            </div>
            <div className="text-gray-700 font-medium">Happy Patients</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">20+</div>
            <div className="text-gray-700 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">15</div>
            <div className="text-gray-700 font-medium">Dental Experts</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">99%</div>
            <div className="text-gray-700 font-medium">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
