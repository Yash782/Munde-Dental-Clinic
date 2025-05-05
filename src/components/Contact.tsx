// src/components/Contact.tsx
import React, { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

// Replace these with your EmailJS credentials
const SERVICE_ID = "service_a12npdi";
const TEMPLATE_ID = "template_aow8kot";
const PUBLIC_KEY = "g0T9lNqlPJs8bnNWt";

interface FormData {
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

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load EmailJS script & init
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      window.emailjs.init(PUBLIC_KEY);
    };
    return () => {
      document.body.contains(script) && document.body.removeChild(script);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    if (!formRef.current) return;

    setIsLoading(true);
    try {
      await window.emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current);
      setIsSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
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
      content: "Mon–Sun: 10am–9pm",
    },
    {
      icon: <Phone className="text-emerald-500" />,
      title: "Phone Number",
      content: "+91 82620 87955",
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
            appointment. Reach out using the form or our contact details below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Column */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h3>

              {isSubmitted && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-4 mb-6">
                  <p className="font-medium">
                    Thank you for contacting us! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Service */}
                <div>
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
                    <option value="General Dentistry">General Dentistry</option>
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

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Tell us more about your dental needs"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                    isLoading
                      ? "bg-emerald-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-emerald-100 rounded-full">
                      {item.icon}
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
}
