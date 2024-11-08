import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { removePokemon } from "../store/slices/battleReadySlice";
import { Button } from "antd";
import { Pokemon } from "../types/pokemonsTypes";
import { DeleteOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { fetchPokemonDetails } from "../store/slices/pokemonSlice";
import { PokemonCard } from "./PokemonCard";

export const BattleReadyList = (): JSX.Element => {
  const battleReadyPokemons = useSelector(
    (state: RootState) => state.battleReady
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromBattleReady = (id: number) => {
    dispatch(removePokemon(id));
  };

  // ** manda a cargar las caracteristicas del pokemon
  const handleSelectPokemon = (pokemon: Pokemon) => {
    dispatch(fetchPokemonDetails(pokemon.id.toString()));
  };

  return (
    <div>
      <Title className="pokemon-title" type="warning" level={2}>
        Listo para el combate
      </Title>
      {battleReadyPokemons.length === 0 ? (
        <Title type="danger" className="pokemon-subtitle" level={3}>
          La lista está vacía
        </Title>
      ) : (
        <div className="PokemonReadyBattle">
          {battleReadyPokemons.map((pokemon: Pokemon) => (
            <>
              <PokemonCard
                pokemon={pokemon}
                icon={
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemoveFromBattleReady(pokemon.id)}
                  />
                }
                onSelectPokemon={handleSelectPokemon}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};
