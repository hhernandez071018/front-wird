export interface Pokemon {
  id: number;
  name: string;
    image: string;
    sprites: {
        front_default: string
    };
  height: number;
  weight: number;
  types: string[];
  stats: {
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

export interface BattleReadyState {
  pokemons: Pokemon[];
}