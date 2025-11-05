import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import rateLimit from "express-rate-limit";
import { body, validationResult } from "express-validator";

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

      // TODO: Implement email sending here
      // Options:
      // 1. EmailJS - client-side email sending
      // 2. SendGrid - use Replit SendGrid connector
      // 3. Resend - use Replit Resend connector
      // 4. SMTP - configure your own SMTP server
      //
      // Example with SendGrid (after setting up connector):
      // const sgMail = require('@sendgrid/mail');
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      // const msg = {
      //   to: 'hello@digitalagency4us.com',
      //   from: 'noreply@digitalagency4us.com',
      //   subject: `New Contact Form: ${projectType}`,
      //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nBudget: ${budget}\n\nMessage:\n${message}`,
      // };
      // await sgMail.send(msg);

      res.status(200).json({
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      });
    }
  );

  const httpServer = createServer(app);

  return httpServer;
}
