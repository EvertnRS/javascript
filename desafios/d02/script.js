function iniciar() {
    let nome = prompt('Qual é o seu nome?')
    let idade = prompt(`Olá ${nome}! Quantos anos você tem?`)

    if (nome == '' || idade == '') {
        alert('Preencha os campos corretamente para continuar')
    } else {
        alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
    }
}

