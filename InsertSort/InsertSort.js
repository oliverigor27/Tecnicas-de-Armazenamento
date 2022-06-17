class InsertionSortTest {

    insertionSort(data) {

        for(let next = 1; next < data.length; next++) {

            let insert = data[next]; // item a ser inserido
            let moveItem = next; // local para inserir elemento

            while(moveItem > 0 && data[moveItem - 1] > insert) {
                data[moveItem] = data[moveItem - 1]; //Desloca o element direito um slot
                moveItem--
            }

            data[moveItem] = insert // Local do elemento inserido
            this.printPass(data, next, moveItem);
        }
    }

    // Imprime uma passagem do elemento
    printPass(data, pass, index) {
        console.log(`Number of operations: ${pass}`);

        // Gera a saida dos elementos até o item trocado.
        for(let i = 0; i < index; i++) {
            console.log(`Output element until the number for swap: ${data[i]}`);
        }

        console.log(`Indicate the swap of a element: ${data[index]}`);

        //Termina de gerar a saida do Array.
        for(let i = index + 1; i < data.length; i++) {
            console.log(`Run the remaining array: ${data[i]}`);
        }

        // Alinhamento
        console.log("______________________");

    }

}

const insertSortAlg = new InsertionSortTest();

let arr = [5,2,15,22,47,33,85,44,53,69,100,35];

insertSortAlg.insertionSort(arr);

console.log(arr);