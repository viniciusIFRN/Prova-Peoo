import mysql from 'mysql';
import util from "util"; //Importa a biblioteca padrão util, usada para converter funções de callback em promises.

//Objeto que contém as configurações de conexão com o banco MySQL
const dbConfig = {
    host : "localhost",
    user : process.env.USER_DB || "root", //usa o usuário "USER_DB", mas se não existir usa o "root"
    password :process.env.PASSWORD_DB || "", //usa a senha "PASSWORD_BB", mas se não existir usa ""
    //process.env guarda credenciais seguras como a senha
    database : "locação_equipamentos"
};

//Cria objeto que representa a conexão com o MySQUL, usando as configurações definidas do dbConfig
const connection = mysql.createConnection(dbConfig);

//Tenta abrir a conexão com o banco
connection.connect((error) => {
    if (error){
        console.log("Erro na conexão com o banco: ", error.message);
        process.exit(1);
    }
    console.log("Conexão realizada com sucesso");
})

//Transforma o método query do objeto connection em promise permitindo o uso do asnyc/await 
//.bind(connection) permite que o método continue funcionado na nova configuração correta
connection.query = util.promisify(connection.query).bind(connection);

//Permite que outros arquivos importem essa conexão e executem consultas ao banco de dados.
export default connection;