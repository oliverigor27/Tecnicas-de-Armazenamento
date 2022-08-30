let nome = "Mia";
let soma = 0;

for(let i = 0; i < nome.length; i++) {

    soma += nome.charCodeAt(i);

}

console.log(soma);

function addNameOnTable(data) {
    let arr = [];
    let one, two, three, result, resuult, soma = 0;

    for(let i = 0; i < data.length; i++) {
        soma += data.charCodeAt(i);
    }

    one = (soma / 11);
    two = one.toFixed();
    three = one - two;
    result = three * 11;
    resuult = Math.round(result);

    arr[resuult] = data;

    console.log(arr);
}

addNameOnTable("Mia");
addNameOnTable("Ana");
addNameOnTable("Caio");


