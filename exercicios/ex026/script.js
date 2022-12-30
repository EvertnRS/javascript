function contar() {
    let txti = document.getElementById('txti')
    let txtf = document.getElementById('txtf')
    let ini = Number(txti.value)
    let fim = Number(txtf.value)
    let res = document.getElementById('res')
    if (ini == fim) {
        alert('Impossível contar pois os números são iguais')
    } else {
        res.innerHTML += `<h2>Contando de ${ini} até ${fim}</h2>`
        if (ini < fim) {
            for(let n = ini; n <= fim; n++) {
                res.innerHTML += `${n} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1}`
            
        } else {
            for(let n = ini; n >= fim; n--) {
                res.innerHTML += `${n} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1}`
        }
    }


    
}