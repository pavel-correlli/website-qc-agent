import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useLanguage } from '@/hooks/useLanguage.js';

const Header = ({ onBookDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.product, href: '#product' },
    { label: t.nav.why, href: '#why-correlli' },
    { label: t.nav.infra, href: '#infrastructure' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border-color))] bg-[hsl(var(--primary-bg))]/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-opacity duration-200 hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--accent-color))] to-[hsl(var(--accent-pressed))] shadow-[0_0_15px_var(--accent-glow)]">
              <span className="text-lg font-bold text-white">C</span>
            </div>
            <span className="text-xl font-bold text-[hsl(var(--primary-text))] tracking-tight">
              Correlli Sales Copilot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[hsl(var(--secondary-text))] transition-colors duration-200 hover:text-[hsl(var(--accent-color))]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher />
            <Button
              onClick={onBookDemo}
              className="bg-[hsl(var(--accent-color))] text-white hover:bg-[hsl(var(--accent-hover))] active:bg-[hsl(var(--accent-pressed))] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_var(--accent-glow)] rounded-lg px-6"
            >
              {t.nav.bookDemo}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[hsl(var(--primary-text))] hover:bg-[hsl(var(--elevated-dark))]">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[hsl(var(--secondary-bg))] border-[hsl(var(--border-color))]">
                <div className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-[hsl(var(--secondary-text))] transition-colors duration-200 hover:text-[hsl(var(--accent-color))]"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="pt-6 border-t border-[hsl(var(--border-color))]">
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                        onBookDemo();
                      }}
                      className="bg-[hsl(var(--accent-color))] text-white hover:bg-[hsl(var(--accent-hover))] active:scale-[0.98] transition-all duration-200 w-full rounded-lg py-6 text-lg shadow-[0_0_20px_var(--accent-glow)]"
                    >
                      {t.nav.bookDemo}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;