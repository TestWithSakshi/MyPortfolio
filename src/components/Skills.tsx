import { motion } from 'framer-motion';
import { Code, Database, Users, Zap, CheckSquare, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Open Source Testing Frameworks',
      skills: [
        { name: 'Playwright', level: 85 },
        { name: 'Selenium WebDriver', level: 90 },
        { name: 'TestNG', level: 92 },
        { name: 'Cucumber', level: 88 },
      ],
    },
    {
      icon: Zap,
      title: 'Licenced Test Automation',
      skills: [
        { name: 'qTest', level: 80 },
        { name: 'TestIM', level: 75 },
        { name: 'Tosca', level: 90 },
      ],
    },
    {
      icon: CheckSquare,
      title: 'Agile & Test Management Tools',
      skills: [
        { name: 'Scrum/Kanban', level: 95 },
        { name: 'Jira/Confluence', level: 92 },
        { name: 'TestRail', level: 90 },
        { name: 'X-ray', level: 85 },
      ],
    },
    {
      icon: Database,
      title: 'API & Database Testing',
      skills: [
        { name: 'Postman', level: 90 },
        { name: 'REST Assured', level: 65 },
        { name: 'MySQL', level: 85 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      skills: [
        { name: 'Jenkins', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'GitLab CI', level: 85 },
        { name: 'GitHub Actions', level: 80 },
      ],
    },
    {
      icon: Users,
      title: 'Management & Leadership',
      skills: [
        { name: 'Team Leadership', level: 95 },
        { name: 'Test Strategy', level: 90 },
        { name: 'Mentoring', level: 95 },
        { name: 'Stakeholder Management', level: 85 },
      ],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-slate-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500">Skills</span>
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across testing frameworks, tools, and methodologies
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <motion.span
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-green-600 dark:text-green-400 font-semibold">90-100%</span> = Expert
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-green-600 dark:text-green-400 font-semibold">75-89%</span> = Advanced
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-green-600 dark:text-green-400 font-semibold">60-74%</span> = Intermediate
            </motion.span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 60px rgba(34, 197, 94, 0.3)"
              }}
              className="relative bg-gradient-to-br from-white to-gray-50 dark:from-slate-800/60 dark:to-slate-900/60 backdrop-blur-sm border-2 border-green-500/30 rounded-2xl p-6 shadow-xl overflow-hidden group"
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30"
                  >
                    <category.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                          className="text-sm text-green-600 dark:text-green-400 font-bold"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="relative h-2 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500"
                        >
                          <motion.div
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="mt-16 bg-gradient-to-r from-green-600/80 to-blue-600/80 backdrop-blur-sm rounded-3xl p-8 text-white shadow-2xl shadow-green-500/20 border border-green-500/30"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Additional Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-bold text-lg mb-3">Testing Methodologies / Testing Types</h4>
              <p className="text-white/90 text-sm leading-relaxed">Black Box, Exploratory Testing, Risk-Based Testing, Regression Testing, UAT Testing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-bold text-lg mb-3">Industry Domains</h4>
              <p className="text-white/90 text-sm leading-relaxed">E-commerce, Logistics, FinTech, SaaS, Mobile Apps, Enterprise Software</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-bold text-lg mb-3">Quality Standards</h4>
              <p className="text-white/90 text-sm leading-relaxed">ISTQB Guidelines, IEEE Standards</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;