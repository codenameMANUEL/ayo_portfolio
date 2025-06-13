import React from 'react';

export const Logo = ({ logo }) => {
  return (
    <div className="flex-shrink-0 flex items-center justify-center px-8">
      <div 
        className="w-20 h-20 flex items-center justify-center"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted brand logo SVGs
        dangerouslySetInnerHTML={{ __html: logo.svg }}
        style={{
          filter: 'brightness(0) saturate(100%) invert(95%) sepia(4%) saturate(316%) hue-rotate(314deg) brightness(98%) contrast(92%)'
        }}
      />
    </div>
  );
};