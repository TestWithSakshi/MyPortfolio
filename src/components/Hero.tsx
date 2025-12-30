import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 pb-20">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-green-400 block">Quality Assurance</span>
            <span className="text-white block">Professional</span>
          </motion.h1>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hi, I'm <span className="font-semibold text-white">Sakshi</span> - A passionate QA professional with over 
            <span className="font-semibold text-green-400"> 6 years of experience</span> in 
            ensuring software excellence and delivering quality products.
          </motion.p>

          {/* Three Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-lg font-bold text-white mb-2">Chandigarh</h3>
              <p className="text-gray-400 text-sm">Indian QA professional</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Quick Response</h3>
              <p className="text-gray-400 text-sm">I'll reach out within 2 hours max!</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Quality Focus</h3>
              <p className="text-gray-400 text-sm">Passionate about delivering excellence</p>
            </motion.div>
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-5xl mx-auto"
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.8 + index * 0.08,
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)' }}
                  className="px-5 py-2 bg-transparent border-2 border-green-500 rounded-full text-sm md:text-base 
                           font-medium text-green-400 hover:bg-green-500/10 hover:text-green-300 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6"
          >
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-green-500 text-black px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:bg-green-400 transition-all duration-300"
            >
              <Mail size={22} />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex justify-center gap-6 pt-6 pb-8"
          >
            <motion.a
              href="https://linkedin.com/in/sakshi-jindal-sj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-blue-600/20 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>

            <motion.a
              href="https://github.com/TestWithSakshi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-slate-800/40 border border-slate-700 text-gray-300 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;