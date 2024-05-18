import './App.css'
import { usePokemon } from './context/provider'

function App() {
  const { pokeNameList } = usePokemon()

  return (
    <>
      OPAAAA
      <ul>
        {pokeNameList.map((pokemon, i) => (
          <li key={i}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
