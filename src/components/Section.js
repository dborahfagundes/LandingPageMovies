import React from 'react';
import './Section.css';

const Section = ({ title, children }) => {
  return (
    <section className="custom-section">
      <h2>{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;