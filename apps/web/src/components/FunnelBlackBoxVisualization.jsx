import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const FunnelBlackBoxVisualization = () => {
  const { t } = useLanguage();
  
  const stages = t.funnel.stages.map((name, index) => ({
    name,
    visible: index < 2 || index > 3
  }));

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative">
        
        {/* Connecting Line Background */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[hsl(var(--border-color))] -translate-y-1/2 z-0"></div>

        {stages.map((stage, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative z-10 flex flex-col items-center justify-center w-full md:w-32 h-24 rounded-xl border-2 transition-all duration-300
                ${stage.visible 
                  ? 'bg-white border-gray-200 shadow-sm' 
                  : 'bg-[hsl(var(--elevated-dark))] border-[hsl(var(--accent-color))] shadow-[0_0_20px_var(--accent-glow)] scale-110'
                }
              `}
            >
              {stage.visible ? (
                <Eye className="w-5 h-5 text-gray-400 mb-2" />
              ) : (
                <EyeOff className="w-5 h-5 text-[hsl(var(--accent-color))] mb-2" />
              )}
              <span className={`text-sm font-semibold text-center px-2 ${stage.visible ? 'text-gray-600' : 'text-[hsl(var(--primary-text))]'}`}>
                {stage.name}
              </span>
            </motion.div>

            {index < stages.length - 1 && (
              <div className="md:hidden text-gray-300 my-2">
                <ArrowRight className="w-5 h-5 rotate-90" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FunnelBlackBoxVisualization;