function comprar() {
    let produto = prompt('Que produto você está comprando?')
    let preco = Number(prompt(`Quanto custa ${produto} que você está comprando?`))
    let valor = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    
    if (produto == '' || preco == 0 || valor == 0) {
        alert('Preencha os campos corretamente')
    } else {
        alert(`Você comprou ${produto} que custou R$ ${preco}.\nDeu R$ ${valor} em dinheiro e vai receber R$ ${valor - preco} de troco.\nVolte sempre`)
    }
}

