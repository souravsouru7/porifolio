import { resumeData } from '../data/resume';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { personal } = resumeData;

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">{personal.name}</h2>
          <p className="text-gray-400 mb-6">{personal.title}</p>
          
          <div className="flex space-x-6 mb-8">
            <a href={personal.contact.github} target="_blank" rel="noopener noreferrer"
               className="hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={personal.contact.linkedin} target="_blank" rel="noopener noreferrer"
               className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${personal.contact.email}`}
               className="hover:text-indigo-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href={`tel:${personal.contact.phone}`}
               className="hover:text-indigo-400 transition-colors">
              <Phone size={24} />
            </a>
          </div>
          
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
            <p className="mt-2">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}