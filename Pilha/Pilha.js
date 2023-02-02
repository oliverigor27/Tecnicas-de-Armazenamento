class Saudacoes {
    sauda(nome) {
        console.log(`Olá ${nome}`);
        this.sauda2(nome);
        console.log("Esperando ára dizer tchau!!");
        this.tchau();
    }

    sauda2(nome) {
        console.log(`Como vai ${nome}?`);
    }

    tchau() {
        console.log("Ok, tchau!");
    }
}

let sdd = new Saudacoes();

sdd.sauda("Igor");