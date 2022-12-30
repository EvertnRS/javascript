function calcular() {
    let res = document.getElementById('res')
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let delta = b**2 - 4 * a * c
    
    if (a == 0) {
        alert('o valor de a não pode ser 0')
    } else {
        res.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    
        res.innerHTML += `<p>A equação atual é ${a}x<sup>2</sup>+ ${b}x + ${c} = 0</p>`
        res.innerHTML += `<p>o calculo realizado será &Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</p>`
        res.innerHTML += `<p>O valor calculado foi &Delta; = ${delta}</p>`
    }

}

