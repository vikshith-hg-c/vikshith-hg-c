// Hook for managing resume download functionality
import { useCallback } from 'react';
import { downloadResume, generateResumeHTML } from '@/utils/resumeDownload';

export const useResumeDownload = () => {
  const handleDownload = useCallback(async () => {
    try {
      // Create a temporary container for the PDF content
      const container = document.createElement('div');
      container.style.display = 'none';
      container.innerHTML = generateResumeHTML();
      document.body.appendChild(container);

      // Give the DOM time to render
      await new Promise(resolve => setTimeout(resolve, 200));

      // Generate and download the PDF
      await downloadResume();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(container);
      }, 500);

      console.log('Resume downloaded successfully');

    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  }, []);

  return {
    handleDownload
  };
};
