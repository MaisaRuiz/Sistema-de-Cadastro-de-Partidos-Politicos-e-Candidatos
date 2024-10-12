const mysql = require("mysql2/promise");

class Conexao {
  constructor() {
    this.pool = mysql.createPool({
      host: "localhost",      // Host do banco de dados
      user: "root",           // Usuário do banco de dados
      password: "",  // Senha do banco de dados
      database: "sistema_votacao" // Nome do banco de dados
    });
  }

  // Método para executar comandos que retornam dados (SELECT)
  async ExecutaComando(sql, params = []) {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.query(sql, params);
      return rows;
    } finally {
      connection.release();  // Liberando a conexão
    }
  }

  // Método para executar comandos que não retornam dados (INSERT, UPDATE, DELETE)
  async ExecutaComandoNonQuery(sql, params = []) {
    const connection = await this.pool.getConnection();
    try {
      const [results] = await connection.query(sql, params);
      return results.affectedRows;  // Retornando o número de linhas afetadas
    } finally {
      connection.release();  // Liberando a conexão
    }
  }
}

module.exports = Conexao;
