
// A função filtroOrdem realiza uma ordenação dos livros na tabela a partir do preço, em ordem crescente.

function filtroOrdem() {
    return resultadoTabela.sort((a, b) => { return a.preco - b.preco })
}