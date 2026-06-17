//atividade 1
let vermelho = document.getElementById("vermelho");
let azul = document.getElementById("azul");


vermelho.addEventListener("click", function() {
    document.querySelector("h1").style.color = "red";

});

azul.addEventListener("click", function() {
    document.querySelector("h1").style.color = "blue";
});


//atividade 2
let botao = document.getElementById("mostrar");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.classList.toggle("oculto");
});

//atividade 3

let input = document.getElementById("entrada");

input.addEventListener("input", function() {
     let contador = document.getElementById("contador");
     contador.textContent = "caracteres digitados: " + input.value.length;
});

//atividade 4

let contador2 = document.getElementById("contador2");
let clicar = document.getElementById("clicar");
let input2 = document.getElementById("input");
let contagem = 0;

clicar.addEventListener("click", function() {
    contagem++;
    contador2.textContent = `Número de cliques: ${contagem}`;
    input2.value = contagem;
});

//atividade 5, 6 e extra

let adicionar = document.getElementById("adicionar");
let lista = document.getElementById("lista");
let novoItem = document.getElementById("novoItem");

adicionar.addEventListener("click", function() {
    if (novoItem.value.trim() === "") {
        alert("Por favor, digite um item válido.");
        return;
    }
    let item = document.createElement("li");
    item.textContent = novoItem.value;
    lista.appendChild(item);
    novoItem.value = "";
    item.addEventListener("click", function() {
        if (confirm("Deseja remover este item?")) {
            lista.removeChild(item);
        }
    });
});

//Desafio Hard
let validar = document.getElementById("validar");
let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

validar.addEventListener("click", function() {
    if (nome.value.trim() === "") {
        resultado.textContent = "O campo nome é obrigatório.";
        resultado.style.color = "red";
        resultado.addEventListener("click", function() {
});
    } else {
        resultado.textContent = `Nome enviado com sucesso.`;
        resultado.style.color = "green";
        resultado.addEventListener("click", function() {
    
});
    }
    
});
