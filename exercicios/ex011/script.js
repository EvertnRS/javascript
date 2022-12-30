function calcular(){
    var res = document.getElementById('res')
    var nome = prompt('Qual é o nome do aluno')
    var n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    var media = (n1 + n2)/2
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    
    if (media >= 6) {
        res.innerHTML += `A mensagem que temos é: <span>Meus Parabéns!</span>`
    } else {
        res.innerHTML += `A mensagem que temos é: <span>Estude um pouco mais!</span>`
    }
}