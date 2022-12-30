function calcular() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    
    res.innerHTML = ''
    
    if (num.value.length == 0) {
        alert('Preencha os campos corretamente')
    } else {
        let n = Number(num.value)
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            res.appendChild(item)
        }
    }

}