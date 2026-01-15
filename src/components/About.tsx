import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [bugDetection, setBugDetection] = useState(0);

  useEffect(() => {
    // Counter animation for experience
    const experienceInterval = setInterval(() => {
      setExperience(prev => {
        if (prev >= 6) {
          clearInterval(experienceInterval);
          return 6;
        }
        return prev + 1;
      });
    }, 200);

    // Counter animation for projects
    const projectsInterval = setInterval(() => {
      setProjects(prev => {
        if (prev >= 10) {
          clearInterval(projectsInterval);
          return 10;
        }
        return prev + 1;
      });
    }, 150);

    // Counter animation for bug detection
    const bugInterval = setInterval(() => {
      setBugDetection(prev => {
        if (prev >= 99) {
          clearInterval(bugInterval);
          return 99;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(projectsInterval);
      clearInterval(bugInterval);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about delivering excellence through comprehensive testing strategies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-1"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a dedicated Quality Assurance professional with over 6 years of experience,
              I've successfully delivered quality across 10+ major projects for global brands.
              My expertise spans from manual testing to automated solutions, with proven results including a
              <span className="text-green-400 font-semibold"> 40% reduction in bug escape rate</span> and
              <span className="text-green-400 font-semibold"> 80% automation coverage</span> in enterprise environments.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about implementing cutting-edge testing methodologies, mentoring
              teams (5+ QA professionals), and driving continuous improvement in software quality. My approach combines
              technical expertise with strategic thinking to deliver exceptional results and ensure software reliability
              across diverse industries.
            </p>


            <div className="flex flex-wrap gap-3 mt-6">
              {['Manual Testing', 'Automation Testing', 'API Testing',
                'Mobile Testing', 'DevOps Integration'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-green-400 text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            {/* Clean Quote Card - Parallel to Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-slate-900/80 backdrop-blur-sm border border-gray-200 dark:border-green-500/30 rounded-xl p-8 overflow-hidden shadow-xl dark:shadow-none"
            >
              {/* Animated gradient border effect */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-xl opacity-20 blur-sm"
              />

              <div className="relative z-10 text-center">
                {/* Name and Title */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sakshi Jindal</h3>
                  <p className="text-green-400 text-lg font-semibold">Senior QA Automation Engineer</p>
                </motion.div>

                {/* Quote */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-300 font-medium italic text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
                >
                  "Quality is not an act, it is a habit. I believe in creating sustainable testing practices that ensure long-term software excellence."
                </motion.p>

                {/* Animated Keywords */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex gap-4 justify-center flex-wrap"
                >
                  {['Excellence', 'Innovation', 'Quality'].map((keyword, idx) => (
                    <motion.div
                      key={keyword}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.9 + (idx * 0.15),
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: 3
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="px-5 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-green-400/40 text-green-300 font-semibold text-sm shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                    >
                      {keyword}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards - Full Width with Counter Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {[
            { icon: '🎖️', title: `${experience}+`, subtitle: 'Years', description: 'Quality Assurance Experience' },
            { icon: '👥', title: `${projects}+`, subtitle: 'Projects', description: 'Successfully Delivered' },
            { icon: '🎯', title: `${bugDetection}%`, subtitle: '', description: 'Bug Detection Rate' },
            { icon: '⚡', title: 'Agile', subtitle: 'Expert', description: 'Scrum & DevOps Methodologies' },
          ].map((item, index) => (
            <motion.div
              key={item.description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-slate-900/70 backdrop-blur-sm border border-gray-200 dark:border-slate-800 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group cursor-default shadow-sm"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {item.title} {item.subtitle && <span className="text-2xl">{item.subtitle}</span>}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;