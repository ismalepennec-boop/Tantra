import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Serve PDF files for viewing
  app.get("/api/assets/cv", (req, res) => {
    const filePath = path.resolve(process.cwd(), "attached_assets", "cv F_E rigdzin 2025 PDF_1763026950168.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline");
    res.sendFile(filePath);
  });

  app.get("/api/assets/mindmap", (req, res) => {
    const filePath = path.resolve(process.cwd(), "attached_assets", "Therapies mind map_1763026950168.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline");
    res.sendFile(filePath);
  });

  // Download PDF files
  app.get("/api/assets/cv/download", (req, res) => {
    const filePath = path.resolve(process.cwd(), "attached_assets", "cv F_E rigdzin 2025 PDF_1763026950168.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=CV_Jigme_Rigdzin.pdf");
    res.sendFile(filePath);
  });

  app.get("/api/assets/mindmap/download", (req, res) => {
    const filePath = path.resolve(process.cwd(), "attached_assets", "Therapies mind map_1763026950168.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=MindMap_Therapies_Rigdzin.pdf");
    res.sendFile(filePath);
  });

  app.get("/api/assets/livre-extrait/download", (req, res) => {
    const filePath = path.resolve(process.cwd(), "attached_assets", "extrait livre rigdzin PDF_1763027671960.pdf");
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=Extrait_Jamais_Sans_Ma_Liberte.pdf");
    res.sendFile(filePath);
  });

  // Serve video file
  app.get("/api/assets/chakras-video", (req, res) => {
    const filePath = path.resolve(process.cwd(), "attached_assets", "Image to video 丨 Animate the colorful serpent and smoke swirling smoothly around_1763027920991.mp4");
    res.setHeader("Content-Type", "video/mp4");
    res.sendFile(filePath);
  });

  // Surprise 2026 webhook integration
  app.post("/api/surprise-2026", async (req, res) => {
    try {
      const { name, email } = req.body;

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }

      // Send data to Make.com webhook
      const webhookUrl = process.env.MAKE_WEBHOOK_URL;
      
      if (!webhookUrl) {
        console.error("MAKE_WEBHOOK_URL environment variable not configured");
        throw new Error("MAKE_WEBHOOK_URL not configured");
      }

      const payload = {
        name,
        email,
        timestamp: new Date().toISOString(),
      };

      console.log("Sending to Make.com webhook:", { name, email });

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      if (!response.ok) {
        console.error(`Webhook failed with status ${response.status}:`, responseText);
        throw new Error(`Webhook failed: ${response.status}`);
      }

      console.log("Webhook success:", responseText);

      return res.json({ 
        success: true, 
        message: "Inscription réussie !" 
      });
    } catch (error) {
      console.error("Error submitting surprise form:", error);
      return res.status(500).json({ 
        error: "Une erreur est survenue. Veuillez réessayer." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
