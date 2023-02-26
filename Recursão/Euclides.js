function euclides(a, b) {
    if(b == 0) return a;

    return euclides(b, a % b);
}

console.log(euclides(1680, 640))