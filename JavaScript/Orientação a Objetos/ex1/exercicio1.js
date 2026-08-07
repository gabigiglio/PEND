// classe
class Animal {

    //
    constructor(especie, raça, cor, habitat, tamanho) {
        // atributos
        this.especie = especie;
        this.raça = raça;
        this.cor = cor;
        this.habitat = habitat;
        this.tamanho = tamanho;
    }

    //
    andar() {
        console.log(`${this.especie} está andando.`);
    }

    //
    deitado() {
        console.log(`${this.especie} está deitado.`);
    } 

    //
    parado() {
        console.log(`${this.especie} está parado.`);
    }

    // 
    comendo() {
        console.log(`${this.especie} está comendo.`);
    }

    //
    agua() {
        console.log(`${this.especie} está bebendo água.`);
    }
}

// objetos
const animal1 = new Animal("Coelho", "Lop inglês", "Laranja", "Doméstico", "Grande");
console.log("Animal 1: ", animal1);

// 
const animal2 = new Animal("Cachorro", "Vira-lata", "Caramelo", "Doméstico", "Médio");
console.log("Animal 2: ", animal2);

// 
const animal3 = new Animal("Gato", "Siamês", "Branco", "Doméstico", "Pequeno");
console.log("Animal 3: ", animal3);

// 
const animal4 = new Animal("Cavalo", "Thoroughbred", "Preto", "Rural", "Grande");
console.log("Animal 4: ", animal4);


console.log("--------------------------------");
console.log("Atributos do Animal 1: ");
console.log("- ", animal1.especie);
console.log("- ", animal1.raça);
console.log("- ", animal1.cor);
console.log("- ", animal1.habitat);
console.log("- ", animal1.tamanho);
//
animal1.parado();
animal1.comendo();


console.log("--------------------------------");
console.log("Atributos do Animal 2: ");
console.log("- ", animal2.especie);
console.log("- ", animal2.raça);
console.log("- ", animal2.cor);
console.log("- ", animal2.habitat);
console.log("- ", animal2.tamanho);
//
animal2.andar();
animal2.agua();

console.log("--------------------------------");
console.log("Atributos do Animal 3: ");
console.log("- ", animal3.especie);
console.log("- ", animal3.raça);
console.log("- ", animal3.cor);
console.log("- ", animal3.habitat);
console.log("- ", animal3.tamanho);
//
animal3.deitado();
animal3.comendo();

console.log("--------------------------------");
console.log("Atributos do Animal 4: ");
console.log("- ", animal4.especie);
console.log("- ", animal4.raça);
console.log("- ", animal4.cor);
console.log("- ", animal4.habitat);
console.log("- ", animal4.tamanho);
//
animal4.parado();
animal4.agua();
