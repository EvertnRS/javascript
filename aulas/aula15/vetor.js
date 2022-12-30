let vetor = [3, 6, 1, 5, 8, 10]

/*
console.log(vetor[0])
console.log(vetor[1])
console.log(vetor[2])
console.log(vetor[3])
console.log(vetor[4])
console.log(vetor[5])
 
for (let pos = 0; pos < vetor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}
*/

for (let pos in vetor) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}