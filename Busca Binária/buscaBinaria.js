let vet = [10,12,16,18,21,25,30];

function teste(vetor, dado) {
    let inicio = 0; final = vetor.length - 1;
    let result = -1;

    
    while(inicio <= final) {
        let meio = (inicio + final) / 2;
        if(vetor[meio] == dado) {
            return result = {
                index: meio,
                valor: vetor[meio]
            };
        } else {
            if(dado < vetor[meio]) {
                final = meio - 1;
            } else {
                inicio = meio + 1;
            }
        }
    }

    return result;
}

console.log(teste(vet, 10));