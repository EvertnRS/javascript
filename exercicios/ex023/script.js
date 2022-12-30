function contar() {
    let res = document.getElementById('res')
    res.innerHTML = '<h2>Números pares de 1 até 10</h2>'
    for(let n = 1; n <= 10; n++) {
        if (n % 2 == 0) {
            res.innerHTML += `${n} \u{1F449}`
        }
    }
    res.innerHTML += ` \u{1F3C1}`
    
}