import { resumeData } from '../data/resume';
import { ArrowDown, Code, Boxes } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { personal, summary } = resumeData;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
    <section className="min-h-screen relative overflow-hidden bg-gray-900 pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 40 + 10,
                height: Math.random() * 40 + 10,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.1)`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
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
            <Code className="w-16 h-16 text-indigo-400" />
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              {personal.name.split(' ')[0]}
            </span>
          </motion.h1>
          
          <motion.div 
            className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl mb-12 border border-white/20"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {personal.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              {summary}
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold overflow-hidden shadow-lg hover:shadow-indigo-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative flex items-center justify-center gap-2 text-lg">
                <Boxes className="w-5 h-5" />
                View My Work
              </span>
            </motion.a>
            <motion.a
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-lg text-white font-semibold border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2 text-lg">
                GitHub Profile
              </span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ArrowDown className="mx-auto text-white/60 w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}