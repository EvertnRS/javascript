function verificar() {
    let res = document.getElementById('res')
    let nome = prompt('Qual o nome do aluno?')
    let n1 = Number(prompt(`Primeira nota de ${nome}`))
    let n2= Number(prompt(`Segunda nota de ${nome}`))

    let media = (n1 + n2) / 2

    let mark = document.createElement('mark')
    let p = document.createElement('p')
    
    if (n1 < 0 || n2 < 0 || nome == '') {
        alert('Preencha os dados corretamente')
    } else {
        res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
        if (media < 3) {
            p.innerText = `Com média abaixo de 3,0, o aluno está `
            mark.innerText = 'REPROVADO'
            mark.style.color = 'darkred'
            mark.style.background = 'lightcoral'
        } else if (media >= 3 && media <=6) {
            p.innerText = `Com média entre 3,0 e 6,0, o aluno está `
            mark.innerText = 'RECUPERAÇÃO'
            mark.style.color = 'darkgoldenrod'
            mark.style.background = 'bisque'
        } else if (media > 6) {
            p.innerText = `Com média acima de 6,0, o aluno está `
            mark.innerText = 'APROVADO'
            mark.style.color = 'darkgreen'
            mark.style.background = 'lightgreen'
        }
        
        res.innerHTML = `<p>Com as notas ${n1} e ${n2}, a <strong>média é ${media}</strong></p>`
        
        p.appendChild(mark)
        
        res.appendChild(p)
    }

}

