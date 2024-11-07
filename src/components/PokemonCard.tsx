import './PokemonList.css';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Pokemon } from '../types/pokemonsTypes';

type Props = {
    pokemon: Pokemon;
    onAddToBattleReady: (pokemon: Pokemon) => void;
    onSelectPokemon: (pokemon: Pokemon) => void;
}
export const PokemonCard = ({ pokemon, onAddToBattleReady, onSelectPokemon }: Props) : JSX.Element => {
    return (
        <Card title={pokemon.name}
            cover={<img src={pokemon.image} alt={pokemon.name} onClick={() => onSelectPokemon(pokemon)} />}
            extra={<PlusCircleOutlined onClick={() => onAddToBattleReady(pokemon)} />}>
            <Meta description="fire, magic"/>
        </Card>
    )
}