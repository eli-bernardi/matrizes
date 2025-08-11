let mat = []

for (let i = 0; i < 5; i++) {
   mat[i] = []
    for (let j = 0; j < 5; j++) {
        if (i === j) {
            mat[i][j] = 1
        } else {
            mat[i][j] = 0
        }
    }
}

let mat2 =[]
for (let i = 0; i < 6; i++) {
    mat2[i] = []
     for (let j = 0; j < 6; j++) {
         if (i === j) {
             mat2[i][j] = 1
         } else {
             mat2[i][j] = 0
         }
     }
 }
let mat3 = []
for (let i = 0; i < 5; i++) {
    mat3[i] = []
     for (let j = 0; j < 5; j++) {
         if (i === j) {
             mat3[i][j] = 1
         } else {
             mat3[i][j] = 0
         }
     }
 }
console.table(mat)
console.log('-------------------')

console.table(mat2)
console.log('-------------------')

console.table(mat3)
console.log('-------------------')