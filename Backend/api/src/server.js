import http from "node:http"; // Importa o módulo HTTP nativo do Node.js
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler";

// Cria um servidor HTTP
// request representa a requisição recebida pelo servidor.
// response é o objeto que permite enviar uma resposta de volta ao cliente.
// response.end("Hello world!") envia a string "Hello world!" como resposta e encerra a interação.
const server = http.createServer(async (request, response) => {
  const { method, url } = request;

   await jsonBodyHandler(request, response)

  if (method === "GET" && url === "/products") {
    return response.end("Lista de produtos");
  }

  if (method === "POST" && url === "/products") {
    return response.writeHead(201).end("Produto cadastrado");
  }

  // Quando uma requisição é recebida, executa a função callback
  return response.writeHead(404).end("Rota nao encontrada");
});

// O servidor fica ouvindo por conexões na porta 3333
server.listen(3333); // Inicia o servidor na porta 3333 e o deixa pronto para aceitar conexões
