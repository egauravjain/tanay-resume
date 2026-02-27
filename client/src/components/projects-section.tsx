import { type ProjectItem } from "@shared/schema";
import { Settings, Brain, Video } from "lucide-react";

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

// Map concrete Tailwind classes so JIT can see them at build time
const colorClasses = {
  solar: {
    badgeBg: "bg-green-100",
    badgeText: "text-green-800",
    chipBg: "bg-green-100",
    chipText: "text-green-800",
    iconText: "text-green-500",
  },
  diabetes: {
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
    chipBg: "bg-purple-100",
    chipText: "text-purple-800",
    iconText: "text-purple-500",
  },
  youtube: {
    badgeBg: "bg-red-100",
    badgeText: "text-red-800",
    chipBg: "bg-red-100",
    chipText: "text-red-800",
    iconText: "text-red-600",
  },
  blue: {
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800",
    chipBg: "bg-blue-100",
    chipText: "text-blue-800",
    iconText: "text-blue-500",
  },
  indigo: {
    badgeBg: "bg-indigo-100",
    badgeText: "text-indigo-800",
    chipBg: "bg-indigo-100",
    chipText: "text-indigo-800",
    iconText: "text-indigo-500",
  },
  pink: {
    badgeBg: "bg-pink-100",
    badgeText: "text-pink-800",
    chipBg: "bg-pink-100",
    chipText: "text-pink-800",
    iconText: "text-pink-500",
  },
  orange: {
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-800",
    chipBg: "bg-orange-100",
    chipText: "text-orange-800",
    iconText: "text-orange-500",
  },
};

const getProjectClasses = (name: string, index: number) => {
  const n = name.toLowerCase();
  if (n.includes("solar")) return colorClasses.solar;
  if (n.includes("diabetes")) return colorClasses.diabetes;
  if (n.includes("youtube")) return colorClasses.youtube;
  const fallback = [
    colorClasses.blue,
    colorClasses.indigo,
    colorClasses.pink,
    colorClasses.orange,
  ];
  return fallback[index % fallback.length];
};

// Force uniform icon sizing/weight across all bullets
const getProjectIcon = (projectName: string, colorClass: string) => {
  const iconProps = { className: `${colorClass}`, size: 20, strokeWidth: 2 };
  const n = projectName.toLowerCase();
  if (n.includes("diabetes")) return <Brain {...iconProps} />;
  if (n.includes("youtube")) return <Video {...iconProps} />;
  // Default & solar fallback
  return <Settings {...iconProps} />;
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600">
            Innovative solutions in AI, web development, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const cls = getProjectClasses(project.name, index);
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-100"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                    <span
                      className={`${cls.badgeBg} ${cls.badgeText} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {project.date}
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-primary-600 mb-4">
                    {project.role}
                  </p>

                  <div className="space-y-4 mb-6">
                    {project.description.map((desc, descIndex) => (
                      <div
                        key={descIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center w-5 h-5">
                          {getProjectIcon(project.name, `${cls.iconText}`)}
                        </div>
                        <p
                          className="text-gray-700 leading-relaxed text-base"
                          dangerouslySetInnerHTML={{
                            __html: desc.replace(
                              /(\d+\.?\d*%|\d+TB\+|\d+\.\d+%)/g,
                              "<strong>$1</strong>",
                            ),
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${cls.chipBg} ${cls.chipText} px-3 py-1 rounded text-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
