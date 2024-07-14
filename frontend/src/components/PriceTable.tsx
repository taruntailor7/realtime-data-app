import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState, AppDispatch } from '../store/store';
import { setPrices } from '../store/slices/priceSlice';

interface PriceTableProps {
  symbol: string;
}

const PriceTable: React.FC<PriceTableProps> = ({ symbol }) => {
  const dispatch = useDispatch<AppDispatch>();
  const prices = useSelector((state: RootState) => state.prices.prices);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(`https://realtime-data-app.onrender.com/api/prices/${symbol}`);
        dispatch(setPrices(response.data));
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    };

    fetchPrices(); // Fetch initial data
    const interval = setInterval(fetchPrices, 3000); // Fetch every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dispatch, symbol]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-black text-white border border-gray-800 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-800 text-gray-300 text-left">
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {prices.length > 0 ? (
            prices.map((price) => (
              <tr key={price.timestamp} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="px-4 py-2">{price.symbol}</td>
                <td className="px-4 py-2">{price.price.toFixed(4)} $</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="px-4 py-2 text-center">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;