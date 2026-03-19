import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const ConversionGapVisual = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-4xl mx-auto bg-[hsl(var(--elevated-dark))] rounded-2xl border border-[hsl(var(--border-color))] p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--accent-color))]/10 rounded-full blur-3xl"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Stats Side */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-end space-x-4"
          >
            <div className="w-4 h-24 bg-[hsl(var(--accent-color))] rounded-t-md"></div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--primary-text))] tracking-tight">15%</div>
              <div className="text-[hsl(var(--secondary-text))] font-medium mt-1">{t.gap.topReps}</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-end space-x-4"
          >
            <div className="w-4 h-8 bg-[hsl(var(--muted-text))] rounded-t-md"></div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--muted-text))] tracking-tight">5%</div>
              <div className="text-[hsl(var(--secondary-text))] font-medium mt-1">{t.gap.weakReps}</div>
            </div>
          </motion.div>
        </div>

        {/* Message Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-[hsl(var(--accent-color))]/10 border border-[hsl(var(--accent-color))]/20 rounded-xl p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-[hsl(var(--accent-color))]/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-[hsl(var(--accent-color))]" />
            </div>
            <h3 className="text-xl font-bold text-[hsl(var(--primary-text))]">{t.gap.upsideTitle}</h3>
          </div>
          <p className="text-[hsl(var(--secondary-text))] leading-relaxed mb-4">
            {t.gap.upsideText}
          </p>
          <div className="flex items-center text-sm text-[hsl(var(--accent-color))] font-medium">
            <Target className="w-4 h-4 mr-2" />
            {t.gap.upsideAction}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ConversionGapVisual;