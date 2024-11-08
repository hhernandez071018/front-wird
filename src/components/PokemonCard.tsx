import "./PokemonList.css";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Pokemon } from "../types/pokemonsTypes";

type Props = {
  pokemon: Pokemon;
  onSelectPokemon: (pokemon: Pokemon) => void;
  icon?: any;
};
export const PokemonCard = ({
  pokemon,
  onSelectPokemon,
  icon,
}: Props): JSX.Element => {
  return (
    <Card
      title={pokemon.name}
      cover={
        <img
          src={pokemon.image}
          alt={pokemon.name}
          onClick={() => onSelectPokemon(pokemon)}
        />
      }
      extra={icon}
    >
      <Meta description="Clic en la imagen para ver detalles" />
    </Card>
  );
};
