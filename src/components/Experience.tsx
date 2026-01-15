import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior QA Engineer',
      company: 'Aviso AI',
      location: 'Remote',
      period: 'Jul 2025 - Present',
      description: 'Leading automation strategy for UI and API testing by designing scalable frameworks using Playwright, TypeScript, and Cucumber. Automated 1,000+ test cases, reducing manual regression efforts by approximately 75%. Improved test execution stability, performance, and coverage across critical business workflows.',
      technologies: ['Playwright', 'TypeScript', 'Cucumber', 'Robot Framework', 'Python', 'CI/CD', 'Jenkins'],
    },
    {
      title: 'Senior Software Engineer',
      company: 'PureSoftware',
      location: 'Noida, India',
      period: 'Jul 2024 - Jul 2025',
      description: 'Designed and implemented scalable automation testing frameworks (Playwright, TestNG, Cucumber), executing 1,000+ UI/API test cases, reducing manual regression efforts by 80%. Integrated 200+ unit-level validations into cloud-based CI/CD pipelines using Git and Jenkins, enabling a shift-left approach that resolved bugs 30% faster.',
      technologies: ['Playwright', 'TestNG', 'Cucumber', 'Selenium', 'Java', 'TypeScript', 'Jenkins', 'Git', 'JIRA', 'qTest'],
    },
    {
      title: 'Test Automation Engineer',
      company: 'Globant',
      location: 'Pune, India',
      period: 'Jun 2022 - May 2024',
      description: 'Built and maintained a modular automation suite using Java, Selenium, Playwright, Maven, and TestNG, executing 800+ test cases per release, reducing bug leakage by 35%. Delivered a POC for SAP-based applications, validating feasibility of framework-driven regression testing and reducing execution time by 50%.',
      technologies: ['Java', 'Selenium', 'Playwright', 'Maven', 'TestNG', 'REST Assured', 'MySQL', 'Tosca', 'JIRA', 'Confluence'],
    },
    {
      title: 'Programmer Analyst (QA)',
      company: 'Cognizant Technology Solutions',
      location: 'Gurgaon, India',
      period: 'Aug 2020 - Jun 2022',
      description: 'Designed and implemented automation test scenarios using Tosca for enterprise web applications. Reported and tracked 50+ high-priority defects in JIRA, improving resolution time by 25%. Defined test strategies and mentored 20+ junior QA engineers on automation best practices.',
      technologies: ['Tosca', 'JIRA', 'qTest', 'Maven', 'Git', 'SQL'],
    },
    {
      title: 'Programmer Analyst Intern (QA)',
      company: 'Cognizant Technology Solutions',
      location: 'Pune, India',
      period: 'Jan 2020 - May 2020',
      description: 'Performed 100+ systematized test scripts using Tosca for high-availability applications. Supported defect reporting and regression testing cycles, improving release stability by 50%.',
      technologies: ['Tosca', 'Manual Testing', 'Regression Testing'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-green-400">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Years of delivering quality software through comprehensive testing strategies
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-cyan-500 to-blue-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:justify-between`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-black to-primary-600 dark:from-primary-400 dark:to-primary-300 rounded-full border-4 border-gray-50 dark:border-black shadow-lg z-10"></div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    } ml-12 md:ml-0`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">{exp.company}</h4>
                      </div>
                      <Briefcase className="text-primary-600 dark:text-primary-400 w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;