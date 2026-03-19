import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const RoleCard = ({ role, benefits, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative overflow-hidden group"
    >
      {/* Hover accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[hsl(var(--accent-color))] to-[hsl(var(--accent-pressed))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{role}</h3>
      <ul className="space-y-4 flex-1">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--secondary-light-bg))] text-[hsl(var(--accent-color))]">
                <Check className="h-3 w-3" strokeWidth={3} />
              </div>
            </div>
            <span className="text-base text-gray-600 leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RoleCard;