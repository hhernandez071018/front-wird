import { useDispatch } from "react-redux";
import { PokemonCard } from "./PokemonCard"
import { addPokemon } from "../store/slices/battleReadySlice";

import { Pokemon } from "../types/pokemonsTypes";


type Props = {
    pokemons: Pokemon[];
    onAddToBattle: (pokemon: Pokemon) => void;
  onSelectPokemon: (pokemon: Pokemon) => void;
}
export const PokemonList = ({pokemons, onSelectPokemon} : Props): JSX.Element => {

  const dispatch = useDispatch();

    const handleAddToBattleReady = (pokemon: Pokemon) => {
    dispatch(addPokemon(pokemon));
    };

    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => (
                <PokemonCard
                key={pokemon.id}
                    pokemon={pokemon}
                    onSelectPokemon={onSelectPokemon}
                onAddToBattleReady={handleAddToBattleReady}
                />
            ))}
        </div>
    )
};
