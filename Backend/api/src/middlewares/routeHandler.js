// Importa o array de rotas do arquivo routes.js
import { routes } from "../routes.js"
// Importa a função extractQueryParams do arquivo utils/extract-query-params.js
import { extractQueryParams } from "../utils/extract-query-params.js"
// Importa a classe Database do arquivo database.js
import { Database } from "../database.js"

// Cria uma nova instância do banco de dados
const database = new Database()

// Exporta a função routeHandler que lida com as requisições
export function routeHandler(request, response) {
  // Encontra a rota correspondente à requisição
  const route = routes.find((route) => {
    // Verifica se o método e o caminho da rota correspondem à requisição
    return route.method === request.method && route.path.test(request.url)
  })

  // Se a rota for encontrada
  if (route) {
    // Extrai os parâmetros da rota a partir da URL da requisição
    const routeParams = request.url.match(route.path)
    // Separa os parâmetros de consulta dos demais parâmetros
    const { query, ...params } = routeParams.groups

    // Adiciona os parâmetros à requisição
    request.params = params
    // Adiciona os parâmetros de consulta à requisição, se existirem
    request.query = query ? extractQueryParams(query) : {}

    // Chama o controlador da rota passando a requisição, a resposta e o banco de dados
    return route.controller({ request, response, database })
  }

  // Se a rota não for encontrada, retorna um erro 404
  return response.writeHead(404).end("Rota nao encontrada")
}
