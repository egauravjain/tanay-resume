import { useQuery } from "@tanstack/react-query";
import { type ResumeData } from "@shared/schema";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import HobbiesSection from "@/components/hobbies-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  const { data: resumeData, isLoading, error } = useQuery({
    queryKey: ["/api/resume"],
  });

  // Type assertion for the data
  const typedResumeData = resumeData as ResumeData;

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !typedResumeData) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading portfolio data</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        <HeroSection personalInfo={typedResumeData.personalInfo} />
        <EducationSection education={typedResumeData.education} />
        <ExperienceSection experience={typedResumeData.experience} />
        <ProjectsSection projects={typedResumeData.projects} />
        <SkillsSection skills={typedResumeData.skills} />
        <HobbiesSection />
        <ContactSection personalInfo={typedResumeData.personalInfo} />
      </main>

      <footer className="bg-gray-900 text-gray-300 py-8 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 {typedResumeData.personalInfo.name}. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with modern web technologies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
