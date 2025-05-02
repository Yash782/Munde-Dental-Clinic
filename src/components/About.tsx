import { Check } from "lucide-react";

const About = () => {
  const features = [
    "State-of-the-art dental equipment",
    "Comfortable and welcoming environment",
    "Experienced and caring dental team",
    "Flexible scheduling and emergency care",
    "Comprehensive treatment options",
    "Focus on preventative dental health",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Dental clinic interior"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-4">
                    <span className="text-3xl font-bold text-emerald-600">
                      20+
                    </span>
                  </div>
                  <div className="ml-4">
                    <span className="block font-semibold text-gray-800">
                      Years of
                    </span>
                    <span className="block font-semibold text-gray-800">
                      Excellence
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Munde Dental Clinic
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded in 2002, Munde Dental Clinic has been providing
              exceptional dental care to our community for over 20 years. Our
              mission is to create healthy, beautiful smiles in a comfortable
              and welcoming environment.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We take pride in our team of highly skilled dental professionals
              who are dedicated to delivering personalized care using the latest
              techniques and technologies in dentistry. Our approach focuses on
              preventative care, patient education, and minimally invasive
              treatments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <Check size={16} className="text-emerald-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-emerald-700 transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
