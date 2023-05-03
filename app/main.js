let resultadoTabela = []
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'    
tabelaLivros()
const descontoPercentual = 0
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






