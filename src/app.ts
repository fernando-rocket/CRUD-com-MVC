import express from 'express';
import bodyParser from 'body-parser';
import produtoRoutes from './routes/ProdutoRoutes';
import { pool } from './config/database';
import path from 'path';


const app = express();


// Configurar o middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, 'views')));


app.use(bodyParser.json());
app.use('/api', produtoRoutes);


// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


const PORT = process.env.PORT || 3000;


pool.getConnection()
  .then(() => {
    console.log('Conectado ao banco de dados MySQL com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error('Erro ao conectar ao banco de dados MySQL:', error);
  });
