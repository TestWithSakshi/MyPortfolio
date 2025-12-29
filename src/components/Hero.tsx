import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-800"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              G'day ladies, gents, and all you top mates out there!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Welcome to my little corner of the web! I'm Vid, your friendly QA mate who's passionate about delivering top-notch quality. 
              Whether you're here for a quick squiz or a deep dive into my work, I'm stoked to have you aboard. Let's make something brilliant together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                QAMATE!🦘✨⭐
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="text-gray-900 dark:text-white">Quality Assurance</span>
            <br />
            <span className="text-gray-900 dark:text-white">Professional</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">📍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Sydney Based</h3>
              <p className="text-gray-600 dark:text-gray-300">Australian QA professional</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Quick Response</h3>
              <p className="text-gray-600 dark:text-gray-300">I'll reach out within 3 hours max!</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Quality Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">Passionate about delivering excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8 max-w-5xl mx-auto"
          >
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
              {[
                'Quality Engineering',  
                'Manual Testing',
                'Test Automation', 
                'Playwright',
                'Selenium',
                'CI/CD',
                'Agile',
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.0 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="relative px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 
                           backdrop-blur-sm border border-blue-200/30 dark:border-blue-400/30 rounded-full text-sm md:text-base 
                           font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300
                           shadow-sm hover:shadow-md cursor-default"
                >
                  <span className="relative z-10">{skill}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>

            <div className="flex items-center gap-3">
              <motion.a
                href="https://linkedin.com/in/vidhyashankarn"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="https://github.com/im-vidhyashankar"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 dark:text-gray-500 flex justify-center"
            >
              <ArrowDown size={24} />
            </motion.div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Explore below</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;