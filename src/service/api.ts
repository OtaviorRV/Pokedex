import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',

  headers: {
    'Content-Type': 'application/json'
  }
})

// api.interceptors.response.use(
//   (response) => {
//     // faz nada
//     return response
//   },
//   (error) => {
//     // Tratar erros de resposta
//     if (error.response) {
//       // O servidor respondeu com um status diferente de 2xx
//       console.error('Erro de resposta:', error.response.data)
//     } else if (error.request) {
//       // A requisição foi feita, mas não houve resposta
//       console.error('Erro de requisição:', error.request)
//     } else {
//       // Algo aconteceu na configuração da requisição que causou um erro
//       console.error('Erro na configuração:', error.message)
//     }
//     return Promise.reject(error)
//   }
// )

export default api

// api.interceptors.request.use((error) => {
//   return Promise.reject(error)
// })

// api.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
