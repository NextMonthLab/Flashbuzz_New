import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

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

  return httpServer;
}
