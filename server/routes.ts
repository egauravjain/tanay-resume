import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get resume data
  app.get("/api/resume", async (req, res) => {
    try {
      const resumeData = await storage.getResumeData();
      if (!resumeData) {
        return res.status(404).json({ message: "Resume data not found" });
      }
      res.json(resumeData);
    } catch (error) {
      console.error("Error fetching resume data:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
