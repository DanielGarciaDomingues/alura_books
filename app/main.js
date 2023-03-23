let resultadoTabela = []
const livros = document.getElementById('livros')
const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'    
tabelaLivros()
const descontoPercentual = 0
async function tabelaLivros (){

    try{
        let tabela = await fetch(url)
        resultadoTabela = await tabela.json()
        const resultadoTabelaDesconto = descontando(resultadoTabela, descontoPercentual)
        console.log(descontando(resultadoTabela, descontoPercentual))
        construindoTabela(resultadoTabelaDesconto)
        
        //console.table(resultadoTabela)
        return 
    }catch (erro){
        console.log(erro)
    } finally{
        console.log('Processo finalizado!')
    }

}
function descontando (tabela, descontado){
    let desconto = 1 - descontado
    const livrosComDesconto = tabela.map((livro)=> {
        return {...livro, preco: (livro.preco * desconto) }
    })
    return livrosComDesconto
}
function construindoTabela (r){
    livros.innerHTML = ''
    r.forEach(element => {
        // element.alt
        // element.autor
        // element.categoria
        // element.imagem
        // element.preco
        // element.quantidade
        // element.titulo
        // console.log(element)    
    livros.innerHTML += `
<div class="livro">
<img class="livro__imagens" src=${element.imagem} alt="${element.alt}" />
<h2 class="livro__titulo">
${element.titulo}
</h2>
<p class="livro__descricao">${element.autor}</p>
<p class="livro__preco" id="preco">R$${element.preco.toFixed(2)}</p>
<div class="tags">
  <span class="tag">${element.categoria}</span>
</div>
</div>

`
})
}





