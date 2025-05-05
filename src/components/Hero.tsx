import { Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        background: "linear-gradient(135deg, #4ade80 0%, #059669 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-full h-full opacity-10">
          {/* Abstract dental pattern - using CSS for the pattern instead of SVG */}
          <div className="absolute h-64 w-64 rounded-full border-8 border-white top-20 right-20"></div>
          <div className="absolute h-32 w-32 rounded-full border-4 border-white bottom-40 left-20"></div>
          <div className="absolute h-48 w-48 rounded-full border-6 border-white top-1/2 left-1/3"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
              Your Smile, Our Passion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 leading-relaxed max-w-xl">
              At Munde Dental Clinic, we provide exceptional dental care in a
              comfortable environment, using the latest technology to ensure
              your perfect smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center group"
              >
                Book Appointment
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </button>
              <a
                href="tel:+918262087955"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2" size={20} />
                Call Us Now
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
              <img
                src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Happy dental patient"
                className="w-full h-auto max-w-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900 to-transparent p-6">
                <div className="text-white">
                  <p className="font-bold text-lg">Modern Dental Care</p>
                  <p className="text-emerald-100">
                    Advanced technology for your comfort
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
