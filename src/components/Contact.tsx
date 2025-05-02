import React, { useState } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user types
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined,
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to a server
      console.log("Form submitted:", formData);

      // Show success message
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-emerald-500" />,
      title: "Our Location",
      content:
        "Munde Dental Clinic, Near Anna Idali, Manish Nagar, Somalwada, Nagpur, Maharashtra, India 440015",
    },
    {
      icon: <Clock className="text-emerald-500" />,
      title: "Opening Hours",
      content: "Mon-Fri: 8am-6pm | Sat: 9am-2pm | Sun: Closed",
    },
    {
      icon: <Phone className="text-emerald-500" />,
      title: "Phone Number",
      content: "+918262087955",
    },
    {
      icon: <Mail className="text-emerald-500" />,
      title: "Email Address",
      content: "dr.mundedentalclinic@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            We're here to answer your questions and help you schedule an
            appointment. Reach out to us using the form below or contact
            information.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Get in Touch
                </h3>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 mb-6">
                    <p className="font-medium">Thank you for contacting us!</p>
                    <p>We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Your email"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                          errors.phone ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="service"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="">Select a service</option>
                        <option value="General Dentistry">
                          General Dentistry
                        </option>
                        <option value="Cosmetic Dentistry">
                          Cosmetic Dentistry
                        </option>
                        <option value="Orthodontics">Orthodontics</option>
                        <option value="Oral Surgery">Oral Surgery</option>
                        <option value="Periodontics">Periodontics</option>
                        <option value="Pediatric Dentistry">
                          Pediatric Dentistry
                        </option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Tell us more about your dental needs"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-800 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="mr-4">
                        <div className="p-3 bg-emerald-100 rounded-full">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-emerald-600 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Hospital Information
                </h3>
                <p className="opacity-90">
                  Munde Dental Clinic is a state-of-the-art dental facility
                  providing comprehensive dental care.
                </p>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Facility Features
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>
                      • 10 treatment rooms with advanced dental technology
                    </li>
                    <li>• Dedicated children's area with entertainment</li>
                    <li>• Comfortable waiting area with refreshments</li>
                    <li>• Wheelchair accessible throughout</li>
                    <li>• Free parking available for patients</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Insurance & Payment
                  </h4>
                  <p className="text-gray-600">
                    We accept most major insurance plans and offer flexible
                    payment options. Please contact our office for specific
                    details about your coverage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Emergency Care
                  </h4>
                  <p className="text-gray-600">
                    For dental emergencies during business hours, please call us
                    directly. For after-hours emergencies, call our main number
                    for instructions on reaching our on-call dentist.
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

export default Contact;
