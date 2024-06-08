declare namespace HandlerParams {
  // prop da request axios para pegar todos os nomes dos Pokemons
  export interface IGetPokemonsName {
    offset: number
    limit: number
  }

  // prop da request axios para pegar todos os dados do pokemon pelo nome
  // export interface IGetPokemoInfoByIdOrName {
  //   name: string
  // }

  // retorno da function do service
  export interface ParsedResponseAxios<K> {
    count: number
    next: string | null
    previous: string | null
    results: K[]
  }

  // // interface do value dos objetos da response que vem da api GetPokemonsName
  export interface IPokemonsName {
    name: string
    url: string
  }

  // // interfa da function do service
  // export interface IPokemonValue<K> {
  //   value: K
  // }

  export interface IPokemonSticker {
    id: number
    name: string
    sprites: {
      front_default: string
    }
  }
}
