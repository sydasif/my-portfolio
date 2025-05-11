import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Network Utilities Web Application",
      description: "A Django-based web application that provides various network utilities and tools for IP address management and network testing.",
      techStack: ["Django", "Netutils"],
      image: "https://placehold.co/600x400/2563eb/ffffff?text=Network+Utilities "
    },
    {
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce platform with real-time inventory tracking and secure payment integration.",
      techStack: ["Next.js", "MongoDB", "Stripe API"],
      image: "https://placehold.co/600x400/0891b2/ffffff?text=E-Commerce+Platform "
    },
    {
      title: "Task Management Tool",
      description: "Created a collaborative task management tool with drag-and-drop interface and team collaboration features.",
      techStack: ["Vue.js", "Firebase", "Vuetify"],
      image: "https://placehold.co/600x400/7c3aed/ffffff?text=Task+Manager "
    },
    {
      title: "Weather Dashboard",
      description: "Designed a responsive weather dashboard integrating OpenWeatherMap API with live data visualization charts.",
      techStack: ["Angular", "Chart.js", "OpenWeatherMap"],
      image: "https://placehold.co/600x400/db2777/ffffff?text=Weather+Dashboard "
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold text-indigo-600">JohnDoe.dev</a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm font-medium capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-gray-600 hover:text-indigo-500'
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                    activeSection === section
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Hi, I'm Syed Asif
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg">
                Passionate NetDevOps Engineer specializing in Cisco Network Automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-md">
                  Contact Me
                </a>
                <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition transform hover:scale-105 shadow-md">
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/400x400/6366f1/ffffff?text=John+Doe "
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover shadow-xl transform transition duration-500 hover:rotate-3 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  With over 5 years of experience in software development, I specialize in building high-performance web applications, AI-driven systems, and cloud-native solutions.
                </p>
                <p className="text-lg text-gray-700">
                  My journey began with a passion for problem-solving and has evolved into crafting elegant digital experiences that solve real-world challenges. I thrive in environments where innovation meets execution.
                </p>
                <p className="text-lg text-gray-700">
                  I am constantly exploring emerging technologies and methodologies to stay at the forefront of the ever-evolving tech landscape.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🧠", label: "Network Automation", value: "Advanced" },
                  { icon: "📊", label: "Ansible & Python", value: "Intermediate" },
                  { icon: "☁️", label: "Linux & DevOps", value: "Proficient" },
                  { icon: "💻", label: "Backend Development", value: "Beginner" }
                ].map((skill, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <h3 className="font-semibold text-lg text-gray-800">{skill.label}</h3>
                    <p className="text-sm text-gray-500">{skill.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education Background</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200 hidden md:block"></div>

              <div className="space-y-12">
                {[
                  {
                    degree: "Bachelor of Science in Computer Science",
                    school: "Stanford University",
                    year: "2015 - 2019",
                    gpa: "3.9/4.0",
                    honors: "Dean's List, Research Scholarship"
                  },
                  {
                    degree: "Advanced Certification in Machine Learning",
                    school: "MIT Online",
                    year: "2020",
                    gpa: "",
                    honors: "Capstone Project Finalist"
                  },
                  {
                    degree: "Software Engineering Bootcamp",
                    school: "Hack Reactor",
                    year: "2019",
                    gpa: "",
                    honors: "Top 5% Graduate"
                  }
                ].map((edu, idx) => (
                  <div key={idx} className="md:flex items-start group">
                    <div className="flex items-center md:block mb-4 md:mb-0">
                      <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4 md:mr-0 md:mb-4">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-gray-500 md:hidden ml-2">{edu.year}</span>
                    </div>
                    <div className="md:ml-8 flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow transition-transform group-hover:translate-x-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                        <span className="text-sm text-gray-500 hidden md:block">{edu.year}</span>
                      </div>
                      <p className="text-indigo-600 font-medium mt-1">{edu.school}</p>
                      {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
                      <p className="text-sm text-gray-500 mt-2">{edu.honors}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href="https://github.com/sydasif/django-network-app" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-indigo-600 p-8 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                  <p className="text-indigo-100 mb-6">Let's work together! Feel free to reach out for collaborations or questions.</p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>New York, USA</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none"></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-indigo-400">JohnDoe.dev</h3>
              <p className="text-gray-400 mt-2">Crafting exceptional digital experiences since 2019</p>
            </div>
            <div className="flex space-x-6">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
