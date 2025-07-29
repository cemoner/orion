import React from 'react';

// Define the props the component will accept
interface BoilerplatePageProps {
  title: string;
  description: string;
}

const BoilerplatePage: React.FC<BoilerplatePageProps> = ({ title, description }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          {description}
        </p>
        {/* You can add more shared components or layout elements here */}
      </div>
    </main>
  );
};

export default BoilerplatePage;