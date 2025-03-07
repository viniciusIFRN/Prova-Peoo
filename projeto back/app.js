//Framework para criar servidores em Node.js.
import express from "express";

//Middleware que permite requisições de diferentes origens
import cors from "cors";
//import {StatusCodes} from "http-status-code";

//Criar o objeto express
const app = express();

//Habilita o CORS, permitindo que o backend aceite requisições de origens diferentes 
// como uma aplicação frontend hospedada em outro domínio
app.use(cors());

//Configura o servidor para interpretar o corpo das requisições como JSON
//Isso é essencial para APIs REST que recebem dados no formato JSON.
app.use(express.json()); 


 /* Quando um cliente acessa a rota / (página inicial do servidor)
  ele recebe a resposta "Versão 1.0.0" com o código de status HTTP 200 (OK).

 req → Representa a requisição feita pelo cliente.
 res → Representa a resposta do servidor.
 */
app.get("/",(req,res) => {
    res.status(200).send("Versão 1.0.0");
});


export default app;