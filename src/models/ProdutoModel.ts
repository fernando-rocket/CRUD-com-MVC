import { pool } from "./../config/database";

export interface Produto{
    id?: number;
    nome: string;
    preco: number
}

 export class ProdutoModel{
    // getAll
    async getAll(): Promise <Produto[]> {
        const [rows] = await pool.query('SELECT * FROM produtos');

        return rows as Produto[];
    }
    

  // Criar um novo produto
  async create(produto: Produto): Promise<void> {
    await pool.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [produto.nome, produto.preco]);
  }


    // update    
    async update(id: number, produto: Produto): Promise<void>{
        await pool.query('UPDATE produtos SET nome = ?, preco = ? WHERE'+ 
           ' id = ? ', [produto.nome, produto.preco, id]);
    }
    // delete
    async delete(id: number): Promise<void>{
        await pool.query('DELETE FROM produtos WHERE ID = ? ', [id]);
    }

}