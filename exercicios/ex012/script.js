function clicar(){
    let n = Number(prompt('Digite um número'))
    let res = document.getElementById('res')

    if (n % 2 == 0) {
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>PAR!</strong></p>` 
    } else {
        res.innerHTML = `<p>O número ${n} que foi digitado é <strong>ÍMPAR!</strong></p>` 
    }
}