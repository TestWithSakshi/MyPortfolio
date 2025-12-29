import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-24">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-6">
          {/* Greeting Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              G'day ladies, gents, and all you top mates out there! 👋
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Welcome to my little corner of the web! I'm <span className="font-semibold text-green-400">Vid</span>, your friendly QA mate who's 
              passionate about delivering <span className="font-semibold text-cyan-400">top-notch quality</span>. Whether you're here for a quick 
              squiz or a deep dive into my work, I'm stoked to have you aboard. Let's make something brilliant together! 🚀
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6"
          >
            <span className="text-green-400">Quality Assurance</span>
            <br />
            <span className="text-white">Professional</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold mb-2">📍</div>
              <h3 className="text-lg font-bold text-white mb-1">Sydney Based</h3>
              <p className="text-gray-400 text-sm">Australian QA professional</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold mb-2">⚡</div>
              <h3 className="text-lg font-bold text-white mb-1">Quick Response</h3>
              <p className="text-gray-400 text-sm">I'll reach out within 3 hours max!</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold mb-2">🎯</div>
              <h3 className="text-lg font-bold text-white mb-1">Quality Focus</h3>
              <p className="text-gray-400 text-sm">Passionate about delivering excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-6 max-w-5xl mx-auto"
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
                    delay: 0.9 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  className="relative px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full text-sm md:text-base 
                           font-medium text-gray-300 hover:text-green-400 transition-colors duration-300
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
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-6"
          >
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-cyan-500 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.a
                href="https://linkedin.com/in/vidhyashankarn"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-900 border border-slate-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-blue-600"
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
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-slate-900 border border-slate-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gray-700"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="pt-6"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 flex justify-center"
            >
              <ArrowDown size={24} />
            </motion.div>
            <p className="text-sm text-gray-500 mt-2">Explore below</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;