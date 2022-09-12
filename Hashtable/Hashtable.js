class HashTable {

    constructor() {
        this.table = new Array(100);
        this.size = 0;
    }

    #hash(data) {
        let hash = 0;
        let result;

        for(let i = 0; i < data.length; i++) {
            hash += data.charCodeAt(i);
        };

        result = (hash % this.table.length) / 2
        
        return result.toFixed();
    }

    setHashTable(key, value) {
        let index = this.#hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    getAllHashTAble() {
        return this.table;
    }

    getHashTable(key) {
        let target = this.#hash(key);
        return this.table[target];
    }

    getsize() {
        return this.size;
    }

}

const hash = new HashTable();

hash.setHashTable("Mia", "555-386-923");
hash.setHashTable("Igor", "555-386-923");

console.log(hash.getsize());
console.log(hash.getHashTable("Igor"));