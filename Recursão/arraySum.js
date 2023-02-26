
function sumArray(arr) {
    if (!arr.length) {
      return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
  }

let vet = [2,4,6];

console.log(sumArray(vet))