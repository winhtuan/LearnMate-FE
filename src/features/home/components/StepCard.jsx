import React from 'react';

function StepCard({ number, title, description }) {
  return (
    <div className="relative text-center">
      <div className="size-24 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-4xl font-bold text-primary mx-auto mb-8 relative z-20 shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

export default StepCard;
