

const livros = document.getElementById('livros')
    

async function tabelaLivros (){

    try{
        let tabela = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json')
        const resultadoTabela = await tabela.json()
        construindoTabela(resultadoTabela)
        console.table(resultadoTabela)
        return resultadoTabela
    }catch (erro){
        console.log('erro')
    } finally{
        console.log('Processo concluido!')
    }

}
function construindoTabela (resultadoTabela){
    resultadoTabela.forEach(element => {
        // element.alt
        // element.autor
        // element.categoria
        // element.imagem
        // element.preco
        // element.quantidade
        // element.titulo
        console.log(element)    
    livros.innerHTML += `
<div class="livro">
<img class="livro__imagens" src=${element.imagem} alt="${element.alt}" />
<h2 class="livro__titulo">
${element.titulo}
</h2>
<p class="livro__descricao">${element.autor}</p>
<p class="livro__preco" id="preco">R$${element.preco}</p>
<div class="tags">
  <span class="tag">${element.categoria}</span>
</div>
</div>

`
})
}


tabelaLivros()



