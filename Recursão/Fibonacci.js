class Fibonacci {
    fatorial(data) {
        if(data === 1) return 1;

        return data * this.fatorial(data - 1);
    }
}

const x = new Fibonacci();

console.log(x.fatorial(3));