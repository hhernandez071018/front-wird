import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonSlice';
import battleReadyReducer from './slices/battleReadySlice';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    battleReady: battleReadyReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
