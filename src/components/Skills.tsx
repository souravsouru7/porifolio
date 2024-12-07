import { resumeData } from '../data/resume';
import { Code, Layout, Database, Cloud, Wrench, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
  const { skills } = resumeData;

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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              className="bg-white p-6 rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="text-indigo-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}