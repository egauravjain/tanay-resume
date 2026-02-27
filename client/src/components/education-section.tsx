import { type Education } from "@shared/schema";

interface EducationSectionProps {
  education: Education;
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">Academic foundation in AI and Computer Science</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/purdue-logo.png" alt="Purdue University" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{education.institution}</h3>
                  <p className="text-lg font-semibold text-primary-600 mb-2">{education.degree}</p>
                  {education.minor && (
                    <p className="text-gray-600">Minor: {education.minor}</p>
                  )}
                </div>
              </div>
              <div className="text-right mt-4 lg:mt-0">
                <p className="text-lg font-semibold text-gray-900">GPA: {education.gpa}</p>
                <p className="text-gray-600">Expected: {education.graduationDate}</p>
                <p className="text-gray-600">{education.location}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {education.coursework.map((course, index) => (
                  <span
                    key={index}
                    className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
