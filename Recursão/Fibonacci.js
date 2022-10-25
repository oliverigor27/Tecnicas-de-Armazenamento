class Fibonacci {
    constructor() {
        this.fibo(20);
    }

    fibo(dta) {
        if(dta < 2) return dta;

        return console.log(this.fibo(dta - 1) + this.fibo(dta - 2));
    }
}

const x = new Fibonacci();

x;