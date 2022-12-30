function calcular() {
    let n = Number(document.getElementById('txtn').value)
    let res = document.getElementById('res')
    res.innerHTML = `<h2>Tabuada de ${n}</h2>`
    let c = 1

    while (c <= 10) {
        res.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
        c++
    }    
}