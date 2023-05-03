function descontando (tabela, descontado){
    let desconto = 1 - descontado
    const livrosComDesconto = tabela.map((livro)=> {
        return {...livro, preco: (livro.preco * desconto) }
    })
    return livrosComDesconto
}