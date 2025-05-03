interface Doctor {
  name: string;
  role: string;
}

const Team = () => {
  const doctor: Doctor = {
    name: "Dr. Shrinivas Munde",
    role: "Chief Dentist",
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Doctor
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Our experienced dental professional is dedicated to providing you
            with the highest quality care in a welcoming and comfortable
            environment.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {doctor.name}
          </h3>
          <p className="text-emerald-600 font-medium">{doctor.role}</p>
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                We're Always Welcoming New Patients
              </h3>
              <p className="text-emerald-100">
                Join our dental family and experience the difference quality
                dental care can make.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-emerald-50 transition-all duration-300"
            >
              Book Your First Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
