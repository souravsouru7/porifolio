import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ExternalLink, Github, Youtube } from 'lucide-react';

export default function Projects() {
  const { projects, miniProjects } = resumeData;

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 group-hover:border-transparent transition-all">
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  {[
                    { icon: ExternalLink, text: 'Live Demo', href: project.links.demo, color: 'text-indigo-400' },
                    { icon: Github, text: 'GitHub', href: project.links.github, color: 'text-purple-400' },
                    { icon: Youtube, text: 'Demo Video', href: project.links.video, color: 'text-pink-400' }
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${link.color} hover:text-white transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <link.icon size={16} />
                      {link.text}
                    </motion.a>
                  ))}
                </div>

                <ul className="space-y-2 text-gray-300">
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.li 
                      key={hIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: hIndex * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini Projects */}
        <h3 className="text-2xl font-bold text-center mb-8">Mini Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
              <p className="text-gray-600 mb-3">{project.role}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4">
                <Github size={16} /> View on GitHub
              </a>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}