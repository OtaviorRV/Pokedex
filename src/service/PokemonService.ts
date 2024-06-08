import api from './api'

class PokemonApi {
  public async getPokemonsInfo(
    params: HandlerParams.IGetPokemonsName
  ): Promise<any[]> {
    const res = await api.get<
      HandlerParams.ParsedResponseAxios<HandlerParams.IPokemonsName>
    >('/pokemon', {
      params
    })
    let pokesInfo: any[] = []

    res.data.results.forEach(async (result) => {
      const { data: info } = await api.get(result.url)
      
      const {data:about:{flavor_text_entries[0]}} = await api.get(`https://pokeapi.co/api/v2/pokemon-species/${info.id}/`)
      const pokeInfo = { about}
      pokesInfo.push(data.data)
    })

    // pokesInfo.sort((a, b) => a.id - b.id)

    // pokesInfo.forEach((item) => console.log(item.id))

    return pokesInfo
  }

  // public async getPokemonsNames(
  //   params: HandlerParams.IGetPokemonsName
  // ): Promise<HandlerParams.ParsedResponseAxios<HandlerParams.IPokemonsName>> {
  //   const res = await api.get<
  //     HandlerParams.ParsedResponseAxios<HandlerParams.IPokemonsName>
  //   >('/pokemon', {
  //     params
  //   })

  //   return res.data
  // }

  // public async getPokemoInfoBySticker(
  //   params: HandlerParams.IGetPokemoInfoByIdOrName
  // ) {
  //   const url = `/pokemon/${params.name}`

  //   const { data } = await api.get(url)

  //   const infoSticker: HandlerParams.IPokemonSticker = {
  //     id: data.id,
  //     name: data.name,
  //     sprites: { front_default: data.sprites.front_default }
  //   }
  //   return infoSticker
  // }
}

export default new PokemonApi()
