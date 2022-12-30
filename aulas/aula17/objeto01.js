let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }
}

console.log(`Nome: ${amigo.nome} \nPeso: ${amigo.peso}`)
amigo.engordar(2)
console.log(`Nome: ${amigo.nome} \nPeso: ${amigo.peso}`)