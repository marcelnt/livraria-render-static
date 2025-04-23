/**************************************************************************************************************
 * Objetivo: Arquivo responsável pelo acesso ao Banco de dados MySQL, aqui faremos o CRUD na tabela de Filme
 * Data: 01/02/2024
 * Autor: Marcel
 * Versão: 1.0
 * 
 **************************************************************************************************************/

// //Import da biblioteca do prisma client para manipular scripts SQL
// const { PrismaClient } = require('@prisma/client');

// //Instancia da classe PrismaClient
// const prisma = new PrismaClient();

const livros = require('./modulo/livros.js')

//Função para inserir um filme no BD
const insertLivro = async function(dadosFilme){
    try {
        let id = livros.livros[0].books.length + 1
        dadosFilme.id = id
        livros.livros[0].books.push(dadosFilme)
        return true;
 

    } catch (error) {
        return false;    
    }
}

//Função para atualizar um filme no BD
const updateLivro = async function(dadosFilme){
    try {
 
        let result = await selectByIdLivro(dadosFilme.id)
        
        if(result.length > 0){
            let indice = livros.livros[0].books.findIndex(item => item.id == dadosFilme.id);
            livros.livros[0].books[indice].title = dadosFilme.title
            livros.livros[0].books[indice].subtitle = dadosFilme.subtitle
            livros.livros[0].books[indice].image = dadosFilme.image
            livros.livros[0].books[indice].price = dadosFilme.price
            return true;
        }else
            return false;


    } catch (error) {
        return false;    
    }

}

//Função para excluir um filme no BD
const deleteLivro = async function(id){
    try {
 
        let result = await selectByIdLivro(id)
 
        if(result.length > 0){
            let indice = livros.livros[0].books.findIndex(item => item.id == id);
            livros.livros[0].books.splice(indice,1)
            return true;
        }else
            return false;

    } catch (error) {
        return false;    
    }
}

//Função para Listar todos os filmes do BD
const selectAllLivros = async function(){
    try {

        if(livros.livros.length > 0 )   
            return livros.livros[0].books
        else
            return false
    }catch (error) {
        return false
    }
}

//Função para buscar uma filme no BD filtrando pelo ID
const selectByIdLivro = async function(id){
    try {

        let rsFilme = []

        livros.livros[0].books.forEach(function(item){
            
            if(item.id != undefined){
                
                if(Number(item.id) == Number(id)){
                    rsFilme.push(item)
                }
            }     
        })

       if (rsFilme.length > 0 )
            return rsFilme
       else
            return false

    } catch (error) {
         return false;
    }
    
    
}

module.exports = {
    insertLivro,
    updateLivro, 
    deleteLivro,
    selectAllLivros,
    selectByIdLivro
}