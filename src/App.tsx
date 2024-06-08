import ProviderPokemon from './context/provider'
import { Router } from './router/router'
function App() {
  return (
    <ProviderPokemon>
      <Router />
    </ProviderPokemon>
  )
}

export default App
