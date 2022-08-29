import React from 'react';

const Label = ({ title, text, className }: {title: string, text?: string, className?: string}) => (
  <div className={`mb-1 ${className}`}>
    <span className="font-semibold mr-1">{title}:</span>
    <span>{text}</span>
  </div>
);

export default Label;
