import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many contact requests, please try again later.",
  });

  app.post(
    "/api/contact",
    contactLimiter,
    [
      body("name").trim().notEmpty().withMessage("Name is required"),
      body("email").isEmail().normalizeEmail().withMessage("Valid email is required"),
      body("phone").optional().trim(),
      body("company").optional().trim(),
      body("projectType").notEmpty().withMessage("Project type is required"),
      body("budget").optional().trim(),
      body("message").trim().notEmpty().withMessage("Message is required"),
      body("honeypot").isEmpty().withMessage("Bot detected"),
    ],
    async (req: Request, res: Response) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, phone, company, projectType, budget, message } = req.body;

      console.log("Contact form submission:", {
        name,
        email,
        phone,
        company,
        projectType,
        budget,
        message,
        timestamp: new Date().toISOString(),
      });


      // Send email using Nodemailer and Gmail SMTP
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // send to yourself, or change as needed
          subject: `New Contact Form: ${projectType}`,
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);
      } catch (err) {
        console.error('Error sending contact email:', err);
        return res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
      }

      res.status(200).json({
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      });
    }
  );

  const httpServer = createServer(app);

  return httpServer;
}
