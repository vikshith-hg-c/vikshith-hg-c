"use client";

import { jsPDF } from "jspdf";
import {
  ResumeExperiences,
  ResumeEducation,
  ResumeCertifications,
  ResumeHeader,
  CareerHighlights
} from "@/constants";

export const downloadResume = () => {
  try {
    if (typeof window === "undefined") {
      console.error("Server-side execution detected");
      return;
    }

    const doc = new jsPDF({
      format: 'a4', // A4 size: 210mm x 297mm
      orientation: 'portrait',
      unit: 'mm',
      compress: true,
    });
    const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
    const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
    const margin = 12;
    const contentWidth = pageWidth - (2 * margin);
    const bottomMargin = 15; // Reserve space at bottom of page
    const pageBottom = pageHeight - bottomMargin; // 282mm usable height
    let yPos = 12;

    const primaryColor = [74, 246, 38] as [number, number, number]; // Green
    const darkColor = [25, 25, 40] as [number, number, number];
    const textColor = [40, 40, 50] as [number, number, number];
    const lightColor = [100, 100, 120] as [number, number, number];

    // ==================== HEADER ====================
    doc.setFontSize(24);
    doc.setFont("Courier", "bold");
    doc.setTextColor(...primaryColor);
    doc.text(ResumeHeader.fullName.toUpperCase(), margin, yPos);
    yPos += 8;

    // Title
    doc.setFontSize(11);
    doc.setFont("Courier", "normal");
    doc.setTextColor(...darkColor);
    doc.text(ResumeHeader.title, margin, yPos);
    yPos += 5;

    // Contact info
    doc.setFontSize(8.5);
    doc.setFont("Courier", "normal");
    doc.setTextColor(...lightColor);
    const contactInfo = `${ResumeHeader.email} | ${ResumeHeader.phone} | ${ResumeHeader.location}`;
    doc.text(contactInfo, margin, yPos);
    yPos += 6;

    // Separator line - thicker and more prominent
    doc.setDrawColor(...primaryColor);
    doc.setLineWidth(0.6);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 7;

    // ==================== PROFESSIONAL SUMMARY ====================
    doc.setFontSize(10);
    doc.setFont("Courier", "bold");
    doc.setTextColor(...primaryColor);
    doc.text("PROFESSIONAL SUMMARY", margin, yPos);
    yPos += 4;

    doc.setFontSize(8.5);
    doc.setFont("Courier", "normal");
    doc.setTextColor(...textColor);
    const summary = doc.splitTextToSize(ResumeHeader.summary, contentWidth - 2);
    doc.text(summary, margin + 1, yPos);
    yPos += summary.length * 2.8 + 5;

    // ==================== CAREER HIGHLIGHTS ====================
    if (yPos > pageBottom - 25) {
      doc.addPage();
      yPos = margin;
    }

    doc.setFontSize(10);
    doc.setFont("Courier", "bold");
    doc.setTextColor(...primaryColor);
    doc.text("CAREER HIGHLIGHTS", margin, yPos);
    yPos += 4;

    doc.setFontSize(8);
    doc.setFont("Courier", "normal");
    doc.setTextColor(...textColor);

    CareerHighlights.forEach((highlight) => {
      if (yPos > pageBottom - 8) {
        doc.addPage();
        yPos = margin;
      }

      const highlightLines = doc.splitTextToSize(`• ${highlight}`, contentWidth - 6);
      doc.text(highlightLines, margin + 3, yPos);
      yPos += highlightLines.length * 2.4 + 1;
    });

    yPos += 2;

    // ==================== PROFESSIONAL EXPERIENCE ====================
    doc.setFontSize(10);
    doc.setFont("Courier", "bold");
    doc.setTextColor(...primaryColor);
    doc.text("PROFESSIONAL EXPERIENCE", margin, yPos);
    yPos += 4;

    ResumeExperiences.filter(exp => exp.pin).reverse().slice(0, 3).forEach((exp) => {
      if (yPos > pageBottom - 35) {
        doc.addPage();
        yPos = margin;
      }

      // Job title and company
      doc.setFontSize(9);
      doc.setFont("Courier", "bold");
      doc.setTextColor(...darkColor);
      doc.text(exp.title + " • " + exp.company, margin, yPos);
      yPos += 3.5;

      // Period and location
      doc.setFontSize(8);
      doc.setFont("Courier", "normal");
      doc.setTextColor(...lightColor);
      doc.text(`${exp.period} • ${exp.location}`, margin, yPos);
      yPos += 3.5;

      // Description
      doc.setFontSize(8.5);
      doc.setFont("Courier", "normal");
      doc.setTextColor(...textColor);
      const descLines = doc.splitTextToSize(exp.description, contentWidth - 2);
      doc.text(descLines, margin + 1, yPos);
      yPos += descLines.length * 2.6 + 2;

      // Extract and display responsibilities and achievements from clients/projects
      const allResponsibilities = new Set<string>();
      const allAchievements = new Set<string>();

      (exp.clients || []).forEach((client) => {
        (client.projects || []).forEach((project) => {
          (project.responsibilities || []).forEach((resp) => allResponsibilities.add(resp));
          (project.achievements || []).forEach((ach) => allAchievements.add(ach));
        });
      });

      // Responsibilities header
      if (allResponsibilities.size > 0) {
        if (yPos > pageBottom - 20) {
          doc.addPage();
          yPos = margin;
        }

        doc.setFontSize(8);
        doc.setFont("Courier", "bold");
        doc.setTextColor(...primaryColor);
        doc.text("Key Responsibilities:", margin, yPos);
        yPos += 2.5;

        // Responsibilities list
        doc.setFontSize(8);
        doc.setFont("Courier", "normal");
        doc.setTextColor(...textColor);
        Array.from(allResponsibilities).forEach((resp) => {
          if (yPos > pageBottom - 8) {
            doc.addPage();
            yPos = margin;
          }

          const respLines = doc.splitTextToSize(`• ${resp}`, contentWidth - 6);
          doc.text(respLines, margin + 3, yPos);
          yPos += respLines.length * 2.4 + 0.5;
        });

        yPos += 1;
      }

      // Achievements header
      if (allAchievements.size > 0) {
        if (yPos > pageBottom - 20) {
          doc.addPage();
          yPos = margin;
        }

        doc.setFontSize(8);
        doc.setFont("Courier", "bold");
        doc.setTextColor(...primaryColor);
        doc.text("Key Achievements:", margin, yPos);
        yPos += 2.5;

        // Achievements list
        doc.setFontSize(8);
        doc.setFont("Courier", "normal");
        doc.setTextColor(...textColor);
        Array.from(allAchievements).forEach((ach) => {
          if (yPos > pageBottom - 8) {
            doc.addPage();
            yPos = margin;
          }

          const achLines = doc.splitTextToSize(`• ${ach}`, contentWidth - 6);
          doc.text(achLines, margin + 3, yPos);
          yPos += achLines.length * 2.4 + 0.5;
        });

        yPos += 3;
      }
    });

    yPos += 2;

    // ==================== EDUCATION ====================
    if (yPos > pageBottom - 35) {
      doc.addPage();
      yPos = margin;
    }

    doc.setFontSize(10);
    doc.setFont("Courier", "bold");
    doc.setTextColor(...primaryColor);
    doc.text("EDUCATION & CERTIFICATIONS", margin, yPos);
    yPos += 4;

    // Education
    ResumeEducation.filter(ed => ed.pin).reverse().forEach((edu) => {
      if (yPos > pageBottom - 15) {
        doc.addPage();
        yPos = margin;
      }

      doc.setFontSize(8);
      doc.setFont("Courier", "bold");
      doc.setTextColor(...darkColor);
      doc.text(edu.degree, margin, yPos);
      yPos += 3;

      doc.setFontSize(7.5);
      doc.setFont("Courier", "normal");
      doc.setTextColor(...lightColor);
      doc.text(`${edu.institution} • ${edu.year}`, margin, yPos);
      yPos += 4;
    });

    yPos += 2;

    // Certifications (top 6)
    doc.setFontSize(10);
    doc.setFont("Courier", "bold");
    doc.setTextColor(...primaryColor);
    doc.text("CERTIFICATIONS", margin, yPos);
    yPos += 3;

    ResumeCertifications.filter(cert => cert.pin).reverse().slice(0, 6).forEach((cert) => {
      if (yPos > pageBottom - 10) {
        doc.addPage();
        yPos = margin;
      }

      doc.setFontSize(8);
      doc.setFont("Courier", "normal");
      doc.setTextColor(...textColor);
      const certText = `• ${cert.name} - ${cert.issuer} (${cert.date})`;
      const certLines = doc.splitTextToSize(certText, contentWidth - 4);
      doc.text(certLines, margin + 2, yPos);
      yPos += certLines.length * 2.4 + 1;
    });

    // Save the PDF
    doc.save("Vikshith_HG_Resume.pdf");

  } catch (error) {
    console.error("Error in downloadResume:", error);
    throw error;
  }
};

// Export stub for generateResumeHTML (for compatibility)
export const generateResumeHTML = () => {
  return `<div>Resume generation placeholder</div>`;
};
