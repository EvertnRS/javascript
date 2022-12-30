let cot = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

if (cot == 0) {
    alert('Preencha o campo para continuar')
}
function converter() {
    let res = document.getElementById('res')
    let r = Number(prompt('Quantos R$ você tem na carteira?'))

    if (r == 0) {
        alert('Digite o valor para calcular')
    } else {
        res.innerHTML = `<p>${r} reais equivalem a ${r / cot} dólares.</p>`
    }

}

