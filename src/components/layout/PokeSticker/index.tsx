import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import PokemonApi from '@/service/PokemonService'

import { Dispatch, SetStateAction, useEffect } from 'react'
import { useQuery } from 'react-query'

import SkeletonStickerLoad from '../Skeleton'
import { Link } from 'react-router-dom'
import { useContextPokemon } from '@/context/provider'

interface IPokeSticker {
  name: string
  key: number
  // setLoading: Dispatch<SetStateAction<boolean>>
}

const PokeSticker = ({ name, key }: IPokeSticker): JSX.Element => {
  const { pokemonsInfo } = useContextPokemon()

  if (!pokeInfo) {
    return <SkeletonStickerLoad key={key} />
  }
  return (
    <Link className="w-full p-2" key={key} to={'#'}>
      <Card className="w-full p-2">
        <CardTitle className="flex justify-end ">
          {regexFormatNumber(pokeInfo.id)}
        </CardTitle>
        <CardContent className="flex justify-center justify-items-center  p-0 ">
          <Avatar className="h-24 w-24 ">
            <AvatarImage src={pokeInfo.sprites.front_default} alt="Pokémon" />
          </Avatar>
        </CardContent>
        <CardFooter className="">
          <p className="flex h-full w-full  justify-center justify-items-center">
            {regexFormatName(pokeInfo.name)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PokeSticker
