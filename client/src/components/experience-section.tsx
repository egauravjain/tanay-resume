import { type ExperienceItem } from "@shared/schema";
import { CheckCircle } from "lucide-react";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600">
            Professional journey in AI and software development
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => {
            const getCompanyLogo = (company: string) => {
              if (
                company.toLowerCase().includes("ieee") ||
                company.toLowerCase().includes("rov")
              ) {
                return (
                  <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src="/rov-logo.webp"
                      alt="IEEE ROV"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                );
              }
              if (company.toLowerCase().includes("boundary")) {
                return (
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src="/BoundaryRSS-logo.png"
                      alt="Boundary RSS"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                );
              }
              if (company.toLowerCase().includes("automation")) {
                return (
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src="/VIP-logo.png"
                      alt="AutoIC Lab"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                );
              }
              return (
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-600 font-bold text-sm">CO</span>
                </div>
              );
            };

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 card-hover border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 flex-1">
                    {getCompanyLogo(exp.company)}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold text-primary-600 mb-2">
                        {exp.position}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      {exp.startDate} – {exp.endDate}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary-500 w-5 h-5 mt-1 flex-shrink-0" />
                      <p
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: achievement.replace(
                            /(\d+\.?\d*%|\d+TB\+|\d+\.\d+%)/g,
                            "<strong>$1</strong>",
                          ),
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
