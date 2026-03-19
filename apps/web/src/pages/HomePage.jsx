import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage.js';

// Import new visual components
import CRMCallOutcomePanel from '@/components/CRMCallOutcomePanel.jsx';
import TranscriptToCopilotTransform from '@/components/TranscriptToCopilotTransform.jsx';
import FunnelBlackBoxVisualization from '@/components/FunnelBlackBoxVisualization.jsx';
import ConversionGapVisual from '@/components/ConversionGapVisual.jsx';
import SolutionOutputsFlow from '@/components/SolutionOutputsFlow.jsx';
import InfrastructureArchitectureDiagram from '@/components/InfrastructureArchitectureDiagram.jsx';
import ConversionPipelineVisual from '@/components/ConversionPipelineVisual.jsx';
import RoleCard from '@/components/RoleCard.jsx';
import ComparisonColumn from '@/components/ComparisonColumn.jsx';

const HomePage = ({ onBookDemo }) => {
  const { t } = useLanguage();

  const roleData = [
    {
      role: t.roles.repTitle,
      benefits: t.roles.repBenefits,
    },
    {
      role: t.roles.headTitle,
      benefits: t.roles.headBenefits,
    },
    {
      role: t.roles.ceoTitle,
      benefits: t.roles.ceoBenefits,
    },
  ];

  const genericFeatures = t.comparison.genericFeatures.map(text => ({ text, available: true }));
  // Override the last 3 to be false
  genericFeatures[2].available = false;
  genericFeatures[3].available = false;
  genericFeatures[4].available = false;

  const correlliFeatures = t.comparison.correlliFeatures.map(text => ({ text, available: true }));

  return (
    <>
      <Helmet>
        <title>Correlli Sales Copilot - {t.hero.subtitle}</title>
        <meta name="description" content={t.hero.desc} />
      </Helmet>

      {/* Section 1: Hero */}
      <section className="relative min-h-[90dvh] section-dark flex items-center overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTY4LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] pointer-events-none" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-display-1 mb-6" style={{ textWrap: 'balance' }}>
                {t.hero.title}
              </h1>
              <p className="text-display-3 text-[hsl(var(--accent-color))] mb-6">
                {t.hero.subtitle}
              </p>
              <p className="text-body-lg text-[hsl(var(--secondary-text))] mb-10 max-w-prose">
                {t.hero.desc}
              </p>
              <Button
                onClick={onBookDemo}
                size="lg"
                className="bg-[hsl(var(--accent-color))] text-white hover:bg-[hsl(var(--accent-hover))] active:scale-[0.98] transition-all duration-200 text-lg px-8 py-7 rounded-xl shadow-[0_0_20px_var(--accent-glow)]"
              >
                {t.nav.bookDemo}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-auto w-full"
            >
              <CRMCallOutcomePanel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Under-Hero Differentiation */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-2 mb-4" style={{ textWrap: 'balance' }}>
              {t.transcript.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.transcript.subtitle}
            </p>
          </motion.div>
          
          <TranscriptToCopilotTransform />
        </div>
      </section>

      {/* Section 3: Funnel / Black Box Block */}
      <section className="py-24 section-light-alt border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-display-2 mb-6" style={{ textWrap: 'balance' }}>
              {t.funnel.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t.funnel.subtitle}
            </p>
          </motion.div>
          
          <FunnelBlackBoxVisualization />
        </div>
      </section>

      {/* Section 4: Problem Block (Merged) */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--secondary-bg))] to-[hsl(var(--primary-bg))]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="text-display-2 mb-6" style={{ textWrap: 'balance' }}>
                {t.gap.title}
              </h2>
            </motion.div>

            <ConversionGapVisual />
          </div>
        </div>
      </section>

      {/* Section 5: Solution Block */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-display-2 mb-4" style={{ textWrap: 'balance' }}>
              {t.solution.title}
            </h2>
          </motion.div>
          
          <SolutionOutputsFlow />
        </div>
      </section>

      {/* Section 6: Value Block */}
      <section className="py-24 section-light-alt border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-2 mb-4" style={{ textWrap: 'balance' }}>
              {t.roles.title}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roleData.map((data, index) => (
              <RoleCard key={index} {...data} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Infrastructure Block */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--secondary-bg))] to-[hsl(var(--primary-bg))]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-display-2 mb-6" style={{ textWrap: 'balance' }}>
              {t.infra.title}
            </h2>
            <p className="text-xl text-[hsl(var(--secondary-text))]">
              {t.infra.subtitle}
            </p>
          </motion.div>
          
          <InfrastructureArchitectureDiagram />
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium text-[hsl(var(--muted-text))]">
            {t.infra.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-[hsl(var(--deep-surface))] border border-[hsl(var(--border-color))]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Comparison Block */}
      <section className="py-24 section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-2 mb-4" style={{ textWrap: 'balance' }}>
              {t.comparison.title}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ComparisonColumn
              title={t.comparison.genericTitle}
              features={genericFeatures}
              isHighlighted={false}
            />
            <ComparisonColumn
              title={t.comparison.correlliTitle}
              features={correlliFeatures}
              isHighlighted={true}
            />
          </div>
        </div>
      </section>

      {/* Section 9: Compact Positioning Block */}
      <section className="py-24 section-light-alt border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-display-2 mb-16" style={{ textWrap: 'balance' }}>
              {t.pipeline.title}
            </h2>
            
            <ConversionPipelineVisual />
          </motion.div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-32 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--secondary-bg))] to-[hsl(var(--primary-bg))]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--accent-color))] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-display-2 mb-8" style={{ textWrap: 'balance' }}>
              {t.cta.title}
            </h2>
            
            <Button
              onClick={onBookDemo}
              size="lg"
              className="bg-[hsl(var(--accent-color))] text-white hover:bg-[hsl(var(--accent-hover))] active:scale-[0.98] transition-all duration-200 text-xl px-10 py-8 rounded-xl shadow-[0_0_30px_var(--accent-glow)] mb-16"
            >
              {t.cta.button}
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {t.cta.cards.map((card, i) => (
                <div key={i} className="flex items-start space-x-4 bg-[hsl(var(--deep-surface))] p-6 rounded-xl border border-[hsl(var(--border-color))]">
                  <CheckCircle2 className="h-6 w-6 text-[hsl(var(--accent-color))] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base font-bold text-[hsl(var(--primary-text))] mb-1">
                      {card.title}
                    </p>
                    <p className="text-sm text-[hsl(var(--secondary-text))]">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;