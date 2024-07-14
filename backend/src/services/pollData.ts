import axios from 'axios';
import Price from '../models/Price';

const symbols = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'bitcoin-cash']; // Use CoinGecko IDs for cryptocurrencies

export const pollData = async () => {
  console.log("Calling PollData for " + symbols);
  try {
    for (const symbol of symbols) {
      const url = `https://api.coingecko.com/api/v3/coins/${symbol}`;
      const options = {
        headers: {
          accept: 'application/json',
          'x-cg-pro-api-key': process.env.API_KEY
        }
      };  

      try {
        const response = await axios.get(url, options);
        const price = response.data.market_data.current_price.usd;
        console.log('price: ', price); 
        const priceData = new Price({
          symbol,
          price
        });
        
        await priceData.save();
      } catch (error) {
        console.error('error:', error);
      }

    }
  } catch (error) {
    console.error('Error polling data:', error);
  }
};