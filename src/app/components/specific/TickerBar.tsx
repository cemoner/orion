'use client'

import React, { useState, useEffect } from 'react';
import { DollarSign, Euro, BarChartBig } from 'lucide-react';
import { useTranslations } from "next-intl";

// Define the type for a single ticker item
interface TickerItem {
  id: string;
  icon: React.ElementType;
  name: string;
  value: string;
}

// This function generates the initial data structure. 
// It now correctly receives the translated word for "Iron".
const getInitialMarketData = (ironTranslation: string): TickerItem[] => [
  { id: 'usd-try', icon: DollarSign, name: 'USD/TRY', value: '...' },
  { id: 'eur-try', icon: Euro, name: 'EUR/TRY', value: '...' },
  { id: 'iron-12mm', icon: BarChartBig, name: `${ironTranslation} 12MM+`, value: '2,525.50' },
  { id: 'iron-10mm', icon: BarChartBig, name: `${ironTranslation} 10MM`, value: '2,505.00' },
  { id: 'iron-08mm', icon: BarChartBig, name: `${ironTranslation} 08MM`, value: '2,635.00' },
];

// TickerItemComponent remains unchanged
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

// VerticalTicker component with corrected styling
const VerticalTicker: React.FC<{items: TickerItem[]; interval?: number }> = ({items, interval = 2250 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || items.length <= 1) {
      return;
    }
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [isHovered, items.length, interval]);

  const containerHeight = isHovered ? `${items.length * 3}rem` : '3rem';
  const transformValue = isHovered ? 'translateY(0)' : `translateY(-${currentIndex * 3}rem)`;

  return (
    <div
      className="w-max bg-gray-800 bg-opacity-70 backdrop-blur-md fixed bottom-4 left-4 z-50 border border-gray-700 rounded-2xl shadow-2xl shadow-black/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-2 border-b border-gray-700">
        <h2 className="text-base font-bold text-center text-white">Live Prices</h2>
      </div>
      <div
        className="relative transition-all duration-500 ease-in-out overflow-hidden"
        style={{ height: containerHeight }}
      >
        <div
          className="w-max transition-transform duration-700 ease-in-out"
          style={{ transform: transformValue }}
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
    // Get the translation function from the "Iron" namespace.
    const t = useTranslations("Iron");
    
    // **FIX:** Using 'iron' as the translation key as requested.
    // Your en.json should have: { "Iron": { "iron": "Iron" } }
    // And your tr.json should have: { "Iron": { "iron": "Demir" } }
    const ironWord = t('iron'); 

    // Initialize state with translated data
    const [marketItems, setMarketItems] = useState<TickerItem[]>(() => getInitialMarketData(ironWord));

    // This effect updates the item names whenever the language (and thus ironWord) changes.
    useEffect(() => {
        setMarketItems(currentItems => 
            currentItems.map(item => {
                if (item.id === 'iron-12mm') return { ...item, name: `${ironWord} 12MM+` };
                if (item.id === 'iron-10mm') return { ...item, name: `${ironWord} 10MM` };
                if (item.id === 'iron-08mm') return { ...item, name: `${ironWord} 08MM` };
                return item;
            })
        );
    }, [ironWord]);

    // This effect fetches live currency data.
    useEffect(() => {
        const fetchRates = async () => {
            try {
                const [usdRes, eurRes] = await Promise.all([
                    fetch('https://api.frankfurter.app/latest?from=USD&to=TRY'),
                    fetch('https://api.frankfurter.app/latest?from=EUR&to=TRY')
                ]);

                if (!usdRes.ok || !eurRes.ok) throw new Error('API fetch failed');

                const usdData = await usdRes.json();
                const eurData = await eurRes.json();

                setMarketItems(currentItems =>
                    currentItems.map(item => {
                        if (item.id === 'usd-try') {
                            return { ...item, value: usdData.rates.TRY.toFixed(4) };
                        }
                        if (item.id === 'eur-try') {
                            return { ...item, value: eurData.rates.TRY.toFixed(4) };
                        }
                        return item;
                    })
                );
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        };

        fetchRates();
        const intervalId = setInterval(fetchRates, 300000); 

        return () => clearInterval(intervalId);
    }, []);

    return <VerticalTicker items={marketItems} />;
};

export default LiveDataProvider;
