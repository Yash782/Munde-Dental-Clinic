import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClasses = `fixed w-full z-30 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  }`;

  const linkClasses = `cursor-pointer transition-colors duration-300 ${
    isScrolled
      ? "text-emerald-800 hover:text-emerald-600"
      : "text-white hover:text-emerald-200"
  }`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-emerald-600" : "text-white"
              }`}
            >
              Munde Dental Clinic
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <span
              className={linkClasses}
              onClick={() => scrollToSection("home")}
            >
              Home
            </span>
            <span
              className={linkClasses}
              onClick={() => scrollToSection("services")}
            >
              Services
            </span>
            <span
              className={linkClasses}
              onClick={() => scrollToSection("about")}
            >
              About
            </span>
            <span
              className={linkClasses}
              onClick={() => scrollToSection("team")}
            >
              Our Team
            </span>
            <span
              className={linkClasses}
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </span>
            <span
              className={linkClasses}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </span>
            <a
              href="tel:+918262087955"
              className={`flex items-center px-4 py-2 rounded-full transition-colors duration-300 ${
                isScrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-white text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <Phone size={16} className="mr-2" />
              <span className="font-medium">Emergency: +918262087955</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? "text-emerald-800" : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 bg-white p-4 rounded-lg shadow-lg">
            <span
              className="text-emerald-800 hover:text-emerald-600 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </span>
            <span
              className="text-emerald-800 hover:text-emerald-600 cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              Services
            </span>
            <span
              className="text-emerald-800 hover:text-emerald-600 cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About
            </span>
            <span
              className="text-emerald-800 hover:text-emerald-600 cursor-pointer"
              onClick={() => scrollToSection("team")}
            >
              Our Team
            </span>
            <span
              className="text-emerald-800 hover:text-emerald-600 cursor-pointer"
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </span>
            <span
              className="text-emerald-800 hover:text-emerald-600 cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </span>
            <a
              href="tel:+918262087955"
              className="flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Phone size={16} className="mr-2" />
              <span className="font-medium">Emergency: +918262087955</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
