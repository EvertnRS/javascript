function calcular() {
    let n1 = Number(prompt('Digite o primeiro número'))
    let n2 = Number(prompt('Digite o segundo número'))
    let ope = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
    let res = document.getElementById('res')

    res.innerHTML = '<h2>Calculando...</h2>'

    if (ope == 1) {
        res.innerHTML = `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`
    } else if (ope == 2) {
        res.innerHTML = `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`
    } else if (ope == 3) {
        res.innerHTML = `<p>${n1} x ${n2} = <strong>${n1 * n2}</strong></p>`
    } else if (ope == 4) {
        res.innerHTML = `<p>${n1} / ${n2} = <strong>${n1 / n2}</strong></p>`
    } else {
        alert('[ERRO] Preencha corretamente!')
    }
}