'use client'

import React, { useState, useEffect } from 'react';
import { DollarSign, Euro, BarChartBig } from 'lucide-react';

interface TickerItem {
  id: string;
  icon: React.ElementType;
  name: string;
  value: string;
}

const initialMarketData: TickerItem[] = [
  { id: 'usd-eur', icon: DollarSign, name: 'USD/TL', value: '...' },
  { id: 'eur-usd', icon: Euro, name: 'EUR/TL', value: '...' },
  { id: 'iron-12mm', icon: BarChartBig, name: 'Iron 12MM+', value: '2,525.50' },
  { id: 'iron-10mm', icon: BarChartBig, name: 'Iron 10MM', value: '2,505.00' },
  { id: 'iron-08mm', icon: BarChartBig, name: 'Iron 08MM', value: '2,635.00' },
];



const TickerItemComponent: React.FC<{ item: TickerItem }> = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="flex items-center w-full h-12 px-4">
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-gray-700/50 rounded-full">
          <Icon className="w-4 h-4 text-gray-300" />
        </div>
        <div>
          <p className="font-semibold text-white text-sm whitespace-nowrap">{item.name}</p>
          <p className="text-sm text-gray-200">{item.value}</p>
        </div>
      </div>
    </div>
  );
};

const VerticalTicker: React.FC<{items: TickerItem[]; interval?: number }> = ({items, interval = 2250 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || items.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isHovered, items.length, interval]);

  const containerHeight = isHovered ? `${items.length * 3}rem` : '3rem';

  return (
    <div
      className="w-max bg-background-dark backdrop-blur-md fixed bottom-4 left-1 z-10 border border-border-gray rounded-2xl shadow-2xl shadow-black/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2">
        <h2 className="text-base font-bold text-center text-text-dark">Live Prices</h2>
      </div>
      <div
        className="relative transition-all duration-500 ease-in-out overflow-hidden"
        style={{ height: containerHeight }}
      >
        <div
          className="top-0 left-0 w-max transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? 'translateY(0)' : `translateY(-${currentIndex * 3}rem)` }}
        >
          {items.map((item) => (
            <TickerItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const LiveDataProvider: React.FC = () => {
    // State to hold the ticker items, initialized with your data structure
    const [marketItems, setMarketItems] = useState<TickerItem[]>(initialMarketData);

    // Effect to fetch live data on mount and then periodically
    useEffect(() => {
        const fetchRates = async () => {
            try {
                // Fetch both currency rates at the same time
                const [usdRes, eurRes] = await Promise.all([
                    fetch('https://api.frankfurter.app/latest?from=USD&to=TRY'),
                    fetch('https://api.frankfurter.app/latest?from=EUR&to=TRY')
                ]);

                if (!usdRes.ok || !eurRes.ok) throw new Error('API fetch failed');

                const usdData = await usdRes.json();
                const eurData = await eurRes.json();

                // Update the state, making sure to find items by their original IDs
                setMarketItems(currentItems =>
                    currentItems.map(item => {
                        if (item.id === 'usd-eur') {
                            return { ...item, value: usdData.rates.TRY.toFixed(4) };
                        }
                        if (item.id === 'eur-usd') {
                            return { ...item, value: eurData.rates.TRY.toFixed(4) };
                        }
                        return item; // Return all other items (iron, etc.) unchanged
                    })
                );
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchRates();
        const intervalId = setInterval(fetchRates, 36000000);

        return () => clearInterval(intervalId);
    }, []);

    return <VerticalTicker items={marketItems} />;
};


export default LiveDataProvider;