import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const resumeData = pgTable("resume_data", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  personalInfo: jsonb("personal_info").notNull(),
  education: jsonb("education").notNull(),
  experience: jsonb("experience").notNull(),
  projects: jsonb("projects").notNull(),
  skills: jsonb("skills").notNull(),
});

const personalInfoSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  linkedin: z.string(),
  title: z.string(),
  description: z.string(),
});

const educationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  minor: z.string().optional(),
  gpa: z.string(),
  graduationDate: z.string(),
  location: z.string(),
  coursework: z.array(z.string()),
});

const experienceItemSchema = z.object({
  company: z.string(),
  position: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  achievements: z.array(z.string()),
});

const projectItemSchema = z.object({
  name: z.string(),
  role: z.string(),
  date: z.string(),
  location: z.string().optional(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
});

const skillsSchema = z.object({
  programmingLanguages: z.array(z.string()),
  frameworks: z.array(z.string()),
  dataScience: z.array(z.string()),
});

export const insertResumeSchema = createInsertSchema(resumeData).extend({
  personalInfo: personalInfoSchema,
  education: educationSchema,
  experience: z.array(experienceItemSchema),
  projects: z.array(projectItemSchema),
  skills: skillsSchema,
});

export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type Education = z.infer<typeof educationSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export type ProjectItem = z.infer<typeof projectItemSchema>;
export type Skills = z.infer<typeof skillsSchema>;
export type InsertResumeData = z.infer<typeof insertResumeSchema>;
export type ResumeData = typeof resumeData.$inferSelect;
