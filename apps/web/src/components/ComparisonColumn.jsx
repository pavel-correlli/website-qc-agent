import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonColumn = ({ title, features, isHighlighted }) => {
  return (
    <div className={`
      rounded-2xl p-8 md:p-10 transition-all duration-300 h-full
      ${isHighlighted 
        ? 'bg-[hsl(var(--elevated-dark))] border border-[hsl(var(--accent-color))]/30 shadow-[0_0_30px_var(--accent-glow)] relative overflow-hidden' 
        : 'bg-gray-50 border border-gray-200 opacity-90'
      }
    `}>
      {isHighlighted && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--accent-color))] opacity-10 blur-3xl rounded-full"></div>
      )}
      
      <h3 className={`text-2xl font-bold mb-8 ${isHighlighted ? 'text-[hsl(var(--primary-text))]' : 'text-gray-600'}`}>
        {title}
      </h3>
      
      <ul className="space-y-5 relative z-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-0.5">
              {feature.available ? (
                <div className={`flex h-6 w-6 items-center justify-center rounded-full ${isHighlighted ? 'bg-[hsl(var(--accent-color))]/20 text-[hsl(var(--accent-color))]' : 'bg-gray-200 text-gray-500'}`}>
                  <Check className="h-4 w-4" strokeWidth={3} />
                </div>
              ) : (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200/50 text-gray-400">
                  <X className="h-4 w-4" strokeWidth={2} />
                </div>
              )}
            </div>
            <span className={`text-base leading-relaxed ${isHighlighted ? 'text-[hsl(var(--secondary-text))]' : 'text-gray-500'}`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComparisonColumn;