// Define a classe Database que será exportada
export class Database {
  // Inicializa um objeto vazio para armazenar os dados do banco de dados
  database = {}

  // Método para inserir dados em uma tabela específica
  insert(table, data) {
    // Verifica se a tabela já existe e é um array
    if (Array.isArray(this.database[table])) {
      // Se existir, adiciona os dados ao array da tabela
      this.database[table].push(data)
    } else {
      // Se não existir, cria um novo array com os dados
      this.database[table] = [data]
    }
  }

  // Método para selecionar dados de uma tabela específica
  select(table) {
    // Retorna os dados da tabela solicitada
    return this.database[table]
  }
}
