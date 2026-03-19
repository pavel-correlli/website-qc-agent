import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, User, FileText, ArrowRight, Target, Database } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const CRMCallOutcomePanel = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Decorative background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(var(--accent-color))] to-purple-600 rounded-2xl blur opacity-20"></div>
      
      <div className="relative bg-[hsl(var(--elevated-dark))] border border-[hsl(var(--border-color))] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
        {/* CRM Header */}
        <div className="bg-[hsl(var(--deep-surface))] p-4 border-b border-[hsl(var(--border-color))] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-inner">
              {t.crm.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-[hsl(var(--primary-text))] font-semibold text-sm">{t.crm.name}</h3>
              <p className="text-[hsl(var(--muted-text))] text-xs">{t.crm.role}</p>
            </div>
          </div>
          <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
            {t.crm.activeDeal}
          </div>
        </div>

        {/* CRM Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 custom-scrollbar">
          
          {/* Correlli Injection Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-2 text-xs font-medium text-[hsl(var(--accent-color))] bg-[hsl(var(--accent-color))]/10 py-2 rounded-lg border border-[hsl(var(--accent-color))]/20"
          >
            <Database className="w-3.5 h-3.5" />
            <span>{t.crm.banner}</span>
            <span className="text-[hsl(var(--muted-text))] ml-2 font-normal">{t.crm.justNow}</span>
          </motion.div>

          {/* Section: CRM Updated (Most Prominent) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-center text-xs font-semibold text-[hsl(var(--muted-text))] uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 mr-1.5" /> {t.crm.updated}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[hsl(var(--deep-surface))] p-3 rounded-lg border border-[hsl(var(--border-color))]">
                <div className="text-[hsl(var(--muted-text))] text-xs mb-1">{t.crm.stageLabel}</div>
                <div className="text-[hsl(var(--primary-text))] text-sm font-medium flex items-center">
                  {t.crm.stageValue} <ArrowRight className="w-3 h-3 ml-1 text-[hsl(var(--accent-color))]" />
                </div>
              </div>
              <div className="bg-[hsl(var(--deep-surface))] p-3 rounded-lg border border-[hsl(var(--border-color))]">
                <div className="text-[hsl(var(--muted-text))] text-xs mb-1">{t.crm.dealValueLabel}</div>
                <div className="text-[hsl(var(--primary-text))] text-sm font-medium text-green-400">{t.crm.dealValue}</div>
              </div>
            </div>
          </motion.div>

          {/* Section: Feedback */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <div className="flex items-center text-xs font-semibold text-[hsl(var(--accent-color))] uppercase tracking-wider">
              <User className="w-3.5 h-3.5 mr-1.5" /> {t.crm.feedbackTitle}
            </div>
            <div className="bg-[hsl(var(--accent-color))]/5 p-4 rounded-lg border border-[hsl(var(--accent-color))]/20 text-sm text-[hsl(var(--secondary-text))] leading-relaxed">
              <span className="text-[hsl(var(--primary-text))] font-medium block mb-1">{t.crm.feedbackGood}</span>
              {t.crm.feedbackBad}
            </div>
          </motion.div>

          {/* Section: Context */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-2"
          >
            <div className="flex items-center text-xs font-semibold text-[hsl(var(--muted-text))] uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 mr-1.5" /> {t.crm.contextTitle}
            </div>
            <div className="bg-[hsl(var(--deep-surface))] p-4 rounded-lg border border-[hsl(var(--border-color))] text-sm text-[hsl(var(--secondary-text))] leading-relaxed">
              {t.crm.contextText} <span className="text-[hsl(var(--primary-text))] font-medium">{t.crm.contextObjection}</span> {t.crm.contextObjectionText}
            </div>
          </motion.div>

          {/* Section: Next Step */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="space-y-2 pb-4"
          >
            <div className="flex items-center text-xs font-semibold text-[hsl(var(--muted-text))] uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 mr-1.5" /> {t.crm.nextStepTitle}
            </div>
            <div className="bg-[hsl(var(--deep-surface))] p-3 rounded-lg border border-[hsl(var(--border-color))] flex items-start space-x-3">
              <div className="mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-color))]" />
              </div>
              <div>
                <div className="text-[hsl(var(--primary-text))] text-sm font-medium">{t.crm.nextStepText}</div>
                <div className="text-[hsl(var(--muted-text))] text-xs mt-1">{t.crm.due}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CRMCallOutcomePanel;