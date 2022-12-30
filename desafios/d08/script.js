function calcular() {
    let res = document.getElementById('res')
    let prod = prompt('Qual o produto que você está comprando?')
    let pre = Number(prompt(`Qual é o preço de ${prod}?`))
    let desc = pre * 10/100

    if (prod == '' || pre == 0) {
        alert('[ERRO]Preencha os campos corretamente')
    } else {
        res.innerHTML = `<h2>Calculando desconto de 10% para ${prod}</h2>`
    
        res.innerHTML += `<p>O preço original era R$ ${pre}.</p>`
        res.innerHTML += `<p>Você acaba de ganhar R$ ${desc} de desconto (-10$).</p>`
        res.innerHTML += `<p>No fim você vai pagar R$ ${pre - desc} no preoduto ${prod}.</p>`
    }

}

