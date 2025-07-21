import React from 'react';

const SustainabilitySection: React.FC = () => {
  const handleLearnMoreClick = () => {
    window.location.href = '/sustainability';
  };

  return (
    <section className="relative w-full h-[720px] text-center text-white bg-border-gray overflow-hidden">
      <img
        src="/sustainability.png"
        alt="Lush green landscape representing sustainability"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0.9"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Committed to a Greener Future
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam, quia quam dolor laudantium atque vel velit non doloremque architecto. Odit saepe exercitationem aperiam! Distinctio ut minima vel labore nulla fugiat illo sint necessitatibus aliquid ad dicta, error incidunt adipisci, ullam animi odit suscipit ratione porro placeat saepe nihil repellendus.

        </p>
        <button 
          onClick={handleLearnMoreClick}
          className="bg-sustainability-green hover:bg-sustainability-green-dark text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 ease-in-out"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default SustainabilitySection;
