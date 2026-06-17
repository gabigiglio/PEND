function saudacao() {
    console.log("Olá, Javascript");
}
saudacao();


function saudacao1(nome) {
    console.log("Olá, " + nome);
}
saudacao1("Ana");
//função sem retorno (exibir/interagir, ideal para interface/comunicação)


function somar(a, b) {
    return a + b; //função com retorno (reutilizada em cálculos, ideal para lógica)
}
console.log(somar(5, 3));

//atividade 7
function imc(peso, alt) {
    return peso / (alt * alt);
}
let peso = prompt("Digite seu peso:");
let alt = prompt("Digite sua altura:");
console.log("Seu IMC é:", imc(peso, alt));


//atividade 8
function imparpar(num) {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
let num = prompt("Digite um número:");
console.log("O número é:", imparpar(num));


//funções nativas- Data e Hora
console.log("Funções nativas ");

let agora = new Date();
console.log(agora);