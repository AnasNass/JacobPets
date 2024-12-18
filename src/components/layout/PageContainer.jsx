import React from 'react';

const PageContainer = ({ children, title }) => (
  <div className="bg-background min-h-screen w-full">
    <div className="max-w-screen-xl mx-auto p-8">
      {title && <h2 className="text-3xl font-bold mb-8 text-text text-center">{title}</h2>}
      {children}
    </div>
  </div>
);

export default PageContainer;