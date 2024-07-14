import { configureStore } from '@reduxjs/toolkit';
import priceReducer from './slices/priceSlice';

const store = configureStore({
  reducer: {
    prices: priceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;