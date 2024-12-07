import { resumeData } from '../data/resume';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function Experience() {
  const { experience, education, certifications } = resumeData;

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Professional Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <Briefcase className="text-indigo-600" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="text-gray-600 mb-3">
                  {exp.company} • {exp.location} • {exp.period}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

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