function contar() {
    let res = document.getElementById('res')
    res.innerHTML = '<h2>Contagem regressiva de 10 a 1</h2>'
    for(let n = 10; n >= 1; n--) {
        res.innerHTML += `${n} \u{1F449}`
    }
    res.innerHTML += ` \u{1F3C1}`
    
}