"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    // Dynamically import EmailJS to reduce bundle size
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      // Get current time in readable format
      const now = new Date();
      const timeString = now.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.from_name,
          email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          time: timeString,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or email me directly.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4 pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-4xl w-full z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.5)}
          className="w-full"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#0d0d1a]/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 shadow-xl relative z-10"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="from_name" className="text-gray-300 mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="bg-[#1a1a2e] border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all relative z-20 cursor-text"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="from_email" className="text-gray-300 mb-2 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="bg-[#1a1a2e] border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all relative z-20 cursor-text"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col mt-6">
            <label htmlFor="subject" className="text-gray-300 mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Inquiry"
              className="bg-[#1a1a2e] border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all relative z-20 cursor-text"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col mt-6">
            <label htmlFor="message" className="text-gray-300 mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Hi, I'd like to discuss..."
              className="bg-[#1a1a2e] border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none relative z-20 cursor-text"
            />
          </div>

          {/* Status Message */}
          {status.type !== "idle" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg text-center ${
                status.type === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : status.type === "error"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              }`}
            >
              {status.message}
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status.type === "loading"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 py-4 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0d0d1a] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
          </form>
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          className="mt-8 text-center text-gray-400"
        >
          <p>Or reach out directly:</p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="mailto:vikshithganesh@gmail.com"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" strokeWidth="0.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/vikshith/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://wa.me/919449264994"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.398-2.847 1.12-.735.717-1.143 1.671-1.143 2.699 0 1.06.423 2.09 1.194 2.847.756.749 1.764 1.162 2.821 1.162h.005c1.05 0 2.078-.413 2.847-1.162.743-.756 1.152-1.771 1.152-2.847 0-1.052-.398-2.07-1.12-2.817-.734-.738-1.708-1.145-2.809-1.145M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
