import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

import PokemonApi from '@/service/PokemonService'

class ValueProvider {
  
  public getPokemonsNames = (): HandlerParams.IPokemonsName[] => {
    const [pokeNameList, setPokeInfoList] = useState<HandlerParams.IPokemonsName[]>(
      []
    )

    const { data, isError } = useQuery({
      queryKey: 'getPokemon',
      queryFn: async () => {
        const res = await PokemonApi.getPokemonsNames({ offset: 0, limit: 151 })
        console.log(typeof res.results)
        setPokeInfoList(res.results)
        return res.results
      }
    })

    useEffect(() => {
      if (isError) {
        return console.error('Erro ao chamar api')
      }
      data && setPokeInfoList(data)
    }, [isError])
    return pokeNameList
  }

}

export default new ValueProvider()
