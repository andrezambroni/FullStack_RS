// Importa a função parseRoutePath do arquivo utils/parseRoutePath.js
import { parseRoutePath } from "./utils/parseRoutePath.js"

// Exporta um array de rotas
export const routes = [
  {
    // Define o método HTTP GET para a rota
    method: "GET",
    // Define o caminho da rota
    path: "/products",
    // Define o controlador para a rota
    controller: ({ request, response, database }) => {
      // Seleciona todos os produtos do banco de dados
      const products = database.select("products")
      // Retorna a resposta com os produtos em formato JSON
      return response.end(JSON.stringify(products))
    },
  },

  {
    // Define o método HTTP POST para a rota
    method: "POST",
    // Define o caminho da rota
    path: "/products",
    // Define o controlador para a rota
    controller: ({ request, response, database }) => {
      // Extrai os campos name e price do corpo da requisição
      const { name, price } = request.body

      // Insere um novo produto no banco de dados
      database.insert("products", { name, price })
      // Retorna a resposta com o status 201 (Criado)
      return response.writeHead(201).end()
    },
  },

  {
    // Define o método HTTP DELETE para a rota
    method: "DELETE",
    // Define o caminho da rota com um parâmetro de ID
    path: "/products/:id",
    // Define o controlador para a rota
    controller: ({ request, response }) => {
      // Retorna a resposta indicando que o produto foi removido, incluindo o ID do produto
      return response.end("Produto removido com ID: " + request.params.id)
    },
  },
  // Mapeia cada rota para adicionar o caminho processado pela função parseRoutePath
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))
