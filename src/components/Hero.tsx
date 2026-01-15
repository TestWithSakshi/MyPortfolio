import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const Hero = () => {
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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/MyPortfolio/Sakshi_Jindal_Senior_QA_Automation_Engineer.pdf';
    link.download = 'Sakshi_Jindal_Senior_QA_Automation_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-black pt-20 pb-20 transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center space-y-8">
          {/* Profile Image with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="flex justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Animated ring around photo */}
              <motion.div
                animate={{
                  rotate: 360,
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.5)',
                    '0 0 40px rgba(34, 197, 94, 0.8)',
                    '0 0 20px rgba(34, 197, 94, 0.5)',
                  ]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                className="w-44 h-44 rounded-full absolute -inset-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-75 blur-sm"
              />

              {/* Main photo container */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl relative z-10 bg-white dark:bg-slate-900">
                <img
                  src="/MyPortfolio/sakshi-photo.png"
                  alt="Sakshi Jindal - Senior QA Automation Engineer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error('Failed to load hero photo from:', e.currentTarget.src);
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Sakshi+Jindal&size=400&background=059669&color=fff&bold=true&format=png";
                  }}
                />
              </div>

              {/* Pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-40 h-40 rounded-full absolute inset-0 border-4 border-green-400"
              />
            </motion.div>
          </motion.div>

          {/* Main Title with Enhanced Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 block"
            >
              Quality Assurance
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-900 dark:text-white block relative"
            >
              Professional
              <motion.div
                animate={{
                  scaleX: [0, 1],
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.2
                }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-500 origin-left"
              />
            </motion.span>
          </motion.h1>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Sakshi Jindal</span> - A passionate QA professional with over
            <span className="font-semibold text-green-400"> 6+ years of experience</span> in
            ensuring software excellence and delivering quality products.
          </motion.p>

          {/* Three Stat Cards with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 20px 60px rgba(34, 197, 94, 0.3)"
              }}
              className="relative bg-white dark:bg-slate-900/60 backdrop-blur-sm border-2 border-green-500/50 rounded-2xl p-8 text-center overflow-hidden group shadow-lg dark:shadow-none"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-blue-500/10"
              />
              <div className="relative z-10">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl mb-4"
                >
                  📍
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-400 transition-colors">Chandigarh</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Indian QA professional</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 20px 60px rgba(59, 130, 246, 0.3)"
              }}
              className="relative bg-white dark:bg-slate-900/60 backdrop-blur-sm border-2 border-blue-500/50 rounded-2xl p-8 text-center overflow-hidden group shadow-lg dark:shadow-none"
            >
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"
              />
              <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl mb-4"
                >
                  ⚡
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors">Quick Response</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">I'll reach out within 2 hours max!</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.3)"
              }}
              className="relative bg-white dark:bg-slate-900/60 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 text-center overflow-hidden group shadow-lg dark:shadow-none"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1.5, 1, 1.5]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-green-500/10"
              />
              <div className="relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl mb-4"
                >
                  🎯
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-400 transition-colors">Quality Focus</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Passionate about delivering excellence</p>
              </div>
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

          {/* CTA Buttons - Enhanced with Improved Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Get In Touch Button */}
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: '0 0 50px rgba(34, 197, 94, 0.9), 0 10px 30px rgba(34, 197, 94, 0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(34, 197, 94, 0.4)',
                  '0 0 30px rgba(34, 197, 94, 0.6)',
                  '0 0 20px rgba(34, 197, 94, 0.4)',
                ]
              }}
              transition={{
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { duration: 0.2 },
                y: { duration: 0.2 }
              }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-black px-12 py-4 rounded-full font-bold text-lg shadow-lg overflow-hidden hover:from-green-400 hover:to-emerald-500"
            >
              <motion.div
                animate={{
                  x: [-100, 200],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />
              <Mail size={22} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Get In Touch</span>
            </motion.button>

            {/* Download Resume Button */}
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: '0 0 50px rgba(34, 197, 94, 0.8), 0 10px 30px rgba(34, 197, 94, 0.3)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                scale: { duration: 0.2 },
                y: { duration: 0.2 }
              }}
              className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-green-500 text-green-400 px-12 py-4 rounded-full font-bold text-lg shadow-lg overflow-hidden hover:text-white hover:border-green-400 transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Download size={22} className="relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
              <span className="relative z-10">Download Resume</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;