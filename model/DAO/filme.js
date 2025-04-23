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
 
        let sql;

          
            sql = `insert into tbl_livro (  title,
                                            subtitle,
                                            image,
                                            price
                ) values (
                                                '${dadosFilme.title}',
                                                '${dadosFilme.subtitle}',
                                                '${dadosFilme.image}',
                                                '${dadosFilme.price}'
                )`;
       
        //$executeRawUnsafe() - serve para executar scripts sem retorno de dados 
            //(insert, update e dele)
        //$queryRawUnsafe() - serve para executar scripts com retorno de dados (select)
        let result = await prisma.$executeRawUnsafe(sql);

        if(result)
            return true;
        else
            return false;

    } catch (error) {
        return false;    
    }
}

//Função para atualizar um filme no BD
const updateLivro = async function(dadosFilme){
    try {
 
        let sql;

          
            sql = `update tbl_livro set     title       = '${dadosFilme.title}',
                                            subtitle    = '${dadosFilme.subtitle}',
                                            image       = '${dadosFilme.image}',
                                            price       = '${dadosFilme.price}'
                    where id = ${dadosFilme.id}`;

        let result = await prisma.$executeRawUnsafe(sql);

        if(result)
            return true;
        else
            return false;

    } catch (error) {
        return false;    
    }

}

//Função para excluir um filme no BD
const deleteLivro = async function(id){
    try {
 
            let sql = `delete from tbl_livro where id = ${id}`;
            let result = await prisma.$executeRawUnsafe(sql);

        if(result)
            return true;
        else
            return false;

    } catch (error) {
        return false;    
    }
}

//Função para Listar todos os filmes do BD
const selectAllLivros = async function(){
    try {

        if(livros.livros.length > 0 )   
            return livros.livros
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