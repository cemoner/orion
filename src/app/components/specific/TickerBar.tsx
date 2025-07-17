
'use client'

import React, { useState, useEffect } from 'react';
import { DollarSign, Euro, BarChartBig } from 'lucide-react';

// --- TYPE DEFINITIONS ---
// Defines the structure for each item in the ticker
interface TickerItem {
  id: string;
  icon: React.ElementType;
  name: string;
  value: string;
}

export const marketData: TickerItem[] = [
  { id: 'usd-eur', icon: DollarSign, name: 'USD/EUR', value: '0.92' },
  { id: 'eur-usd', icon: Euro, name: 'EUR/USD', value: '1.08'},
  { id: 'iron-12mm', icon: BarChartBig, name: 'Iron 12MM', value: '2,525.50' },
  { id: 'iron-10mm', icon: BarChartBig, name: 'Iron 10MM', value: '2,505.00' },
  { id: 'iron-08mm', icon: BarChartBig, name: 'Iron 08MM', value: '2,635.00' },
];


// --- TICKER ITEM COMPONENT ---
// Renders a single item in the ticker list.
const TickerItemComponent: React.FC<{ item: TickerItem }> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-center w-full h-20 px-6">
      <div className="flex items-center gap-4"> {/* Using min-w-0 for better flexbox behavior */}
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gray-700/50 rounded-full">
          <Icon className="w-6 h-6 text-gray-300" />
        </div>
        <div>
          <p className="font-semibold text-white text-lg whitespace-nowrap">{item.name}</p>
          <p className="text-md text-gray-400">${item.value}</p>
        </div>
      </div>
    </div>
  );
};

// --- VERTICAL TICKER COMPONENT ---
// The main component that creates the vertical scrolling animation and expands on hover.
const VerticalTicker: React.FC<{items: TickerItem[]; interval?: number }> = ({items, interval = 1500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // This effect handles the animation timer.
  // It now decrements the index to make the ticker scroll downwards.
  useEffect(() => {
    if (isHovered || items.length <= 1) {
      return; // Animation is paused on hover or if there's not enough items
    }
    const timer = setInterval(() => {
      // Decrementing the index moves the list down, creating a "+y" animation feel.
      setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isHovered, items.length, interval]);

  // Calculate the container height. It expands on hover to fit all items.
  const containerHeight = isHovered ? `${items.length * 5}rem` : '5rem'; // 5rem = h-20

  return (
    <div
      className="w-max bg-background-dark backdrop-blur-md fixed bottom-4 left-4 z-10 border border-border-gray rounded-2xl shadow-2xl shadow-black/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold text-center text-text-dark">Live Prices</h2>
      </div>
      {/* This container animates its height to create the expand/collapse effect */}
      <div
        className="relative transition-all duration-500 ease-in-out overflow-hidden"
        style={{ height: containerHeight }}
      >
        {/* This inner container moves the list up and down */}
        <div
          className="absolute top-0 left-0 w-max transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'translateY(0)' : `translateY(-${currentIndex * 5}rem)` }}
        >
          {items.map((item) => (
            <TickerItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalTicker;