"use client";  // Add this line at the top

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import store from '../store/store';

const PriceTable = dynamic(() => import('../components/PriceTable'), { ssr: false });

const Home: React.FC = () => {
  const [symbol, setSymbol] = useState('bitcoin');

  return (
    <Provider store={store}>
      <div className="flex flex-col items-center p-5 from-gray-100 to-black">
        <h1 className="text-3xl font-bold mb-5 text-balance text-center">Real-Time Price Data (Top 20)</h1>
        <div className="mb-5">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg m-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setSymbol('bitcoin')}
          >
            Bitcoin
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg m-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setSymbol('ethereum')}
          >
            Ethereum
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg m-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setSymbol('litecoin')}
          >
            Litecoin
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg m-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setSymbol('ripple')}
          >
            Ripple
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg m-1 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setSymbol('bitcoin-cash')}
          >
            Bitcoin Cash
          </button>
        </div>
        <PriceTable symbol={symbol} key={symbol} />
      </div>
    </Provider>
  );
};

export default Home;