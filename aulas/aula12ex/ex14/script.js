function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        foto.innerHTML += '<p>Bom Dia!</p>'
        document.body.style.background = '#4073dd'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        foto.innerHTML += '<p>Boa Tarde!</p>'
        document.body.style.background = '#f38b2f'
    } else {
        foto.innerHTML += '<p>Boa Noite!</p>'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#121b22'

    }
}
