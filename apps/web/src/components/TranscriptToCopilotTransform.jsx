import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

const TranscriptToCopilotTransform = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-5xl mx-auto">
      
      {/* Left: Generic Tool (Transcript) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex-1 w-full bg-white rounded-2xl border border-gray-200 shadow-sm p-6 opacity-80 grayscale-[30%]"
      >
        <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-100">
          <FileText className="w-5 h-5 text-gray-400" />
          <span className="font-semibold text-gray-600">{t.transcript.genericTitle}</span>
        </div>
        
        <div className="space-y-4">
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">{t.transcript.rawTranscript}</div>
          <div className="space-y-3">
            <div className="flex space-x-3">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-500 w-full">
                {t.transcript.msg1}
              </div>
            </div>
            <div className="flex space-x-3 flex-row-reverse">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 ml-3"></div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-500 w-full">
                {t.transcript.msg2}
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-500 w-full">
                {t.transcript.msg3}
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">{t.transcript.aiSummary}</div>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t.transcript.summaryText}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Center: Transformation Arrow */}
      <div className="hidden lg:flex flex-col items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-[hsl(var(--accent-color))]/10 flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-[hsl(var(--accent-color))]" />
        </div>
      </div>

      {/* Right: Correlli Copilot */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex-1 w-full bg-[hsl(var(--elevated-dark))] rounded-2xl border border-[hsl(var(--accent-color))]/30 shadow-[0_0_30px_var(--accent-glow)] p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--accent-color))] opacity-10 blur-3xl rounded-full"></div>
        
        <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-[hsl(var(--border-color))] relative z-10">
          <Zap className="w-5 h-5 text-[hsl(var(--accent-color))]" />
          <span className="font-semibold text-[hsl(var(--primary-text))]">{t.transcript.copilotTitle}</span>
        </div>

        <div className="space-y-4 relative z-10">
          <div className="bg-[hsl(var(--deep-surface))] rounded-xl p-4 border border-[hsl(var(--border-color))]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[hsl(var(--accent-color))] uppercase tracking-wider">{t.transcript.autoFill}</span>
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-color))]" />
            </div>
            <div className="text-sm text-[hsl(var(--primary-text))]">{t.transcript.autoFillText} <span className="font-medium text-[hsl(var(--accent-color))]">{t.transcript.autoFillStage}</span></div>
          </div>

          <div className="bg-[hsl(var(--deep-surface))] rounded-xl p-4 border border-[hsl(var(--border-color))]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[hsl(var(--accent-color))] uppercase tracking-wider">{t.transcript.nextStep}</span>
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--accent-color))]" />
            </div>
            <div className="text-sm text-[hsl(var(--primary-text))]">{t.transcript.nextStepText}</div>
          </div>

          <div className="bg-[hsl(var(--accent-color))]/10 rounded-xl p-4 border border-[hsl(var(--accent-color))]/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[hsl(var(--accent-color))] uppercase tracking-wider">{t.transcript.coaching}</span>
              <Zap className="w-4 h-4 text-[hsl(var(--accent-color))]" />
            </div>
            <div className="text-sm text-[hsl(var(--secondary-text))]">
              {t.transcript.coachingGood} <span className="text-[hsl(var(--primary-text))] font-medium">{t.transcript.coachingMissed}</span> {t.transcript.coachingBad}
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default TranscriptToCopilotTransform;