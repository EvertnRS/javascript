function pensar() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    let n = min + Math.trunc(dif * aleatorio)
    let res = document.getElementById('res')
    
    res.innerHTML += `<p>Acabei de pensar no número <mark>${n}</mark></p>`
}

function limpar() {
    let res = document.getElementById('res')
    res.innerHTML = null
}