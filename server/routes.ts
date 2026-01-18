import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema, insertVideoAssetSchema, insertCaseStudySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }

      const submission = await storage.createContactSubmission({
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || null,
        company: result.data.company || null,
        projectType: result.data.projectType,
        budgetRange: result.data.budgetRange || null,
        message: result.data.message,
      });

      return res.status(201).json({ 
        message: "Message sent successfully",
        id: submission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        message: "Something went wrong. Please try again." 
      });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Video Assets API
  app.get("/api/video-assets", async (req, res) => {
    try {
      const assets = await storage.getVideoAssets();
      res.json(assets);
    } catch (error) {
      console.error("Error fetching video assets:", error);
      res.status(500).json({ message: "Failed to fetch video assets" });
    }
  });

  app.get("/api/video-assets/:id", async (req, res) => {
    try {
      const asset = await storage.getVideoAssetById(req.params.id);
      if (!asset) {
        return res.status(404).json({ message: "Video asset not found" });
      }
      res.json(asset);
    } catch (error) {
      console.error("Error fetching video asset:", error);
      res.status(500).json({ message: "Failed to fetch video asset" });
    }
  });

  app.post("/api/video-assets", async (req, res) => {
    try {
      const result = insertVideoAssetSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: fromZodError(result.error).message });
      }
      const asset = await storage.upsertVideoAsset(result.data);
      res.status(201).json(asset);
    } catch (error) {
      console.error("Error creating video asset:", error);
      res.status(500).json({ message: "Failed to create video asset" });
    }
  });

  app.post("/api/video-assets/bulk", async (req, res) => {
    try {
      const assets = z.array(insertVideoAssetSchema).safeParse(req.body);
      if (!assets.success) {
        return res.status(400).json({ message: fromZodError(assets.error).message });
      }
      const created = await Promise.all(
        assets.data.map(asset => storage.upsertVideoAsset(asset))
      );
      res.status(201).json(created);
    } catch (error) {
      console.error("Error bulk creating video assets:", error);
      res.status(500).json({ message: "Failed to create video assets" });
    }
  });

  app.delete("/api/video-assets/:id", async (req, res) => {
    try {
      await storage.deleteVideoAsset(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting video asset:", error);
      res.status(500).json({ message: "Failed to delete video asset" });
    }
  });

  // Case Studies API
  app.get("/api/case-studies", async (req, res) => {
    try {
      const publishedOnly = req.query.published !== "false";
      const studies = await storage.getCaseStudies(publishedOnly);
      res.json(studies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({ message: "Failed to fetch case studies" });
    }
  });

  app.get("/api/case-studies/hero", async (req, res) => {
    try {
      const heroStudies = await storage.getHeroCaseStudies();
      res.json(heroStudies);
    } catch (error) {
      console.error("Error fetching hero case studies:", error);
      res.status(500).json({ message: "Failed to fetch hero case studies" });
    }
  });

  app.get("/api/case-studies/showreel", async (req, res) => {
    try {
      const showreel = await storage.getShowreel();
      res.json(showreel || null);
    } catch (error) {
      console.error("Error fetching showreel:", error);
      res.status(500).json({ message: "Failed to fetch showreel" });
    }
  });

  app.get("/api/case-studies/:slug", async (req, res) => {
    try {
      const study = await storage.getCaseStudyBySlug(req.params.slug);
      if (!study) {
        return res.status(404).json({ message: "Case study not found" });
      }
      res.json(study);
    } catch (error) {
      console.error("Error fetching case study:", error);
      res.status(500).json({ message: "Failed to fetch case study" });
    }
  });

  app.post("/api/case-studies", async (req, res) => {
    try {
      const result = insertCaseStudySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: fromZodError(result.error).message });
      }
      const study = await storage.createCaseStudy(result.data);
      res.status(201).json(study);
    } catch (error) {
      console.error("Error creating case study:", error);
      res.status(500).json({ message: "Failed to create case study" });
    }
  });

  app.patch("/api/case-studies/:id", async (req, res) => {
    try {
      const existing = await storage.getCaseStudyById(req.params.id);
      if (!existing) {
        return res.status(404).json({ message: "Case study not found" });
      }
      const updated = await storage.updateCaseStudy(req.params.id, req.body);
      res.json(updated);
    } catch (error) {
      console.error("Error updating case study:", error);
      res.status(500).json({ message: "Failed to update case study" });
    }
  });

  app.delete("/api/case-studies/:id", async (req, res) => {
    try {
      await storage.deleteCaseStudy(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting case study:", error);
      res.status(500).json({ message: "Failed to delete case study" });
    }
  });

  return httpServer;
}
