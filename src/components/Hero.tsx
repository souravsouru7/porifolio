import { resumeData } from '../data/resume';
import { ArrowDown, Code, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { personal, summary } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden gradient-bg pt-16">
      {/* 3D Geometric Shapes */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-16 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-8 inline-block"
            variants={itemVariants}
          >
            <Code className="w-12 h-12 text-indigo-600" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            Hi, I'm <span className="text-gradient">{personal.name.split(' ')[0]}</span>
          </motion.h1>
          
          <motion.div 
            className="hero-card p-8 rounded-2xl mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {personal.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {summary}
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold overflow-hidden shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                <Boxes className="w-5 h-5" />
                View My Work
              </span>
            </motion.a>
            <motion.a
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl bg-gray-800 text-white font-semibold shadow-lg hover:shadow-gray-800/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                GitHub Profile
              </span>
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <ArrowDown className="mx-auto text-gray-400 w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}