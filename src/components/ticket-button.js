import React from 'react';

const TicketButton = ({ href, text = "Register", className = "", compact = false }) => {
  if (compact) {
    // Simple version for header
    return (
      <a 
        href={href}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-IWDPurple to-IWDViolet text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:shadow-IWDPurple/30"
        style={{ textDecoration: 'none' }}
      >
        <span>🎟️</span>
        <span>{text}</span>
      </a>
    );
  }

  // Simple version for hero section
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <a 
        href={href}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-IWDPurple via-IWDViolet to-IWDMagenta text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:shadow-IWDPurple/40 hover:scale-105"
        style={{ textDecoration: 'none' }}
      >
        <span className="text-2xl">🎟️</span>
        <span>{text}</span>
        <span className="opacity-80">→</span>
      </a>
    </div>
  );
};

export default TicketButton;

