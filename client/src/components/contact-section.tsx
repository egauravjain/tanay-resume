import { type PersonalInfo } from "@shared/schema";
import { Mail, Phone, Linkedin, Download } from "lucide-react";

interface ContactSectionProps {
  personalInfo: PersonalInfo;
}

export default function ContactSection({ personalInfo }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-primary-100">Ready to collaborate on innovative AI and software solutions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-primary-100 hover:text-white transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a 
              href={`tel:${personalInfo.phone.replace(/\D/g, '')}`}
              className="text-primary-100 hover:text-white transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Linkedin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <a 
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-100 hover:text-white transition-colors"
            >
              {personalInfo.linkedin}
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-primary-100 mb-4">Based in {personalInfo.location}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
            <a 
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center space-x-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
            <a 
              href="/resume.pdf"
              download="Tanay_Jain_Resume.pdf"
              className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
