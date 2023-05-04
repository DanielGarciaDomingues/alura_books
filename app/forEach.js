
const livros = document.getElementById('livros')

// A função construindoTabela constrói a tabela de livros a partir do resultado de uma filtragem, adicionando elementos HTML na página.
function construindoTabela (r){
    ocultaPromocao()
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
<img class="livro__imagens ${verificaDisponibilidadeLivro(element.quantidade)}" src=${element.imagem} alt="${element.alt}" />
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
// A função verificaDisponibilidadeLivro recebe a quantidade de livros e verifica se está disponível ou indisponível, retornando uma string com a indicação.

function verificaDisponibilidadeLivro(elemento){
    let disponibilidade
    elemento <= 0 ? disponibilidade ="indisponivel":disponibilidade="disponivel"
    
    return disponibilidade
}