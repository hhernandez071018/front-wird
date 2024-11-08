import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addPokemon, removePokemon } from "../store/slices/battleReadySlice";
import { Button, Card } from "antd";
import { Pokemon } from "../types/pokemonsTypes";
import { clearState } from "../store/slices/pokemonSlice";
import PokemonStatsChart from "./PokemonCharts";

type PokemonDetailProps = {
  pokemon?: Pokemon;
  onAddToBattle?: (pokemon: Pokemon) => void;
  onRemoveFromBattle?: (pokemon: Pokemon) => void;
  isInBattle?: boolean;
};

export const PokemonDetails = ({
  pokemon,
  isInBattle,
}: PokemonDetailProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToBattleReady = () => {
    if (pokemon) {
      dispatch(
        addPokemon({ ...pokemon, image: pokemon.sprites.front_default })
      );
    }
  };

  const handleRemoveFromBattleReady = () => {
    if (pokemon) {
      dispatch(removePokemon(pokemon.id));
    }
  };

  const handleClearSelectPokemon = () => {
    dispatch(clearState());
  };

  if (!pokemon) return <p>Cargando...</p>;
  return (
    <Card style={{ width: '30%', margin: "0 auto" }}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={{ width: "100%" }}
        loading="lazy"
      />
      <h2>
        {pokemon.name.toUpperCase()} (#{pokemon.id})
      </h2>
      <p>Altura: {pokemon.height}</p>
      <p>
        Tipo: {pokemon.types.map((typeObj) => typeObj.type.name).join(", ")}
      </p>
      <h3>Estadísticas base</h3>
      <PokemonStatsChart stats={pokemon.stats} />

      {isInBattle ? (
        <Button
          type="primary"
          danger
          onClick={() => handleRemoveFromBattleReady()}
        >
          Eliminar del equipo
        </Button>
      ) : (
        <Button type="primary" onClick={() => handleAddToBattleReady()}>
          Añadir al equipo
        </Button>
      )}
      <Button
        style={{ marginInlineStart: 15 }}
        type="primary"
        onClick={() => handleClearSelectPokemon()}
      >
        Regresar
      </Button>
    </Card>
  );
};
