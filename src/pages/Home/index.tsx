import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import PokemonApi from '@/service/PokemonService'
import { Container } from '@/components/layout/Container'
import { Pokeball } from '@/components/icons/Pokeball'
import { Input } from '@/components/ui/input'
import { Search } from '@/components/icons/Search'
import PokeSticker from '@/components/layout/PokeSticker'
import { Skeleton } from '@/components/ui/skeleton'
import { useContextPokemon } from '@/context/provider'

const Home = () => {
  //const [pokeNameList, setPokeInfoList] = useState<string[]>([])

  const { pokemonsInfo } = useContextPokemon()
  console.log('pokeinfo', pokemonsInfo)

  return <>OK</>
  // const { data, isError, error, isLoading } = useQuery({
  //   queryKey: 'getPokemon',
  //   queryFn: async () => {
  //     const res = await PokemonApi.getPokemonsNames({ offset: 0, limit: 9 })
  //     return res.results
  //   }
  // })

  // const createStickers = (names: string[]) => {
  //   return names.map((pokeName, i) => <PokeSticker key={i} name={pokeName} />)
  // }

  // useEffect(() => {
  //   if (isError) {
  //     console.error('Erro ao chamar api: ', error)
  //   }
  //   if (data) {
  //     setPokeInfoList(data.map((poke) => poke.name))
  //   }
  // }, [data, isError, error])

  // return (
  //   <Container>
  //     <div className="flex w-full justify-center justify-items-center">
  //       <div className="flex  w-8/12 flex-col bg-Identity-Primary">
  //         <div className="flex justify-items-center gap-4 px-4 py-4 text-GrayScale-White">
  //           <Pokeball className="fill-GrayScale-White" size={40} />
  //           <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight">
  //             Pokédex
  //           </h3>
  //         </div>
  //         <div className="flex justify-items-center gap-4 px-4 py-0">
  //           <div className="flex h-11 w-full items-center gap-2 rounded-3xl border bg-GrayScale-White px-2">
  //             <Search className="fill-Identity-Primary" size={20} />
  //             <Input
  //               className="h-11 w-full rounded-3xl border-none outline-none"
  //               type="text"
  //               placeholder="Search"
  //             />
  //           </div>
  //         </div>

  //         <div className="flex h-full w-full justify-center justify-items-center px-0 py-4">
  //           {isLoading ? (
  //             <div className="flex h-full w-[98%]  justify-items-center  gap-3 rounded-md bg-GrayScale-White px-4 py-4">
  //               <Skeleton key={0} className="h-full w-full" />
  //             </div>
  //           ) : (
  //             <div className="grid h-full w-[98%] grid-cols-3 grid-rows-3 justify-items-center  gap-3 rounded-md bg-GrayScale-White px-4 py-4">
  //               {createStickers(pokeNameList)}
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </Container>
  //)
}

export default Home
