class Aluno {

    //
    constructor(nome, idade, curso, matricula) {
        // atributos
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    //
    aprender() {
        console.log(`${this.nome} está aprendendo.`);
    }

    //
    estudar() {
        console.log(`${this.nome} está estudando.`);
    } 
    //
    apresentar() {
        console.log(`${this.nome} está se apresentando.`);
    }

}

// objetos
const aluno1 = new Aluno("Gabi", 17, "DS", "12345");
console.log("Aluno 1: ", aluno1);
// objetos
const aluno2 = new Aluno("Bia", 17, "DS", "67890");
console.log("Aluno 2: ", aluno2);
// objetos
const aluno3 = new Aluno("Mariana", 17, "DS", "11111");
console.log("Aluno 3: ", aluno3);


console.log("--------------------------------");
console.log("Atributos do Aluno 1: ");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);
//
aluno1.apresentar();
aluno1.estudar();

console.log("--------------------------------");
console.log("Atributos do Aluno 2: ");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);
//
aluno2.apresentar();
aluno2.aprender();

console.log("--------------------------------");
console.log("Atributos do Aluno 3: ");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);
//
aluno3.aprender();
aluno3.estudar();


