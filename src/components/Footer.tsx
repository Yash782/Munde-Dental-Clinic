import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">
                Munde Dental Clinic
              </h3>
              <p className="mb-4 text-gray-300">
                Providing exceptional dental care for all ages in a comfortable
                and welcoming environment.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    General Dentistry
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Cosmetic Dentistry
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Orthodontics
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Oral Surgery
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Periodontics
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    Pediatric Dentistry
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Office Hours
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-4">
                <p className="text-white font-semibold">
                  Emergency Care Available
                </p>
                <p className="text-emerald-400 font-bold">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Munde Dental Clinic. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-emerald-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
