function clicar() {
    let agora = new Date
    let res = document.getElementById('res')

    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}