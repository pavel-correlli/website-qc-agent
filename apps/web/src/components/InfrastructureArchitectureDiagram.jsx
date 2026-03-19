import React from 'react';
import { motion } from 'framer-motion';
import { Server, Lock, Database, LayoutDashboard, ArrowRight, Settings } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const InfrastructureArchitectureDiagram = () => {
  const { t } = useLanguage();

  const nodes = [
    { icon: Server, label: t.infra.nodes[0].label, sub: t.infra.nodes[0].sub },
    { icon: Lock, label: t.infra.nodes[1].label, sub: t.infra.nodes[1].sub, highlight: true },
    { icon: Database, label: t.infra.nodes[2].label, sub: t.infra.nodes[2].sub },
    { icon: LayoutDashboard, label: t.infra.nodes[3].label, sub: t.infra.nodes[3].sub }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-[hsl(var(--deep-surface))] rounded-2xl border border-[hsl(var(--border-color))] p-8 md:p-12 shadow-2xl">
      
      <div className="flex items-center justify-center mb-12 space-x-2 text-[hsl(var(--accent-color))]">
        <Settings className="w-5 h-5" />
        <span className="text-sm font-semibold uppercase tracking-wider">{t.infra.badge}</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
        
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-[hsl(var(--border-color))] -translate-y-1/2 z-0"></div>

        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`
                relative z-10 flex flex-col items-center justify-center w-full md:w-48 h-40 rounded-xl border transition-all duration-300
                ${node.highlight 
                  ? 'bg-[hsl(var(--elevated-dark))] border-[hsl(var(--accent-color))] shadow-[0_0_20px_var(--accent-glow)]' 
                  : 'bg-[hsl(var(--primary-bg))] border-[hsl(var(--border-color))]'
                }
              `}
            >
              <div className={`p-3 rounded-lg mb-3 ${node.highlight ? 'bg-[hsl(var(--accent-color))]/20 text-[hsl(var(--accent-color))]' : 'bg-[hsl(var(--deep-surface))] text-[hsl(var(--muted-text))]'}`}>
                <node.icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-[hsl(var(--primary-text))] text-center px-2 mb-1">
                {node.label}
              </span>
              <span className="text-xs text-[hsl(var(--muted-text))] text-center">
                {node.sub}
              </span>
            </motion.div>

            {index < nodes.length - 1 && (
              <div className="md:hidden text-[hsl(var(--border-color))] my-2">
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InfrastructureArchitectureDiagram;