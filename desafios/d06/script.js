function converter() {
    let t = Number(prompt('Digite uma temperatura em Cº (Celsius)'))
    let res = document.getElementById('res')

    if (t == 0) {
        alert('Digite uma temperatura para continuar')
    } else {
        res.innerHTML = `<h2>A temperatura de ${t} Cº, corresponde a...</h2>`
        res.innerHTML += `<p>${t + 273.15 } K (Kelvin)</p>`
        res.innerHTML += `<p>${(t * 9/5) + 32 } F (Fahrenheit)</p>`
    }

}

