export async function jsonBodyHandler(request, response) {
  // adiciona cada chunck
  const buffers = [];

  // Coleta os chunks de dados da requisição
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    //concatena os cunk e converte para string
    // em seguida, converte a string para json

    request.body = JSON.parse(Buffers.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  // define o header de responsta como json
  response.setHeader("Content-Type", "application/json");
}
