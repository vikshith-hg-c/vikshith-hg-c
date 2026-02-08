// Direct download utilities for Google Doc resume
// No local PDF generation needed - links directly to Google Docs

/**
 * Opens the resume PDF in a new tab for download
 * @param pdfUrl - The Google Docs PDF export URL
 */
export const downloadResume = (pdfUrl: string) => {
  if (!pdfUrl) {
    console.error("PDF URL is not provided");
    return;
  }

  try {
    // Open in new tab/window for download
    window.open(pdfUrl, "_blank");
  } catch (error) {
    console.error("Error opening resume:", error);
  }
};

/**
 * Opens the resume in Google Docs preview
 * @param previewUrl - The Google Docs preview URL
 */
export const previewResume = (previewUrl: string) => {
  if (!previewUrl) {
    console.error("Preview URL is not provided");
    return;
  }

  try {
    window.open(previewUrl, "_blank");
  } catch (error) {
    console.error("Error opening preview:", error);
  }
};
