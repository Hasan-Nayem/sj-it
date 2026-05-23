import "dotenv/config";
import express from "express";
import path from "path";
import multer from "multer";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Configure multer for file uploads in memory
  const upload = multer({ storage: multer.memoryStorage() });

  // API Route for Contact Form Proxy
  // We use .any() to allow flexible field names as requested by user's "fi-" prefix requirement
  app.post("/api/contact", upload.any(), async (req, res) => {
    try {
      const formId = process.env.FORMINIT_ID;
      if (!formId) {
        console.error("FORMINIT_ID is not configured on the server.");
        return res.status(500).json({ success: false, message: "Server configuration error." });
      }

      // Reconstruct FormData for Forminit using native FormData
      const form = new FormData();
      
      // Add text fields
      Object.keys(req.body).forEach(key => {
        form.append(key, req.body[key]);
      });

      // Add files
      if (req.files && Array.isArray(req.files)) {
        req.files.forEach((file: Express.Multer.File) => {
          const blob = new Blob([file.buffer], { type: file.mimetype });
          form.append(file.fieldname, blob, file.originalname);
        });
      }

      const response = await fetch(`https://forminit.com/f/${formId}`, {
        method: "POST",
        body: form,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        res.json({ success: true, message: "Message sent successfully!" });
      } else {
        const data = await response.json().catch(() => ({})) as any;
        res.status(response.status).json({ success: false, message: data.message || "Failed to send to service." });
      }
    } catch (error: any) {
      console.error("Proxy error:", error);
      res.status(500).json({ success: false, message: error.message || "Internal server error." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
