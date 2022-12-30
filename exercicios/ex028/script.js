function calcular() {
    let n = Number(document.getElementById('txtn').value)
    let res = document.getElementById('res')
    let fat = 1
    
    if (n < 1 || n > 21) {
        alert('Digite um núumero entre 1 e 21')
    } else {
        res.innerHTML = `<h2>Fatorial de ${n}</h2>`
        while (n > 1) {
            res.innerHTML += `${n} x `
            fat *= n
            n--
        }    
        res.innerHTML += `1 = <strong>${fat}</strong>`
    }

}