import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons, getPokemonDetails } from '../../api/index';
import { Pokemon } from '../../types/pokemonsTypes';

interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
  loading: false,
  error: null,
};

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    const pokemons = await getPokemons();
    return pokemons.map((pokemon: any, index: number) => ({
      id: index + 1,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    }));
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchPokemonDetails',
  async (pokemonId: string) => {
    return await getPokemonDetails(pokemonId);
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearState(state) {
      state.selectedPokemon = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
    });
    builder.addCase(fetchPokemonDetails.fulfilled, (state, action) => {
      state.selectedPokemon = action.payload;
    });
  },
});

export const { clearState } = pokemonSlice.actions;
export default pokemonSlice.reducer;
