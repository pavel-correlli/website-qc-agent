import React from 'react';
import { Server, Database, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ArchitectureFlow = () => {
  const components = [
    {
      icon: Server,
      title: 'Your Infrastructure',
      description: 'Deployed on your cloud or on-premise',
    },
    {
      icon: Lock,
      title: 'Correlli Engine',
      description: 'AI processing within your security perimeter',
    },
    {
      icon: Database,
      title: 'Your CRM',
      description: 'Direct integration with Salesforce, HubSpot, etc.',
    },
    {
      icon: Zap,
      title: 'Your Process',
      description: 'Customized to your sales methodology',
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {components.map((component, index) => (
          <motion.div
            key={component.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card-dark p-6 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--accent-color))]/10 mx-auto mb-4">
              <component.icon className="h-7 w-7 text-[hsl(var(--accent-color))]" />
            </div>
            <h3 className="text-lg font-semibold text-[hsl(var(--primary-text))] mb-2">
              {component.title}
            </h3>
            <p className="text-sm text-[hsl(var(--secondary-text))]">
              {component.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 p-6 rounded-xl bg-[hsl(var(--elevated-dark))]/50 border border-[hsl(var(--border-color))]"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[hsl(var(--secondary-text))]">
          <li className="flex items-center space-x-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-color))]" />
            <span>Complete data ownership and control</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-color))]" />
            <span>No vendor lock-in or data silos</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-color))]" />
            <span>Meets enterprise security requirements</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-color))]" />
            <span>Flexible deployment options</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default ArchitectureFlow;