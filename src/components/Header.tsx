import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { resumeData } from '../data/resume';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personal } = resumeData;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-sm z-50 text-white"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold">{personal.name}</h1>
            <p className="text-sm text-gray-200">{personal.title}</p>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'skills', 'projects', 'experience'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="relative nav-link text-white group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="capitalize">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </motion.a>
            ))}
            
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Social Icons with hover effects */}
              <motion.a
                whileHover={{ scale: 1.2, rotate: 360 }}
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <Github size={20} />
              </motion.a>
              {/* Add similar motion effects for other social icons */}
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block py-2 text-gray-600 hover:text-gray-900">About</a>
            <a href="#skills" className="block py-2 text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#projects" className="block py-2 text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#experience" className="block py-2 text-gray-600 hover:text-gray-900">Experience</a>
            <div className="flex space-x-4 py-2">
              <a href={personal.contact.github} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-900">
                <Github size={20} />
              </a>
              <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-900">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personal.contact.email}`}
                 className="text-gray-600 hover:text-gray-900">
                <Mail size={20} />
              </a>
              <a href={`tel:${personal.contact.phone}`}
                 className="text-gray-600 hover:text-gray-900">
                <Phone size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}