import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../types/pokemonsTypes';

const MAX_BATTLE_POKEMONS = 6;

const battleReadySlice = createSlice({
  name: 'battleReady',
  initialState: [] as Pokemon[],
  reducers: {
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      if (state.length < MAX_BATTLE_POKEMONS) {
        if (!state.find(p => p.id === action.payload.id)) {
          state.push(action.payload);
        }
      }
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      return state.filter(pokemon => pokemon.id !== action.payload);
    }
  }
});

export const { addPokemon, removePokemon } = battleReadySlice.actions;
export default battleReadySlice.reducer;
