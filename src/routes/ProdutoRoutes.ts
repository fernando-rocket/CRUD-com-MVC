import { Router } from "express";
import { getProdutos, createProduto, updateProduto,deleteProduto } from "./../controllers/ProdutoController";

const router = Router();

router.get('/produtos', getProdutos);
router.post('/produtos', createProduto);
router.put('/produtos/:id', updateProduto);
router.delete('/produtos/:id', deleteProduto);

export default router;