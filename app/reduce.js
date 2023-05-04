const valorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')
const valorTotal = document.getElementById('valor')

// A função mostraPromocao exibe uma mensagem promocional na página, informando o total de livros disponíveis e seu preço promocional.
function mostraPromocao (total){
    valorTotalLivrosDisponiveis.innerHTML= `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${total.toFixed(2)}</span></p>
    </div>
    `
}

// A função ocultaPromocao oculta a mensagem promocional da página.
function ocultaPromocao (){
    valorTotalLivrosDisponiveis.innerHTML = ''
}
// A função somaValorTotal recebe um array de livros e retorna o valor total de todos os livros na lista, somando seus preços.
function somaValorTotal(livros){
   return livros.reduce((acc, livro)=> acc + livro.preco,0) 
}
