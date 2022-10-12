let v = [9, 20, 17, 10, 18, 25, 25, 15, 2, 15, 17, 17, 16, 11, 3, 11, 25, 16, 12];


let aux;

for(let i = 0; i < v.length; i++) {
    for(let j = 0; j < v.length; j++) {
        if(v[i] < v[j]) {

            aux = v[i];

            v[i] = v[j];

            v[j] = aux;
        }
    }
}

console.log(v); 