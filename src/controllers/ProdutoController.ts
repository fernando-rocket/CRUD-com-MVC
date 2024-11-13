import { ProdutoModel } from './../models/ProdutoModel';
import { Request, Response } from "express";

const produtoModel = new ProdutoModel();

export const getProdutos = async ( req: Request, res: Response)=>{

    try {
       const produtos = await  produtoModel.getAll();
       res.json(produtos);

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos" });
    }
};


export const createProduto = async (req: Request, res: Response) => {
    try {
      const { nome, preco } = req.body;
      await produtoModel.create({ nome, preco });
      res.status(201).json({ message: 'Produto criado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar produto' });
    }
  };
  

export const updateProduto = async( req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const { nome, preco } = req.body;
        await produtoModel.update(Number(id), {
            nome, preco,
            id: 0
        })
        res.json( { message: "Produto alterado com sucesso"});
    } catch (error) {
        res.status(500).json( { message: "Erro ao alterar produto"});
    }
}

export const deleteProduto = async( req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        await produtoModel.delete( Number (id));
        res.json( { message: "Produto deletado com sucesso"});
    } catch (error) {
        res.status(500).json( { message: "Erro ao deletar produto"});
    }
};










