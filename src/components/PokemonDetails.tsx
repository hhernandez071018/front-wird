
import {  useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addPokemon, removePokemon } from '../store/slices/battleReadySlice';
import { Button, Card } from 'antd';
import { Pokemon } from '../types/pokemonsTypes';

type PokemonDetailProps = {
  pokemon: Pokemon;
  onAddToBattle: (pokemon: Pokemon) => void;
  onRemoveFromBattle: (pokemon: Pokemon) => void;
  isInBattle: boolean;
};

export const PokemonDetails = ({
  pokemon,
  isInBattle
}: PokemonDetailProps): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToBattleReady = () => {
      if (pokemon) {
      dispatch(addPokemon({...pokemon, image:pokemon.sprites.front_default  }));
    }
  };

  const handleRemoveFromBattleReady = () => {
    if (pokemon) {
      dispatch(removePokemon(pokemon.id));
    }
  };

  if (!pokemon) return <p>Cargando...</p>;
  return (
      <Card style={{ width: 300, margin: '0 auto' }}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100%' }} />
      <h2>{pokemon.name} (#{pokemon.id})</h2>
      <p>Altura: {pokemon.height}</p>
      <p>Tipo: {pokemon.types.join(', ')}</p>
      <h3>Estadísticas base</h3>
      <p>Ataque: {pokemon.stats.attack}</p>
      <p>Defensa: {pokemon.stats.defense}</p>
      <p>Ataque especial: {pokemon.stats.specialAttack}</p>
      <p>Defensa especial: {pokemon.stats.specialDefense}</p>
      <p>Velocidad: {pokemon.stats.speed}</p>

      {isInBattle ? (
        <Button type="primary" danger onClick={() => handleRemoveFromBattleReady()}>
          Eliminar del equipo
        </Button>
      ) : (
        <Button type="primary" onClick={() => handleAddToBattleReady()}>
          Añadir al equipo
        </Button>
          )}
          <Button href="/">Regresar</Button>
    </Card>
  );
};
