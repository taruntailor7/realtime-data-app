import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PriceState {
  prices: { symbol: string, price: number, timestamp: string }[];
}

const initialState: PriceState = {
  prices: [],
};

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setPrices: (state, action: PayloadAction<{ symbol: string, price: number, timestamp: string }[]>) => {
      state.prices = action.payload;
    },
  },
});

export const { setPrices } = priceSlice.actions;
export default priceSlice.reducer;