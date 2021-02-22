const { request } = require('express');
const express = require('express');


//preparar para usar o express
const app = express();
app.use(express.json());

//1 parametro o nome da rota
//2 parametro acao que vou fazer funcao
//java script arrow function
// (parametros) => {codigos programa fazer}

app.get('/',(request,response) => {
    //codigo da funcao;
    return response.json("Testando funcionalidade NODEMON!"); 
});

app.post('/' ,(request,response) => {
    const {nome , cpf, email, peso, altura} = request.body;
    //desestruturação
    return response.json({nome, cpf, email, peso, altura});
}); 

app.listen(3333, () => {
    console.log("Server Running");
});