let resultadoTabela = []
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'    
tabelaLivros()
const descontoPercentual = 0

//Função assíncrona para buscar e construir uma tabela de livros a partir de uma API, aplicando um desconto percentual e chamando a função construindoTabela para renderizar a tabela no DOM.
async function tabelaLivros (){

    try{
        let tabela = await fetch(url)
        resultadoTabela = await tabela.json()
        const resultadoTabelaDesconto = descontando(resultadoTabela, descontoPercentual)
        // console.log(descontando(resultadoTabela, descontoPercentual))
        construindoTabela(resultadoTabelaDesconto)
        //console.table(resultadoTabela)
        return 
    }catch (erro){
        console.log(erro)
    } finally{
        console.log('Processo finalizado!')
    }
}






