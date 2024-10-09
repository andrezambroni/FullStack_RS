import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

// Define a classe Database que será exportada
export class Database {
  // Inicializa um objeto vazio para armazenar os dados do banco de dados
  #database = {}

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data)
      })
      .catch(() => this.#persist())
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  // Método para inserir dados em uma tabela específica
  insert(table, data) {
    // Verifica se a tabela já existe e é um array
    if (Array.isArray(this.#database[table])) {
      // Se existir, adiciona os dados ao array da tabela
      this.#database[table].push(data)
    } else {
      // Se não existir, cria um novo array com os dados
      this.#database[table] = [data]
    }

    this.#persist()
  }

  // Método para selecionar dados de uma tabela específica
  select(table) {
    // Retorna os dados da tabela solicitada
    return this.#database[table] ?? []
  }
}
