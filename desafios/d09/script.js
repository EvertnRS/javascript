function reajustar() {
    let res = document.getElementById('res')
    let nome = prompt('Qual é o nome do funcionário?')
    let sal = Number(prompt(`Qual é o salário de ${nome}?`))
    let porc = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    reaj = sal * porc / 100



    if (nome == '' || sal == 0 || porc == 0) {
        alert('[ERRO] Preencha os campos corretamente')
    } else {
        res.innerHTML = `<h2>${nome} recebeu um aumento salarial!!!</h2>`
    
        res.innerHTML += `<p>O salário atual era R$ ${sal}</p>`
        res.innerHTML += `<p>Com o aumento de ${porc}%, o salário vai aumentar R$ ${reaj} no próximo mês</p>`
        res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${sal + reaj}</p>`
    }
}

