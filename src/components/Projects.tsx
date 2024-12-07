import { resumeData } from '../data/resume';
import { ExternalLink, Github, Youtube } from 'lucide-react';

export default function Projects() {
  const { projects, miniProjects } = resumeData;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        {/* Major Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.links.video} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-red-600 hover:text-red-800">
                    <Youtube size={16} /> Demo Video
                  </a>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
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