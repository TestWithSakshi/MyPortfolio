import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-900 dark:text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
              Thanks for Taking a Look! 🙏
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Always learning, always testing, always growing.
            </p>
          </div>

          <div className="border-t border-gray-300 dark:border-gray-800 pt-8 mt-8">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © 2025 Sakshi Jindal. All rights reserved. Built with passion for quality.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;