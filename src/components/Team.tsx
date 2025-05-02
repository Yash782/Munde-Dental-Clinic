interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Dr. Emily Johnson",
      role: "Chief Dentist",
      bio: "Dr. Johnson has over 15 years of experience in general and cosmetic dentistry. She specializes in smile makeovers and complex restorative cases.",
      image:
        "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      bio: "Dr. Chen is an expert in modern orthodontic techniques, including clear aligners and traditional braces. He focuses on creating beautiful, functional smiles.",
      image:
        "https://images.pexels.com/photos/5438504/pexels-photo-5438504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Dr. Sarah Martinez",
      role: "Pediatric Dentist",
      bio: "Dr. Martinez specializes in caring for children's dental health. Her gentle approach helps children develop positive associations with dental care.",
      image:
        "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "Oral Surgeon",
      bio: "Dr. Wilson performs complex extractions, dental implant surgeries, and other oral procedures with precision and a focus on patient comfort.",
      image:
        "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Our team of experienced dental professionals is committed to
            providing you with the highest quality care in a comfortable
            environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
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
