import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Chandigarh University',
      location: 'India',
      period: 'Passed out in 2020',
    },
  ];

  const certifications = [
    {
      name: 'Selenium - Java',
      issuer: 'Udemy',
      year: '2023',
      description: 'Comprehensive course covering Selenium WebDriver with Java for web application testing, including frameworks like TestNG and Maven.',
    },
    {
      name: 'Tricentis Tosca Automation Specialist',
      issuer: 'Tricentis',
      year: '2020',
      description: 'Certification validating expertise in using Tricentis Tosca for model-based test automation and risk-based testing approaches.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & <span className="text-green-400">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in quality assurance
          </p>
        </motion.div>

        {/* Academic Background */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-12 flex items-center gap-3 justify-center"
          >
            <span className="text-green-400 text-3xl">🎓</span>
            Academic Background
          </motion.h3>

          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
              >
                <h4 className="text-2xl font-bold text-white mb-3">{edu.degree}</h4>
                <h5 className="text-lg font-semibold text-green-400 mb-4">{edu.institution}</h5>
                
                <div className="flex flex-wrap gap-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-green-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-green-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-12 flex items-center gap-3 justify-center"
          >
            <span className="text-green-400 text-3xl">🏅</span>
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white flex-1">{cert.name}</h4>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-sm font-semibold ml-3 whitespace-nowrap">
                    {cert.year}
                  </span>
                </div>
                <h5 className="text-green-400 font-semibold mb-3">{cert.issuer}</h5>
                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;