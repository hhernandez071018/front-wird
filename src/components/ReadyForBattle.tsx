import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removePokemon } from '../store/slices/battleReadySlice';
import { Card, Button, Image } from 'antd';
import { Pokemon } from '../types/pokemonsTypes';
import { DeleteOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

export const BattleReadyList= (): JSX.Element => {
  const battleReadyPokemons = useSelector((state: RootState) => state.battleReady);
  const dispatch = useDispatch();

  const handleRemoveFromBattleReady = (id: number) => {
    dispatch(removePokemon(id));
  };

  return (
    <div>
      <Title type='warning' level={2}>Listo para el combate</Title>
      {battleReadyPokemons.length === 0 ? (
        <Title type='danger' level={3}>La lista está vacía</Title>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {battleReadyPokemons.map((pokemon: Pokemon) => (
            <Card
              key={pokemon.id}
              title={pokemon.name}
              extra={<Button icon={<DeleteOutlined />} onClick={() => handleRemoveFromBattleReady(pokemon.id)} />}
            >
              <Image src={pokemon.image} alt={pokemon.name} width={100} />
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
