class Produto {

    //
    constructor(nome, preco, estoque) {
        // atributos
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    //
    vender() {
        console.log(`${this.nome} está sendo vendido.`);
    }

    //
    repor() {
        console.log(`${this.nome} está sendo reposto.`);
    } 
    //
    alterarPreco() {
        console.log(`${this.nome} está tendo seu preço alterado.`);
    }

}

// objetos
const produto1 = new Produto("Notebook", 3000, 10);
console.log("Produto 1: ", produto1);
// objetos
const produto2 = new Produto("Mouse", 100, 50);
console.log("Produto 2: ", produto2);
// objetos
const produto3 = new Produto("Teclado", 200, 20);
console.log("Produto 3: ", produto3);


console.log("--------------------------------");
console.log("Atributos do Produto 1: ");
console.log("- ", produto1.nome);
console.log("- ", produto1.preco);
console.log("- ", produto1.estoque);
console.log("- ", produto1.matricula);
//
produto1.vender();
produto1.repor();

console.log("--------------------------------");
console.log("Atributos do Produto 2: ");
console.log("- ", produto2.nome);
console.log("- ", produto2.preco);
console.log("- ", produto2.estoque);
console.log("- ", produto2.matricula);
//
produto2.vender();
produto2.alterarPreco();

console.log("--------------------------------");
console.log("Atributos do Produto 3: ");
console.log("- ", produto3.nome);
console.log("- ", produto3.preco);
console.log("- ", produto3.estoque);
console.log("- ", produto3.matricula);
//
produto3.repor();
produto3.alterarPreco();