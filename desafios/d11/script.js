function verificar() {
    let res = document.getElementById('res')
    let a = Number(prompt('Digite o ano que você quer verificar'))

    let mark = document.createElement('mark')
    let p = document.createElement('p')
    
    if (a <= 0) {
        alert('Digite um ano válido')
    } else {
        res.innerHTML = `<h2>Analisando o ano ${a}</h2>`
        if (a % 4 == 0) {
            mark.innerText = 'É BISSEXTO'
            mark.style.color = 'darkgreen'
            mark.style.background = 'lightgreen'
        } else {
            mark.innerText = 'NÃO É BISSEXTO'
            mark.style.color = 'darkred'
            mark.style.background = 'lightcoral'
        }
        
        p.innerText = `O ano ${a} `

        p.appendChild(mark)
        
        res.appendChild(p)
    }

}

