const v = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function buscaBinaria(data, alvo) {
    let min = 0, max = data.length - 1;
    let chute = (max+min) / 2;
    let auxiliar = 0;

    if(max < min) return -1;

    while(data[chute] !== alvo) {
        if(data[chute] == alvo) return data[chute];
        
    }
}

console.log(buscaBinaria(v, 67));
