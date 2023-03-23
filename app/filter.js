const botoes = document.querySelectorAll('.btn')
let tabelaFiltrada = []
botoes.forEach(botao => {
    botao.addEventListener('click',filtraLivros)
})
// botaoFiltrarLFront.addEventListener('click', (e) => {
//     filtraLivrosFront()
// })

function filtraLivros () {
    const elementoBtn = document.getElementById(this.value)
    let categoria = this.value
    console.log(this.value)
    if (categoria){
    tabelaFiltrada = resultadoTabela.filter(livro => livro.categoria == categoria )
    console.table(tabelaFiltrada)
    construindoTabela(tabelaFiltrada) 
} else {console.log('erro')}
}
