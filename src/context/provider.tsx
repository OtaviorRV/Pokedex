import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import PokemonApi from '@/service/PokemonService'

interface IPokemonData {
  pokemonsInfo: any[]
}
const ContextPokemon = createContext({} as IPokemonData)

interface IProviderPokemon {
  children: ReactNode
}
const ProviderPokemon = ({ children }: IProviderPokemon) => {
  const [pokeInfoList, setPokeInfoList] = useState<any[]>([])

  const { data, isError, error } = useQuery({
    queryKey: 'getPokemon',
    queryFn: async () => {
      const res = await PokemonApi.getPokemonsInfo({ offset: 0, limit: 9 })
      console.log('res', res)
      return res
    }
  })
  useEffect(() => {
    if (isError) {
      console.error('Erro ao chamar api: ', error)
    }
    if (data) {
      setPokeInfoList((prev: any) => [...prev, ...data])
    }
  }, [data, isError, error])

  console.log('provider', pokeInfoList)

  const value: IPokemonData = { pokemonsInfo: pokeInfoList }

  return <ContextPokemon.Provider value={value}>{children}</ContextPokemon.Provider>
}
export default ProviderPokemon

export const useContextPokemon = () => useContext(ContextPokemon)
