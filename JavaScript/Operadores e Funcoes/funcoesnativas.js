//funções nativas- Data e Hora
console.log("Funções nativas ");

let agora = new Date();
console.log(agora);


function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1);
    console.log("Ano:", data.getFullYear());
    console.log("Horas:", data.getHours());
    console.log("Minutos:", data.getMinutes());
    console.log("Desafio:", data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + " " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
}
mostrarDataHora();
    

//funções nativas- Math
console.log("Funções nativas - Math");
console.log(Math.PI);

function calcularoperacoes(numero) {
    console.log("Raiz quadrada:", Math.sqrt(numero));
    console.log("Arredondamento:", Math.round(numero));
    console.log("Arredondamento para cima:", Math.ceil(numero));
    console.log("Arredondamento para baixo:", Math.floor(numero));
    console.log("Valor absoluto:", Math.abs(numero));
    console .log("Potência:", Math.pow(numero, 2));
}
calcularoperacoes(7.8);


//funções nativas- String
console.log("Funções nativas - String");

function analisarString(texto) {
    console.log("Tamanho da string:", texto.length);
    console.log("String em maiúsculas:", texto.toUpperCase());
    console.log("String em minúsculas:", texto.toLowerCase());
}
analisarString("JavaScript");

function verificapalavra(frase) {
    console.log(frase.includes("JavaScript"));
}
verificapalavra("eu estudo JavaScript");


function concatena(nome,curso) {
    return "Aluno: " + nome + " | Curso: " + curso;
}
console.log(concatena("Gabriela", "JavaScript"));

