function contar() {
    let res = document.getElementById('res')
    res.innerHTML = '<h2>Contando de 1 até 10</h2>'
    for(let n = 1; n <= 10; n++) {
        res.innerHTML += `${n} \u{1F449}`
    }
    res.innerHTML += ` \u{1F3C1}`
    
}