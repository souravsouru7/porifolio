import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { resumeData } from '../data/resume';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personal } = resumeData;

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{personal.name}</h1>
            <p className="text-sm text-gray-600">{personal.title}</p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <div className="flex items-center space-x-4">
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
    </header>
  );
}