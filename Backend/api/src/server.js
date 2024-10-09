import http from "node:http" // Importa o módulo HTTP nativo do Node.js
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js" // Importa o middleware para tratar o corpo da requisição JSON
import { routeHandler } from "./middlewares/routeHandler.js" // Importa o middleware para tratar as rotas

// Cria um servidor HTTP
// request representa a requisição recebida pelo servidor.
// response é o objeto que permite enviar uma resposta de volta ao cliente.
const server = http.createServer(async (request, response) => {
  // Chama o middleware jsonBodyHandler para processar o corpo da requisição
  await jsonBodyHandler(request, response)
  // Chama o middleware routeHandler para processar a rota da requisição
  routeHandler(request, response)
})

// O servidor fica ouvindo por conexões na porta 3333
server.listen(3333) // Inicia o servidor na porta 3333 e o deixa pronto para aceitar conexões
