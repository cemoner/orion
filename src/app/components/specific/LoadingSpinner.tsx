import React from 'react';
export default function App() {
  return (
    <>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes reverse-spin {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            /* Base state using the light #F5FaFF color */
            box-shadow: 0 0 8px 0px rgba(245, 250, 255, 0.7), 0 0 16px 0px rgba(245, 250, 255, 0.5);
            background-color: #F5FaFF;
            border-color: #F5FaFF;
          }
          50% {
            /* Pulsing state using the vibrant #2f79ed color */
            box-shadow: 0 0 16px 4px rgba(47, 121, 237, 0.8), 0 0 32px 8px rgba(47, 121, 237, 0.6);
            background-color: #2f79ed;
            border-color: #2f79ed;
          }
        }
      `}</style>


      <div className="flex items-center justify-center w-full min-h-screen bg-gray-900">
        <LoadingSpinner />
      </div>
    </>
  );
}

const LoadingSpinner = () => {
  return (
    // This new top-level container aligns the spinner and the text side-by-side.
    <div className="flex items-center justify-center">
      {/* This container holds the animated spinner parts. */}
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div
          className="absolute h-full w-full rounded-full border-2"
          style={{ animation: 'pulse-glow 2s infinite alternate', animationDelay: '-1s', backgroundColor: 'transparent' }}
        ></div>
        
        {/* The new inner circle. */}
        <div
          className="absolute h-10 w-10 rounded-full border-2"
          style={{ animation: 'pulse-glow 2s infinite alternate', animationDelay: '-1.5s', backgroundColor: 'transparent' }}
        ></div>
        
      </div>

      <span className="ml-2 relative -top-0 font-bold text-6xl tracking-wider" style={{ color: '#2f79ed' }}>
        RION
      </span>
    </div>
  );
};
