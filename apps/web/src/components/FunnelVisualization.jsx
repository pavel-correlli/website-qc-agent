import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FunnelVisualization = () => {
  const stages = [
    'Lead',
    'CRM',
    'First Call',
    'Trial/Intro Session',
    'Follow-up Calls',
    'Sale',
  ];

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        {stages.map((stage, index) => (
          <React.Fragment key={stage}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                relative px-6 py-4 rounded-xl border-2 text-center min-w-[140px]
                ${index >= 2 && index <= 4 
                  ? 'bg-[hsl(var(--primary-bg))] border-[hsl(var(--accent-color))] text-[hsl(var(--primary-text))]' 
                  : 'bg-card border-border text-foreground'
                }
              `}
            >
              <span className="text-sm font-medium">{stage}</span>
              {index >= 2 && index <= 4 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[hsl(var(--accent-color))] text-white text-xs rounded-full whitespace-nowrap">
                  Black box
                </div>
              )}
            </motion.div>
            {index < stages.length - 1 && (
              <ArrowRight className="hidden md:block h-5 w-5 text-muted-foreground flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-8 text-muted-foreground max-w-2xl mx-auto"
      >
        Leadership has no visibility into what happens during calls. Weak reps struggle, managers can't coach effectively, and the pipeline suffers.
      </motion.p>
    </div>
  );
};

export default FunnelVisualization;