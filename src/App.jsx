import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Apply dark mode class to html tag and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Scroll tracking
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
      techStack: ["Django", "Netutils", "Python"],
      image: "https://placehold.co/600x400/2563eb/ffffff?text=Network+Utilities  ",
      link: "https://github.com/sydasif/django-network-app "
    },
    {
      title: "Django Network Device Manager",
      description: "A Django application for network device management using Netmiko library. This tool provides a web interface for managing and interacting with network devices through SSH connections.",
      techStack: ["Django", "Python", "Netmiko"],
      image: "https://placehold.co/600x400/10b981/ffffff?text=Network+Manager ",
      link: "https://github.com/sydasif/django_network_manager "
    },
    {
      title: "Resume Template",
      description: "A professional resume generator that converts JSON data into a beautifully formatted HTML and PDF resume. The project uses Jinja2 templates for HTML generation and pdfkit for PDF conversion.",
      techStack: ["Python", "HTML", "Json"],
      image: "https://placehold.co/600x400/7c3aed/ffffff?text=Resume+Generator  ",
      link: "https://github.com/sydasif/resume_template "
    },
    {
      title: "Python for Network Automation",
      description: "Learn Network Programmability with Python, GNS3, and Cisco devices.",
      techStack: ["Python", "Cisco", "GNS3"],
      image: "https://placehold.co/600x400/db2777/ffffff?text=Python+Book  ",
      link: "https://python-automation-book.readthedocs.io/en/latest/ "
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 dark:bg-gray-800 dark:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">NetDevOps Engineer</a>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-sm font-medium capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                      : 'text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400'
                  }`}
                >
                  {section}
                </a>
              ))}
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300"
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
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${
                    activeSection === section
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300'
                      : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen flex items-center dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-1/2 mt-10 md:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight dark:text-white">
                Hi, I'm Syed Asif
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg dark:text-gray-300">
                Passionate NetDevOps Engineer specializing in Cisco Network Automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-md">
                  Contact Me
                </a>
                <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition transform hover:scale-105 shadow-md dark:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-gray-600">
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/400x400/6366f1/ffffff?text=Syed+Asif  "
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover shadow-xl transform transition duration-500 hover:rotate-3 hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center dark:text-white">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Associate Engineer (DAE in Electronics) exploring network automation, my skills as an Associate Engineer include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 dark:text-gray-300">
                  <li>Routing and Switching</li>
                  <li>OFC/LAN Networking</li>
                  <li>IP Addressing and Sub-netting</li>
                  <li>Computer Basics - Windows 7/10</li>
                  <li>Linux and Ubuntu Desktop/Server</li>
                  <li>VMware/KVM/VirtualBox</li>
                  <li>Docker/Vagrant - Hands On</li>
                  <li>Ansible for Network Automation</li>
                  <li>Python for Network Automation</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "🧠", label: "Network Automation", value: "Advanced" },
                  { icon: "📊", label: "Ansible & Python", value: "Intermediate" },
                  { icon: "☁️", label: "Linux & DevOps", value: "Proficient" },
                  { icon: "💻", label: "Backend Development", value: "Beginner" }
                ].map((skill, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:shadow dark:hover:shadow-indigo-900/30">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{skill.label}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center dark:text-white">Education Background</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200 hidden md:block dark:bg-indigo-700"></div>
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
                      <span className="text-sm text-gray-500 dark:text-gray-400 md:hidden ml-2">{edu.year}</span>
                    </div>
                    <div className="md:ml-8 flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow transition-transform group-hover:translate-x-2 dark:bg-gray-700 dark:shadow dark:hover:shadow-indigo-900/30">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                        <span className="text-sm text-gray-500 hidden md:block dark:text-gray-400">{edu.year}</span>
                      </div>
                      <p className="text-indigo-600 font-medium mt-1 dark:text-indigo-400">{edu.school}</p>
                      {edu.gpa && <p className="text-sm text-gray-600 mt-1 dark:text-gray-300">GPA: {edu.gpa}</p>}
                      <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">{edu.honors}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center dark:text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 dark:bg-gray-800 dark:shadow dark:hover:shadow-indigo-900/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 mb-4 dark:text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300">
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
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center dark:text-white">Get In Touch</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-700 dark:shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-indigo-600 p-8 text-white flex flex-col justify-center dark:bg-indigo-700">
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
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Subject</label>
                      <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition dark:bg-gray-800 dark:border-gray-600 dark:text-white" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Message</label>
                      <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition resize-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition transform hover:scale-[1.02] shadow-md hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
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
      <footer className="bg-gray-800 text-white py-10 dark:bg-gray-900 dark:text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-indigo-400">JohnDoe.dev</h3>
              <p className="text-gray-400 mt-2 dark:text-gray-500">Crafting exceptional digital experiences since 2019</p>
            </div>
            <div className="flex space-x-6">
              {['GitHub', 'LinkedIn', 'Twitter'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm dark:border-gray-700">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
