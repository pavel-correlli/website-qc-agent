import React from 'react';
import { motion } from 'framer-motion';

const OutputCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--secondary-light-bg))] text-[hsl(var(--accent-color))]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-base text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default OutputCard;