// Exporta a função assíncrona jsonBodyHandler
export async function jsonBodyHandler(request, response) {
  // Inicializa um array para armazenar os chunks de dados da requisição
  const buffers = []

  // Coleta os chunks de dados da requisição
  for await (const chunk of request) {
    // Adiciona cada chunk ao array buffers
    buffers.push(chunk)
  }

  try {
    // Concatena os chunks e converte para string
    // Em seguida, converte a string para JSON e atribui ao corpo da requisição
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    // Se ocorrer um erro na conversão, define o corpo da requisição como null
    request.body = null
  }

  // Define o cabeçalho da resposta como JSON
  response.setHeader("Content-Type", "application/json")
}
