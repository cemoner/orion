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
            /* Base state using a light color */
            box-shadow: 0 0 8px 0px rgba(245, 250, 255, 0.7), 0 0 16px 0px rgba(245, 250, 255, 0.5);
            background-color: #F5FaFF;
            border-color: #F5FaFF;
          }
          50% {
            /* Pulsing state using the vibrant blue */
            box-shadow: 0 0 16px 4px rgba(47, 121, 237, 0.8), 0 0 32px 8px rgba(47, 121, 237, 0.6);
            background-color: #2f79ed;
            border-color: #2f79ed;
          }
        }
        
        /* Corrected animation for a truly seamless loop */
        @keyframes move-line {
            0% {
                transform: translateX(-100%); /* Start completely off-screen left */
            }
            100% {
                transform: translateX(100%); /* End completely off-screen right */
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
    // This container stacks the spinner and the line vertically.
    <div className="flex flex-col items-center">
      {/* This container aligns the spinner and the text side-by-side. */}
      <div className="flex items-center justify-center">
        {/* This container holds the animated spinner parts. */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div
            className="absolute h-full w-full rounded-full border-2"
            style={{ animation: 'pulse-glow 2s infinite alternate', animationDelay: '-1s', backgroundColor: 'transparent' }}
          ></div>
          
          {/* The inner circle. */}
          <div
            className="absolute h-10 w-10 rounded-full border-4"
            style={{ animation: 'pulse-glow 2s infinite alternate', animationDelay: '-1.5s', backgroundColor: 'transparent' }}
          ></div>
        </div>

        <span className="ml-4 font-bold text-6xl tracking-wider" style={{ color: '#2f79ed' }}>
          RION
        </span>
      </div>

      {/* Container for the animated line */}
      <div className="relative w-56 h-1 mt-4 overflow-hidden rounded-full">
        {/* The moving line element, now with corrected animation */
        }
        <div
          className="absolute h-full" /* Removed w-full to use inline style for width */
          style={{
            width: '300%', /* Made 200% longer (100% original + 200% increase) */
            background: 'linear-gradient(to right, #2f79ed, #F5FaFF)',
            animation: 'move-line 4s linear infinite' /* Increased duration for the longer line */
          }}
        ></div>
      </div>
    </div>
  );
};
