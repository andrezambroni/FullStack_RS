import http from "node:http"; // Importa o módulo HTTP nativo do Node.js
import { jsonBodyHandler } from "./middlewares/jsonBodyHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

// Cria um servidor HTTP
// request representa a requisição recebida pelo servidor.
// response é o objeto que permite enviar uma resposta de volta ao cliente.
// response.end("Hello world!") envia a string "Hello world!" como resposta e encerra a interação.
const server = http.createServer(async (request, response) => {
  //  await jsonBodyHandler(request, response)
  await jsonBodyHandler(request, response);
  routeHandler(request, response);


});

// O servidor fica ouvindo por conexões na porta 3333
server.listen(3333); // Inicia o servidor na porta 3333 e o deixa pronto para aceitar conexões
