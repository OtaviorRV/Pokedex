import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

import './styles/globals.css'
import FallbackAnimation from './assets/FalbackAnimation.tsx'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } }
})
const App = lazy(() => import('./App.tsx'))
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<FallbackAnimation />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter children={<App />} />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
)
