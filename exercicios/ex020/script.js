function informar() {
    let mes = prompt('Digite o mês por extenso (ex: Setembro)')
    let res = document.getElementById('res')

    if (mes == 'Dezembro' || 'Janeiro' || 'Fevereiro' || 'dezembro' || 'janeiro' || 'fevereiro') {
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>VERÂO</mark></strong></p>`
    } else if ('Março' || 'Abril' || 'Maio' || 'março' || 'abril' || 'maio') {
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>OUTONO</mark></strong></p>`
    } else if ('Junho' || 'Julho' || 'Agosto' || 'junho' || 'julho' || 'agosto') {
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>INVERNO</mark></strong></p>`
    } else if ('Setenbro' || 'Outubro' || 'Novembro' || 'setembro' || 'outubro' || 'novembro') {
        res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <strong><mark>INVERNO</mark></strong></p>`
    } else {
        alert('[ERRO] Preencha corretamente!')
    }
}