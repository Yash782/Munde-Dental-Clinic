import { Smile, Star, Shield, Heart, Activity, Medal } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "General Dentistry",
      description:
        "Comprehensive dental exams, cleanings, fillings, and preventative care for the whole family.",
      icon: <Smile size={32} className="text-emerald-500" />,
    },
    {
      id: 2,
      title: "Cosmetic Dentistry",
      description:
        "Teeth whitening, veneers, and other procedures to enhance your smile and confidence.",
      icon: <Star size={32} className="text-emerald-500" />,
    },
    {
      id: 3,
      title: "Orthodontics",
      description:
        "Traditional braces and clear aligners to straighten teeth and correct bite issues.",
      icon: <Shield size={32} className="text-emerald-500" />,
    },
    {
      id: 4,
      title: "Oral Surgery",
      description:
        "Extractions, implants, and other surgical procedures performed with precision and care.",
      icon: <Heart size={32} className="text-emerald-500" />,
    },
    {
      id: 5,
      title: "Periodontics",
      description:
        "Treatment for gum disease and comprehensive care for the supporting structures of teeth.",
      icon: <Activity size={32} className="text-emerald-500" />,
    },
    {
      id: 6,
      title: "Pediatric Dentistry",
      description:
        "Child-friendly dental care in a comfortable environment designed for young patients.",
      icon: <Medal size={32} className="text-emerald-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Dental Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            We provide comprehensive dental care using state-of-the-art
            technology and techniques to ensure the best outcomes for our
            patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="p-6">
                <div className="h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-block text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            Schedule Your Service Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
