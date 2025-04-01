import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedImagePlaceholderProps {
  isInView: boolean; // Trigger based on parent's visibility
  duration: number; // Animation duration in seconds
  finalStyle: 'Photorealistic' | 'Stylized Illustration'; // Example styles
  subject: string; // Description of the image subject
}

const AnimatedImagePlaceholder: React.FC<AnimatedImagePlaceholderProps> = ({
  isInView,
  duration,
  finalStyle,
  subject,
}) => {
  const variants = {
    hidden: { filter: 'blur(20px)', opacity: 0.3 },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      transition: { duration: duration, ease: 'easeOut' },
    },
  };

  // Simple visual distinction for the example
  const finalBgColor = finalStyle === 'Photorealistic' ? 'bg-blue-500' : 'bg-purple-500';

  return (
    <motion.div
      className="w-full h-64 rounded-lg overflow-hidden relative shadow-lg"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {/* Placeholder for the image content */}
      <div className={`w-full h-full ${finalBgColor} flex items-center justify-center`}>
        {/* Display final style/subject when animation completes (or nearly completes) */}
        <motion.div
          className="text-center text-white p-4 bg-black/30 rounded"
          initial={{ opacity: 0 }}
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: duration * 0.8, duration: 0.5 }} // Fade in text towards the end
        >
          <p className="font-semibold">{finalStyle}</p>
          <p className="text-sm">{subject}</p>
        </motion.div>
      </div>

      {/* Optional: Add a subtle noise overlay that fades out */}
      <motion.div
         className="absolute inset-0 bg-[url('/noise.png')] opacity-50" // Replace with actual noise pattern if desired
         initial={{ opacity: 0.5 }}
         animate={isInView ? 'visible' : 'hidden'}
         variants={{
            hidden: { opacity: 0.5 },
            visible: { opacity: 0, transition: { duration: duration * 0.7, ease: 'easeIn' } } // Fade out noise faster
         }}
         style={{ backgroundSize: '100px 100px' }} // Example tiling
       />
    </motion.div>
  );
};

export default AnimatedImagePlaceholder;
