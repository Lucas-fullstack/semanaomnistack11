/**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipod de parametros:
  * 
  * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recusos
  */

  /**
   * Banco de dados
   * 
   * SQL:MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL:MongoDB, CouchDB. etc...
   */

   /**
    * Busca dados BD
    * 
    * Driver: SELECT *FROM users
    * Query Builder: table('user').select('*').where()
    */
const express = require('express');
const cors = require('cors');//Modulo de seguraça de acesso 
const routes = require('./routes'); /***Seleciona arquivo nomesmo nivel de indice para voltar uma pas '../'***/

const app = express();

app.use(cors());
app.use(express.json());/* Recebe Post em formato json*/
app.use(routes);


app.listen(3333);