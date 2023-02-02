const nomes = ["Julia", "Victor", "Maria", "Fernanda", "Antônia"];

function nome(data) {
    if(nomes[data] === "Victor") {
        console.log(nomes[data]);
    } else {
        nome(data - 1);
    }

    return -1;
}

nome(nomes.length);