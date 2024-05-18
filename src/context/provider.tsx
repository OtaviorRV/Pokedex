import { ReactNode, createContext, useContext } from 'react'

import ValueProvider from './interfaceValue'

interface IAppProvider {
  children: ReactNode
}

interface IAppContext {
  pokeNameList: HandlerParams.IPokemonsName[]
}
export const AppContext = createContext({} as IAppContext)

export const AppProvider = ({ children }: IAppProvider) => {
  const { getPokemonsNames } = ValueProvider

  const value = { pokeNameList: getPokemonsNames() }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const usePokemon = () => {
  return useContext(AppContext)
}
