class Recursao {
    constructor() {
        let fat = this.fatorial(4);
        console.log(fat);
    }

    fatorial(dta) {
        if(dta == 0) {
            return 1;
        }

        return dta * this.fatorial(dta - 1);
    }
}

const x = new Recursao();

x;

