import { motion, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Code, Layout, Database, Cloud, Wrench, Brain } from 'lucide-react';

export default function Skills() {
  const { skills } = resumeData;
  const { scrollYProgress } = useScroll();
  
  const skillCategories = [
    { icon: Code, title: 'Programming Languages', items: skills.programming },
    { icon: Layout, title: 'Frontend Development', items: skills.frontend },
    { icon: Database, title: 'Backend Development', items: skills.backend },
    { icon: Database, title: 'Databases', items: skills.databases },
    { icon: Cloud, title: 'Cloud Technologies', items: skills.cloud },
    { icon: Wrench, title: 'Development Tools', items: skills.tools },
    { icon: Brain, title: 'Other Skills', items: skills.other }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 group-hover:border-transparent transition-all">
                <div className="flex items-center mb-6">
                  <category.icon className="text-indigo-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-xl text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}