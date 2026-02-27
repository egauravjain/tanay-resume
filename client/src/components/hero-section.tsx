import { type PersonalInfo } from "@shared/schema";
import { Bot } from "lucide-react";

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export default function HeroSection({ personalInfo }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary-600">{personalInfo.name}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {personalInfo.description.replace('and software engineering', 'and software engineering. When I\'m not coding, you\'ll find me training for triathlons, reading Dan Brown novels, or practicing juggling tricks')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors text-center"
              >
                View My Work
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <Bot className="text-white w-32 h-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
