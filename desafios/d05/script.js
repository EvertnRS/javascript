function converter() {
    let n = Number(prompt('Digite uma distância em metros (m)'))
    let res = document.getElementById('res')

    if (n == 0) {
        alert('Digite uma distãncia para continuar')
    } else {
        res.innerHTML = `<h2>A distância de ${n} metros, corresponde a...</h2>`
        res.innerHTML += `<p>${n / 1000} quilômetros (Km)</p>`
        res.innerHTML += `<p>${n / 100} hectômetros (Hm)</p>`
        res.innerHTML += `<p>${n / 10} decâmetros (Dam)</p>`
        res.innerHTML += `<p>${n * 10} decímetros (dm)</p>`
        res.innerHTML += `<p>${n * 100} centímetros (cm)</p>`
        res.innerHTML += `<p>${n * 1000} milímetros (mm)</p>`
    }

}

