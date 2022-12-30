function contar() {
    let res = document.getElementById('res')
    res.innerHTML = '<h2>Contando de 1 até 10, marcando os pares</h2>'
    for(let n = 1; n <= 10; n++) {
        if (n % 2 == 0) {
            res.innerHTML += `<mark>${n} </mark>\u{1F449}`

        } else {
            res.innerHTML += `${n} \u{1F449}`
        }
    }
    res.innerHTML += ` \u{1F3C1}`
}