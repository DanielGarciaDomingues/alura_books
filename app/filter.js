const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao => {
    botao.addEventListener('click',filtraLivros)
})

// A função filtraLivros é responsável por filtrar a lista de livros com base na categoria selecionada pelo usuário e exibir a tabela resultante na página. Se a categoria for "disponivel", também exibe uma mensagem promocional com o valor total dos livros disponíveis.
function filtraLivros () {
    const elementoBtn = document.getElementById(this.id)
    // console.log(elementoBtn)
    const categoria = elementoBtn.value
    // console.log(this.value)
    if (categoria){
    let tabelaFiltrada = categoria == "disponivel" ?filtroDisponibilidade():categoria == "sort" ?filtroOrdem():filtroCategoria(categoria)
    // console.table(tabelaFiltrada)
    construindoTabela(tabelaFiltrada) 
    if(categoria == "disponivel"){
        const total = somaValorTotal(tabelaFiltrada)
        mostraPromocao(total)
        // console.log(total)
    }
} else {console.log('erro')}
}

// A função filtroCategoria recebe uma categoria como parâmetro e retorna um array com todos os livros que possuem essa categoria.
function filtroCategoria(categoria) {
    return resultadoTabela.filter(livro => livro.categoria == categoria)
}

// A função filtroDisponibilidade filtra os livros disponíveis no estoque.
function filtroDisponibilidade() {
    
    return resultadoTabela.filter(livro => verificaDisponibilidadeLivro(livro.quantidade) == "disponivel")
}

