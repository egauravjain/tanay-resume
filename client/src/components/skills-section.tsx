import { type Skills } from "@shared/schema";
import { Code, Layers, Brain } from "lucide-react";

interface SkillsSectionProps {
  skills: Skills;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const getSkillLevel = (skill: string, category: keyof Skills) => {
    // Define skill levels based on the languages and frameworks
    const skillLevels: Record<string, number> = {
      "Python": 100,
      "Java": 85,
      "C/C++": 80,
      "JavaScript": 80,
      "TypeScript": 80,
      "SQL": 75,
      "C#": 65,
      "HTML": 90,
      "CSS": 90
    };
    
    return skillLevels[skill] || 70;
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">Comprehensive toolkit for AI and software development</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
            <div className="flex items-center mb-6">
              <Code className="text-primary-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Programming Languages</h3>
            </div>
            <div className="space-y-3">
              {skills.programmingLanguages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-700">{lang}</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getSkillLevel(lang, 'programmingLanguages')}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
            <div className="flex items-center mb-6">
              <Layers className="text-primary-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Frameworks & Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((framework, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-800 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  {framework}
                </span>
              ))}
            </div>
          </div>

          {/* Data Science & AI Tools */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100">
            <div className="flex items-center mb-6">
              <Brain className="text-primary-500 w-6 h-6 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Data Science & AI</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.dataScience.map((tool, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
