import api from './api'

class PokemonApi {
  public async getPokemonsNames(
    params: HandlerParams.IGetPokemonsName
  ): Promise<HandlerParams.ParsedResponseAxios<HandlerParams.IPokemonsName>> {
    const res = await api.get<
      HandlerParams.ParsedResponseAxios<HandlerParams.IPokemonsName>
    >('/pokemon', {
      params
    })

    return res.data
  }

  public async getPokemoInfoByName(params: HandlerParams.IGetPokemoInfoByIdOrName) {
    let url: string = ''
    if (params.id) {
      url = `/pokemon/${params.id}`
    } else if (params.name) {
      url = `/pokemon/${params.name}`
    }

    const res =
      await api.get<HandlerParams.IPokemonValue<any>>(
        url
      )

    return res.data
  }
}

export default new PokemonApi()
 