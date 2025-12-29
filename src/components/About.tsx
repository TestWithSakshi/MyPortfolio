import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Passionate about delivering excellence through comprehensive testing strategies
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As a dedicated Quality Assurance professional with over a decade of experience, My expertise spans from manual testing to automated solutions, and quality process optimization. I specialize in creating robust testing frameworks and ensuring software reliability across diverse industries.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm passionate about implementing cutting-edge testing methodologies, mentoring teams, and driving continuous improvement in software quality. My approach combines technical expertise with strategic thinking to deliver exceptional results.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
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

          {/* Right Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 w-full text-white shadow-2xl"
            >
              <img
                src="https://i.postimg.cc/5yz6ZqK8/1722005309427.jpg"
                alt="Vidhya Shankar (Vid)"
                className="w-full h-80 object-cover rounded-2xl mb-8"
              />
              <h3 className="text-3xl font-bold mb-6">Vidhya Shankar (Vid)</h3>
              <p className="text-lg leading-relaxed font-light">
                "Quality is not an act, it is a habit. I believe in creating sustainable testing practices that ensure long-term software excellence."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
              <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;