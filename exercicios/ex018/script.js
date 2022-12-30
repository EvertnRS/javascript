let aleatorio = Math.random()
let num = 1 + Math.trunc(99 * aleatorio)
function adivinhar() {
    let n = Number(prompt('Qual seu palpite?'))
    let res = document.getElementById('res')
    let btn = document.getElementById('btn')

    if (n > num) {
        res.innerHTML += `<p>Você falou ${n}. Meu número é <strong>MENOR!</strong></p>`
    } else if (n < num) {
        res.innerHTML += `<p>Você falou ${n}. Meu número é <strong>MAIOR!</strong></p>`
    } else if (n == num) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${num}!</p>`

        btn.innerHTML = null
    }
}