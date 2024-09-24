import { routes } from "../routes.js";

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url;
  });

  if (route) {
    return route.controller(request, response);
  }

  // Quando uma requisição é recebida, executa a função callback
  return response.writeHead(404).end("Rota nao encontrada");
}
