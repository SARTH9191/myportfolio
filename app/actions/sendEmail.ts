"use server";

import { Resend } from 'resend';

export interface SendEmailResponse {
  success: boolean;
  message: string;
}

export async function sendEmail(_prevState: SendEmailResponse | null, formData: FormData): Promise<SendEmailResponse> {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  // subject is optional, no validation needed
  const message = formData.get("message")?.toString();

  // Validate fields
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields (Name, Email, Message)."
    };
  }

  // Basic email pattern regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address."
    };
  }

  try {
    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const subject = formData.get("subject")?.toString() || "New Contact Request";
    
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sarthp9191@gmail.com',
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    return {
      success: true,
      message: `Thank you, ${name}! Your message has been sent. Sarthak will reach out to you shortly.`
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: "Failed to send message. Please try again later."
    };
  }
}
