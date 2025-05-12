import { useState, useEffect } from 'react';

// Custom Hook: useContactForm
function useContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));

    // Optionally clear error on typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Subject is required.';
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message must be at least 10 characters.';
      isValid = false;
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', form);
      setSuccessMessage('Your message has been sent successfully!');
      setForm({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }
  };

  return {
    form,
    errors,
    successMessage,
    handleChange,
    handleSubmit
  };
}

// Navbar Component
const Navbar = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  return (
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
                className={`text-sm font-medium capitalize transition-all duration-300 ${activeSection === section
                    ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                    : 'text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400'
                  }`}
              >
                {section}
              </a>
            ))}
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
                className={`block px-3 py-2 rounded-md text-base font-medium capitalize ${activeSection === section
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300'
                    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-indigo-300'
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
  );
};

// Hero Section Component
const Hero = () => {
  return (
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
            <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition transform hover:scale-105 shadow-md dark:bg-indigo-500 dark:hover:bg-indigo-600">
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
  );
};

// About Section Component
const About = () => {
  return (
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
              <li>Computer Basics - Windows 7/10</li>
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
  );
};

// Education Section Component
const Education = () => {
  return (
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
  );
};

// Projects Section Component
const Projects = ({ projects }) => {
  return (
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
  );
};

const Contact = () => {
  const { form, errors, successMessage, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center dark:text-white">Get In Touch</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden dark:bg-gray-700 dark:shadow">
          <div className="md:flex">
            {/* Left Side: Contact Info */}
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
                  </svg>
                  <span>New York, USA</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none resize-none transition dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition transform hover:scale-[1.02] shadow-md hover:shadow-lg dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Send Message
                </button>

                {/* Success Message */}
                {successMessage && (
                  <p className="text-green-600 text-center mt-4">{successMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-center">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Syd Asif. All rights reserved.
      </p>
    </footer>
  );
};

function App() {
  // State for Navbar (active section, mobile menu)
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect for scroll tracking (simplified)
  useEffect(() => {
    // Logic to update activeSection based on scroll
  }, []);

  // Placeholder project data
  const projectsData = [
    { title: "Project 1", description: "Desc 1", techStack: ["React", "Node"], image: "https://placehold.co/600x400", link: "#" },
    { title: "Project 2", description: "Desc 2", techStack: ["Python", "Flask"], image: "https://placehold.co/600x400", link: "#" }
  ];


  return (
    <div className="dark:bg-gray-900">
      <Navbar activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects projects={projectsData} /> {/* Pass placeholder data */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
