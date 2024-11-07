
import { PokemonList } from '../components/PokemonList';
import { BattleReadyList } from '../components/ReadyForBattle';
import { Col, Layout } from 'antd';
import Searcher from '../components/Searcher';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPokemonDetails, fetchPokemons } from '../store/slices/pokemonSlice';
import { AppDispatch, RootState } from '../store';
import { Pokemon } from '../types/pokemonsTypes';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import '../App.css';
import logo from '../assets/pokemon.png'
import { PokemonDetails } from '../components/PokemonDetails';

export const HomePage = (): JSX.Element => {
      const dispatch = useDispatch<AppDispatch>();

  // Selecciona el estado de los Pokémon desde Redux
    const pokemons = useSelector((state: RootState) => state.pokemon.pokemons);
    const selectedPokemon = useSelector((state: RootState) => state.pokemon.selectedPokemon);
    const loading = useSelector((state: RootState) => state.pokemon.loading);
    const error = useSelector((state: RootState) => state.pokemon.error);
    const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(pokemons);
    const [battleReadyPokemons, setBattleReadyPokemons] = useState<Pokemon[]>([]);

  // Ejecuta fetchPokemons cuando el componente se monte
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

    useEffect(() => {
    setFilteredPokemons(pokemons); // Actualizar los Pokémon visibles cuando cambia el listado
    }, [pokemons]);

    const handleSearch = (query: string) => {
    const filtered = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filtered);
    };

    const handleAddToBattle = (pokemon: Pokemon) => {
    if (battleReadyPokemons.length < 6 && !battleReadyPokemons.find(p => p.id === pokemon.id)) {
      setBattleReadyPokemons([...battleReadyPokemons, pokemon]);
    }
    };

    const handleRemoveFromBattle = (pokemon: Pokemon) => {
    setBattleReadyPokemons(battleReadyPokemons.filter(p => p.id !== pokemon.id));
    };

    const handleSelectPokemon = (pokemon: Pokemon) => {
        dispatch(fetchPokemonDetails(pokemon.id.toString()))
    };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokemons: {error}</p>;
    return (
        <>


                <Layout className="BG">
                    <Content>
                        <Col span={4} offset={11} style={{marginBlock: 25}}>
                            <img src={logo} width={100} alt='poke-wird'/>
                        </Col>
                            <Col>
                        <>
        {selectedPokemon ? (
            <PokemonDetails
            pokemon={selectedPokemon}
            onAddToBattle={handleAddToBattle}
            onRemoveFromBattle={handleRemoveFromBattle}
            isInBattle={!!battleReadyPokemons.find(p => p.id === selectedPokemon.id)}
            />
        ) : (
                                    <>
                                        <Col span={10} offset={8}>
                                <Searcher onSearch={handleSearch} />
                                </Col>
                            <PokemonList pokemons={filteredPokemons}  onAddToBattle={handleAddToBattle} onSelectPokemon={handleSelectPokemon} />
                             </> )}
                            </>

                        </Col>
                    </Content>
                    <Sider width={400}>
                        <Col span={24} style={{ padding: 25, textAlign: 'center'}}>
                            <BattleReadyList />
                        </Col>
                    </Sider>
                </Layout>

        </>
  );
};
