function analisar() {
    let agora = new Date
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let semana = agora.getDay()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()
    let res = document.getElementById('res')

    switch (mes) {
        case (0):
            mes = 'Janeiro'
            break
        case (1):
            mes = 'Fevereiro'
            break
        case (2):
            mes = 'Março'
            break
        case (3):
            mes = 'Abril'
            break
        case (4):
            mes = 'Maio'
            break
        case (5):
            mes = 'Junho'
            break
        case (6):
            mes = 'Julho'
            break
        case (7):
            mes = 'Agosto'
            break
        case (8):
            mes = 'Setembro'
            break
        case (9):
            mes = 'Outubro'
            break
        case (10):
            mes = 'Novembro'
            break
        default:
            mes = 'Dezembro'
            break
    }

    switch (semana) {
        case (0):
            semana = 'Domingo'
            break
        case (1):
            semana = 'Segunda'
            break
        case (2):
            semana = 'Terça'
            break
        case (3):
            semana = 'Quarta'
            break
        case (4):
            semana = 'Quinta'
            break
        case (5):
            semana = 'Sexta'
            break
        default:
            semana = 'Sábado'
            break
    }

    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${mes}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da Semana: <mark>${semana}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${minuto}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${segundo}</mark></p>`

}