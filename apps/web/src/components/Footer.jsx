import React from 'react';
import { useLanguage } from '@/hooks/useLanguage.js';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(var(--primary-bg))] border-t border-[hsl(var(--border-color))] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--elevated-dark))] border border-[hsl(var(--border-color))]">
              <span className="text-sm font-bold text-[hsl(var(--accent-color))]">C</span>
            </div>
            <span className="text-lg font-semibold text-[hsl(var(--primary-text))]">
              Correlli
            </span>
          </div>

          {/* Contact & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-[hsl(var(--muted-text))]">
            <a href="mailto:hello@correlli.com" className="hover:text-[hsl(var(--accent-color))] transition-colors">
              hello@correlli.com
            </a>
            <div className="hidden md:block h-4 w-px bg-[hsl(var(--border-color))]"></div>
            <a href="#privacy" className="hover:text-[hsl(var(--accent-color))] transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#terms" className="hover:text-[hsl(var(--accent-color))] transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center md:text-left text-sm text-[hsl(var(--muted-text))]/60">
          © {new Date().getFullYear()} Correlli Sales Copilot. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;