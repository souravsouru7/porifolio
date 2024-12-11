import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const { experience, education, certifications } = resumeData;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Professional Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3"
          >
            <Briefcase className="text-indigo-400" />
            Professional Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-indigo-300">{exp.role}</h3>
                  <p className="text-gray-300 mb-3">
                    {exp.company} • {exp.location} • {exp.period}
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    {exp.highlights.map((highlight, hIndex) => (
                      <motion.li
                        key={hIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 * hIndex }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <GraduationCap className="text-indigo-600" />
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 mb-3">
                  {edu.institution} • {edu.period}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {edu.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Award className="text-indigo-600" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}