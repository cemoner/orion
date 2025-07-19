import React from 'react';

const SustainabilitySection: React.FC = () => {
  const handleLearnMoreClick = () => {
    window.location.href = '/sustainability';
  };

  return (
    <section className="relative w-full h-[650px] text-center text-white bg-gray-800 overflow-hidden">
      <img
        src="/sustainability.png"
        alt="Lush green landscape representing sustainability"
        className="absolute top-0 left-0 w-full h-full object-cover"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          Committed to a Greener Future
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 font-light">
         Doğaya ve insana saygılı bir anlayışı benimseyen Ekinciler Demir Çelik için uygarlık,doğaya karşı olmak değil doğayla birlikte gelişmek”tir. Bu tanımdan hareketle şirket, tesislerinde sürdürülebilirlik prensiplerini hâkim kılmıştır. Şirketin ekolojik dengenin korunması için üzerinde önemle durduğu konular arasında;

        </p>
        <button 
          onClick={handleLearnMoreClick}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 ease-in-out"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default SustainabilitySection;
