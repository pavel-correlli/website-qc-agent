import React from 'react';
import { motion } from 'framer-motion';
import { Phone, FileSearch, Zap, Database, ArrowRightCircle, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const ConversionPipelineVisual = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Phone, label: t.pipeline.steps[0].label, desc: t.pipeline.steps[0].desc },
    { icon: FileSearch, label: t.pipeline.steps[1].label, desc: t.pipeline.steps[1].desc },
    { icon: Zap, label: t.pipeline.steps[2].label, desc: t.pipeline.steps[2].desc },
    { icon: Database, label: t.pipeline.steps[3].label, desc: t.pipeline.steps[3].desc },
    { icon: ArrowRightCircle, label: t.pipeline.steps[4].label, desc: t.pipeline.steps[4].desc },
    { icon: TrendingUp, label: t.pipeline.steps[5].label, desc: t.pipeline.steps[5].desc, highlight: true }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2 relative">
        
        {/* Connecting Line Background */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative z-10 flex flex-col items-center justify-center w-full md:w-40 h-32 rounded-xl border transition-all duration-300
                ${step.highlight 
                  ? 'bg-[hsl(var(--accent-color))] border-[hsl(var(--accent-color))] text-white shadow-[0_0_20px_var(--accent-glow)] scale-105' 
                  : 'bg-white border-gray-200 text-gray-800 shadow-sm hover:shadow-md'
                }
              `}
            >
              <step.icon className={`w-6 h-6 mb-2 ${step.highlight ? 'text-white' : 'text-[hsl(var(--accent-color))]'}`} />
              <span className="font-bold text-sm text-center px-2">{step.label}</span>
              <span className={`text-xs text-center px-2 mt-1 ${step.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                {step.desc}
              </span>
            </motion.div>
            
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.05 }}
                className="md:hidden text-gray-300 my-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-90">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ConversionPipelineVisual;