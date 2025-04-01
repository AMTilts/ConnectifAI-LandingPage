import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedImagePlaceholder from './AnimatedImagePlaceholder';

const ImageGenerationSection: React.FC = () => {
  const ref = useRef(null);
  // Trigger animation once when the element comes 50% into view
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const subject = "Majestic snow leopard on a rocky outcrop";

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Section Header/Title (Optional) */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            Generate Stunning Images Instantly
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the future of image creation. Our platform offers unparalleled speed, diverse stylistic options, and breathtaking quality, bringing your visions to life in seconds.
          </p>

          {/* Side-by-Side Animation Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Placeholder 1: Faster, Photorealistic */}
            <div className="flex flex-col items-center">
              <AnimatedImagePlaceholder
                isInView={isInView}
                duration={3} // Faster animation
                finalStyle="Photorealistic"
                subject={subject}
              />
              <p className="mt-4 text-center text-gray-700 dark:text-gray-300 font-medium">
                Style 1: Photorealistic (3s)
              </p>
            </div>

            {/* Placeholder 2: Slower, Stylized */}
            <div className="flex flex-col items-center">
              <AnimatedImagePlaceholder
                isInView={isInView}
                duration={5} // Slower animation
                finalStyle="Stylized Illustration"
                subject={subject}
              />
              <p className="mt-4 text-center text-gray-700 dark:text-gray-300 font-medium">
                Style 2: Stylized (5s)
              </p>
            </div>
          </div>

          {/* Additional Descriptive Text */}
          <div className="mt-12 text-center text-gray-600 dark:text-gray-400 space-y-4 max-w-4xl mx-auto">
             <p>
               Watch as ideas transform into visuals. Compare generation speeds and explore the vast range of artistic styles available, from hyperrealistic renders to imaginative illustrations.
             </p>
             <p>
               Our advanced models ensure high-fidelity outputs, capturing intricate details and nuances according to your prompts. Perfect for artists, designers, and creators of all kinds.
             </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ImageGenerationSection;
