import { motion } from 'framer-motion';
import { Linkedin as LinkedIn, Clock, Github, Mail, MessageCircle } from 'lucide-react';
import React from 'react';
import './Contact.css';

const Contact = () => {
  const resumeEmail = "sakshijindalsj059@gmail.com";

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 via-white to-black dark:from-black dark:via-slate-900 dark:to-black relative overflow-hidden transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            Let's Connect!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you're a recruiter or just curious about my work, I appreciate you exploring my portfolio. Ready to bring that Aussie spirit to your next quality challenge!
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl max-w-3xl w-full text-center border border-gray-200 dark:border-slate-700/50"
          >
            {/* WhatsApp Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50"
              >
                <MessageCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Looking for <span className="text-green-600 dark:text-green-400 font-bold">NEW QA OPPORTUNITIES</span>, testing strategy consultation, or want to discuss quality assurance best practices? Let's have a yarn!
              </p>

              {/* Response Time Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/50 rounded-full px-6 py-3 mb-8"
              >
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-bold text-lg">I'll reach out within 3 hours max!</span>
              </motion.div>
            </motion.div>

            {/* Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <motion.a
                href="https://linkedin.com/in/sakshi-jindal-sj"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300"
              >
                <LinkedIn size={22} className="group-hover:rotate-12 transition-transform" />
                <span>Connect on LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/TestWithSakshi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-3 bg-gray-900 dark:bg-slate-900 border-2 border-gray-700 dark:border-slate-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:border-green-500 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300"
              >
                <Github size={22} className="group-hover:rotate-12 transition-transform" />
                <span>View GitHub</span>
              </motion.a>
            </motion.div>

            {/* Email Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-gray-200 dark:border-slate-700/50"
            >
              <p className="text-gray-400 mb-3 text-sm">Or drop me an email:</p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 dark:bg-slate-900/50 border border-gray-200 dark:border-slate-700 rounded-xl p-4"
              >
                <a
                  href="mailto:sakshijindalsj059@gmail.com"
                  className="flex items-center justify-center gap-3 text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-lg">sakshijindalsj059@gmail.com</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;