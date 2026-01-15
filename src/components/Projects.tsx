import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce UI Automation',
      site: 'SauceDemo (SwagLabs)',
      category: '🛒 E-commerce & Retail',
      description: 'Engineered a robust hybrid test automation framework for an e-commerce platform. Automated critical user journeys including customer login, inventory browsing, cart management, and checkout workflows. Implemented Page Object Model (POM) to ensure code reusability and reduced maintenance time by 40%.',
      imageUrl: '/MyPortfolio/E-Commerce UI Automation.png',
      technologies: ['Playwright', 'TypeScript', 'Page Object Model (POM)', 'Allure Reports', 'Github Actions'],
      gradient: 'from-blue-600 to-cyan-600',
      categoryColor: 'bg-blue-500'
    },
    {
      title: 'Banking BDD Framework',
      site: 'ParaBank',
      category: '🏦 Banking & Finance',
      description: 'Designed a Behavior-Driven Development (BDD) testing suite for a digital banking simulation. Bridged the gap between technical and non-technical stakeholders by writing test scenarios in Gherkin (Plain English). Validated complex transaction logic, account creation, and fund transfers with 100% regression coverage.',
      imageUrl: '/MyPortfolio/Banking BDD Framework.png',
      technologies: ['Cucumber BDD', 'Gherkin', 'JUnit5', 'RestAssured', 'Extent Reports', 'Git'],
      gradient: 'from-green-600 to-emerald-600',
      categoryColor: 'bg-green-500'
    },
    {
      title: 'REST API Backend Testing',
      site: 'ReqRes.in & Restful Booker',
      category: '☁️ Backend Services & API',
      description: 'Developed a comprehensive API testing framework to validate RESTful endpoints independent of the frontend. Verified CRUD (Create, Read, Update, Delete) operations, validated JSON schema compliance, and improved release confidence by automating status code and payload verification.',
      imageUrl: '/MyPortfolio/REST API Backend Testing.png',
      technologies: ['RestAssured', 'Postman', 'JSON', 'Jackson API', 'Log4j', 'CI/CD'],
      gradient: 'from-purple-600 to-pink-600',
      categoryColor: 'bg-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Key projects showcasing my expertise in test automation and quality engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)' }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700 flex flex-col"
            >
              {/* Header Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-contain p-8"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<div class="text-6xl">${project.category.split(' ')[0]}</div>`;
                  }}
                />
              </div>

              {/* Category Tag */}
              <div className="px-6 pt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 dark:bg-slate-700 rounded-full mb-4">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-green-600 dark:text-green-400 mb-4">Site: {project.site}</p>
              </div>

              {/* Description */}
              <div className="px-6 flex-grow">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="px-6 pb-6 pt-4">
                <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                  <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-50 dark:bg-slate-900 text-green-600 dark:text-green-400 rounded-full text-xs font-medium border border-green-200 dark:border-green-500/30 hover:border-green-500/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

