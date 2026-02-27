import { type ResumeData, type InsertResumeData } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getResumeData(): Promise<ResumeData | undefined>;
  createResumeData(data: InsertResumeData): Promise<ResumeData>;
  updateResumeData(data: Partial<InsertResumeData>): Promise<ResumeData>;
}

export class MemStorage implements IStorage {
  private resumeData: ResumeData | undefined;

  constructor() {
    // Initialize with Tanay Jain's resume data
    this.resumeData = {
      id: randomUUID(),
      personalInfo: {
        name: "Tanay Jain",
        email: "jain729@purdue.edu",
        phone: "(669) 203-9015",
        location: "Fremont, CA",
        linkedin: "linkedin.com/in/tanay-jain27",
        title: "AI + CS Student",
        description:
          "Artificial Intelligence and Computer Science student at Purdue University specializing in Software Engineering, Computer Vision, and Full Stack Development.",
      },
      education: {
        institution: "Purdue University",
        degree: "BS Artificial Intelligence, Computer Science",
        minor: "Business Economics",
        gpa: "3.74",
        graduationDate: "May 2027",
        location: "West Lafayette, IN",
        coursework: [
          "Object Oriented Programming",
          "Data Engineering in Python",
          "Data Science Lab",
          "Data Mining",
          "Computer Vision",
          "AI Basics",
          "Multivariate Calculus",
          "Linear Algebra",
          "Discrete Math",
          "Quantum Computing",
          "VIP",
        ],
      },
      experience: [
        {
          company: "IEEE – ROV (Remotely Operated Underwater Vehicle)",
          position: "Software Engineer – OpenCV Co-lead",
          location: "West Lafayette, IN",
          startDate: "August 2024",
          endDate: "Present",
          achievements: [
            "Built real-time underwater object detection pipeline achieving 92.6% accuracy using OpenCV and TensorFlow",
            "Engineered stereo vision algorithm reducing depth estimation error by 18%, generating depth maps and transforming them into 3D point clouds for precise object reconstruction using Open3D",
            "Created a 360-degree photosphere stitching method to generate immersive underwater visualizations",
          ],
        },
        {
          company: "Boundary RSS",
          position: "Software Engineer Intern",
          location: "Remote",
          startDate: "May 2025",
          endDate: "Present",
          achievements: [
            "Trained CNNs on 5TB+ seismic data to detect hydrocarbon boundaries, raising detection accuracy by 23%",
            "Built Python pipeline with MSNoise, tomography, and FWI to refine subsurface velocity model accuracy",
            "Applied 3D viscoelastic modeling and Kirchhoff migration, speeding up depth conversion by 38.8%",
          ],
        },
        {
          company: "Automation and Intelligence Construction Lab",
          position: "Research Engineer",
          location: "West Lafayette, IN",
          startDate: "January 2025",
          endDate: "May 2025",
          achievements: [
            "Fine-tuned RoBERTa based model on domain-specific bridge terminology to enhance OCR accuracy by 18%",
            "Built OCR pipeline to extract text from scanned PDFs using OpenCV and scikit-image for preprocessing and Pytesseract for text recognition",
          ],
        },
      ],
      projects: [
        {
          name: "Solar Score App",
          role: "Back End Software Engineer",
          date: "July 2024",
          location: "Fremont, CA",
          description: [
            "Built microservices using FastAPI to fetch data from OpenWeather, Google Maps, and Zillow APIs",
            "Developed and designed a REST API using Java with Spring Boot to process data sourced from microservices and developed an algorithm to generate custom solar scores that predict efficacy of solar panels",
            "Deployed backend to AWS using EC2 and S3, enabling scalable cloud access to solar performance data",
          ],
          technologies: ["FastAPI", "Spring Boot", "Java", "AWS", "EC2", "S3"],
        },
        {
          name: "Diabetes Risk Prediction Research",
          role: "Software Engineer – AI Researcher",
          date: "July 2024 – August 2024",
          description: [
            "Sourced diverse patient datasets from Kaggle, performing data cleaning and preprocessing to ensure quality",
            "Trained Decision Tree J48 and Random Forest models conducting A/B testing to develop a model detecting early diabetes signs with 96% accuracy",
          ],
          technologies: ["Python", "Machine Learning", "Weka", "Data Science"],
        },
        {
          name: "YouTube Channel",
          role: "Software Engineer and Content Creator",
          date: "June 2024 – Present",
          location: "Fremont, CA",
          description: [
            'Created "Modern Vedic Maths" teaching quick mental calculations using Indian Vedic Math principles',
            "Built a custom analytics dashboard using JavaScript with React and Chart.js for data visualization",
            "Leveraged Apache Airflow to orchestrate ETL workflows with Python, Pandas, and YouTube Data API",
          ],
          technologies: [
            "React",
            "JavaScript",
            "Chart.js",
            "Apache Airflow",
            "Python",
            "YouTube API",
          ],
        },
      ],
      skills: {
        programmingLanguages: [
          "C/C++",
          "Java",
          "Python",
          "SQL",
          "C#",
          "TypeScript",
          "Javascript",
          "HTML",
          "CSS",
        ],
        frameworks: [
          "AWS",
          "Spring Boot",
          "FastAPI",
          "Flask",
          "Unity",
          "Express.js",
          "Node.js",
          "Nest.js",
          "Next.js",
          "React",
        ],
        dataScience: [
          "OpenCV",
          "TensorFlow",
          "PyTorch",
          "scikit-learn",
          "pandas",
          "numpy",
          "SciPy",
          "matplotlib",
          "Weka",
        ],
      },
    };
  }

  async getResumeData(): Promise<ResumeData | undefined> {
    return this.resumeData;
  }

  async createResumeData(data: InsertResumeData): Promise<ResumeData> {
    const id = randomUUID();
    const resumeData: ResumeData = { ...data, id };
    this.resumeData = resumeData;
    return resumeData;
  }

  async updateResumeData(data: Partial<InsertResumeData>): Promise<ResumeData> {
    if (!this.resumeData) {
      throw new Error("No resume data to update");
    }

    this.resumeData = { ...this.resumeData, ...data };
    return this.resumeData;
  }
}

export const storage = new MemStorage();
