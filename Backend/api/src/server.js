import http from "node:http"; // Importa o módulo HTTP nativo do Node.js

// Cria um servidor HTTP
// request representa a requisição recebida pelo servidor.
// response é o objeto que permite enviar uma resposta de volta ao cliente.
// response.end("Hello world!") envia a string "Hello world!" como resposta e encerra a interação.
const server = http.createServer((request, response) => {
  // Quando uma requisição é recebida, executa a função callback
  return response.end("Hello world!"); // Envia a resposta "Hello world!" e encerra a conexão
});

// O servidor fica ouvindo por conexões na porta 3333
server.listen(3333); // Inicia o servidor na porta 3333 e o deixa pronto para aceitar conexões
