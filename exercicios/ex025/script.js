function contar() {
    let txtn = document.getElementById('txtn')
    let f = Number(txtn.value)
    let res = document.getElementById('res')
    if (f < 0) {
        alert('Digite um número positivo')
    } else {
        if (f == 0 || txtn.value == null) {
            alert('Digite um valor maior que 0')
        } else {
            res.innerHTML += `<h2>Contando de 0 até ${f}</h2>`
            for(let n = 0; n <= f; n++) {
                res.innerHTML += `${n} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1}`
            txtn.value = ''
            txtn.focus()
        }
    }
}