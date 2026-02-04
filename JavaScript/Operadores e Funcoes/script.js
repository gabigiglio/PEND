console.log("Olá, JavaScript!");

let a = 10;
let b = 3;
console.log("Operador de soma", a + b);
console.log("Operador de subtração", a - b);
console.log("Operador de multiplicação", a * b);
console.log("Operador de divisão", a / b);
console.log("Operador de resto da divisão",a % b);
console.log(a ** b);

let contador = 5;
contador++;
console.log(contador);


let d = 10;
let e = 15;
let f = 20;
console.log("Média de 3 números", (d + e + f) / 3);

let g = 7;
let h = 2;
console.log("Operador de resto da divisão", (g % h));

let x = 10;
let y = "10";
console.log("Comparação de igualdade",x == y);
console.log("Compara se é idêntico",x === y);
console.log("Comparação de desigualdade", x != y);
console.log("Comparação de desigualdade estrita", x !== y);


//atividade 3
let idade = 18; 

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//atividade 4
let n1 = 15;
let n2 = 20;

if (n1 > n2) {
    console.log("O maior número é:", n1);
} else if (n2 > n1) {
    console.log("O maior número é:", n2);
} else {
    console.log("Os números são iguais.");
}

//atividade operadores lógicos
let idadeusuario = 20;
let temcarteira = true;
console.log("&& E");
console.log(idadeusuario >= 18 && temcarteira);

let chovendo = false;
let guardachuva = true;
console.log("|| OU");
console.log(chovendo || guardachuva);

let ligado = false;
console.log(!ligado); // true


//atividade 5
let nota1 = 8;
let frequencia = 60;
if (nota1 >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//atividade 6
let login = false;
let token = true;
if (login || token) {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}
