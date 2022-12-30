function verificar() {
    let res = document.getElementById('res')
    let pant = Number(prompt('Qual era o preço anterior do produto?'))
    let patu = Number(prompt('Qual o preço atual do produto?'))

    res.innerHTML = '<h2>Analisando os valores informados</h2>'
    res.innerHTML = `<p>O produto custava R$ ${pant} e agora custa R$ ${patu}</p>`
    
    if (pant > patu) {
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        res.innerHTML += `<p>O preço caiu R$ ${pant - patu} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de aproximadamente ${Math.round((pant - patu) * 100 / pant)}% para baixo</p>`
    } else if (patu > pant) {
        res.innerHTML += '<p>Hoje o produto é mais caro</p>'
        res.innerHTML += `<p>O preço subiu R$ ${patu - pant} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de aproximadamente ${Math.round((patu - pant) * 100 / pant)}% para cima</p>`
    }

}

