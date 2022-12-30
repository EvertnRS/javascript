function iniciar() {
    let txtn = prompt('Digite um número inteiro qualquer')
    let n = Number(txtn)

    if (txtn == '') {
        alert('Digite um número para continuar')
    } else {
        alert(`Antes de ${n}, temos o número ${n - 1}.\nDepois de ${n}, temos o número ${n + 1} `)
    }
}

