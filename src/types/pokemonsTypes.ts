
type Stat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};
export interface Pokemon {
  id: number;
  name: string;
    image: string;
    sprites: {
        front_default: string
    };
  height: number;
  weight: number;
  types: [{
    type: {
      name: string
    }
  }];
  stats: Stat[]
}

export interface BattleReadyState {
  pokemons: Pokemon[];
}


