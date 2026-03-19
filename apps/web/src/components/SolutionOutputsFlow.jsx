import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, Clock, Database, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const SolutionOutputsFlow = () => {
  const { t } = useLanguage();

  const outputs = [
    {
      icon: FileText,
      title: t.solution.contextTitle,
      description: t.solution.contextDesc,
      delay: 0.2
    },
    {
      icon: Zap,
      title: t.solution.feedbackTitle,
      description: t.solution.feedbackDesc,
      delay: 0.3
    },
    {
      icon: Clock,
      title: t.solution.nextStepTitle,
      description: t.solution.nextStepDesc,
      delay: 0.4
    },
    {
      icon: Database,
      title: t.solution.autoFillTitle,
      description: t.solution.autoFillDesc,
      delay: 0.5
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        
        {/* Central Call Node */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-20 flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-color))] to-[hsl(var(--accent-pressed))] flex items-center justify-center shadow-[0_0_30px_var(--accent-glow)] mb-4">
            <PhoneCall className="w-10 h-10 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">{t.solution.center}</span>
        </motion.div>

        {/* Connecting Lines (Desktop) */}
        <div className="hidden lg:block w-16 h-px bg-gradient-to-r from-[hsl(var(--accent-color))] to-transparent relative z-10"></div>

        {/* Output Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20 w-full lg:w-auto">
          {outputs.map((output, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: output.delay }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
            >
              <div className="p-3 rounded-lg bg-[hsl(var(--secondary-light-bg))] text-[hsl(var(--accent-color))] flex-shrink-0">
                <output.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{output.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{output.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SolutionOutputsFlow;