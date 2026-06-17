//atividade 1
function mostrarDataHora() {
    let data = new Date();
    console.log("Desafio:", data.getHours() + ":" + data.getMinutes());
}
mostrarDataHora();

//atividade 2
function calculos(n1, n2) {
    console.log("Soma:", n1 + n2);
    console.log("Média:", (n1 + n2) / 2);
}
let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");
calculos(Number(n1), Number(n2));


//atividade 3
function verificanome(nome) {
    console.log("Tamanho da string:", nome.length);
    console.log("String em maiúsculas:", nome.toUpperCase());
}
let nome = prompt("Digite seu nome:");
verificanome(nome);

//atividade 4
function verificatexto(texto) {
    console.log(texto.includes("HTML"));
}
let texto = prompt("Digite um texto:");
verificatexto(texto);