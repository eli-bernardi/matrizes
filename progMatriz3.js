let mat = [
    [3, 2, 1],
    [4, 5, 6],
    [9, 8, 7]
]

let mat2 = []
for (let i = 0; i < 5; i++) {
    mat2[i] = []
    for (let j = 0; j < 5; j++) {
        mat2[i][j] = i % 2 === 0 ? 7 : 3
    }
}

function somarMat() {
    let somaMatrizes = 0
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            somaMatrizes += mat[i][j]
        }
    }
    return somaMatrizes
}

function somarMat2() {
    let somaMatrizes2 = 0
    for (let i = 0; i < mat2.length; i++) {
        for (let j = 0; j < mat2[i].length; j++) {
            somaMatrizes2 += mat2[i][j]
        }
    }
    return somaMatrizes2
}

// Chamada correta das funções
let somaMatrizes = somarMat()
let somaMatrizes2 = somarMat2()

// Exibir resultados
console.table(mat)
console.log('Soma de mat:', somaMatrizes)
console.log('-------------------')

console.table(mat2)
console.log('Soma de mat2:', somaMatrizes2)
console.log('-------------------')
