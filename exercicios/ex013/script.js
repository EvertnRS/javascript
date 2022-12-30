function clicar() {
    let n1 = Number(prompt('Digite um número'))
    let n2 = Number(prompt('Digite outro número'))
    let res = document.getElementById('res')

    let maior

    if (n1 > n2) {
        maior = n1
    } else if (n2 > n1) {
        maior = n2
    } else if (n1 == n2) {
        maior = 'ambos são IGUAIS'
    }

    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${maior}</strong></p>`
}