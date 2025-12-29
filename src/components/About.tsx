import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about delivering excellence through comprehensive testing strategies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-600 via-cyan-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
              <img
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Vidhya Shankar (Vid) - QA Professional"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Vidhya Shankar (Vid)</h3>
              <p className="text-blue-100 mb-4 font-semibold italic">
                "Quality is not an act, it is a habit. I believe in creating sustainable testing practices that ensure long-term software excellence."
              </p>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              As a dedicated Quality Assurance professional with over a decade of experience, 
              My expertise spans from manual testing to automated solutions, and quality process optimization.
              I specialize in creating robust testing frameworks and ensuring software reliability 
              across diverse industries.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about implementing cutting-edge testing methodologies, mentoring 
              teams, and driving continuous improvement in software quality. My approach combines 
              technical expertise with strategic thinking to deliver exceptional results.
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
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Cards - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {[
            { icon: '🎖️', title: '10+ Years', description: 'Quality Assurance Experience' },
            { icon: '👥', title: '13+ Projects', description: 'Successfully Delivered' },
            { icon: '🎯', title: '99.5%', description: 'Bug Detection Rate' },
            { icon: '⚡', title: 'Agile Expert', description: 'Scrum & DevOps Methodologies' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-900/70 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="text-3xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm font-medium">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;