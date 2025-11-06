
import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600">This is a placeholder page for the "{title}" module.</p>
      <p className="text-gray-600 mt-2">The full functionality for this section will be implemented here.</p>
    </div>
  );
};

export default PlaceholderPage;
