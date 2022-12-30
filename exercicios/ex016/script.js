function calcular() {
    let agora = new Date
    let ano = agora.getFullYear()
    let nasc = prompt('Em qual ano você nasceu?')
    let idade = ano - nasc
    let res = document.getElementById('res')

    if (nasc > ano) {
        alert('Ano inválido')
    } else {
        res.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}</p>`
    }


}