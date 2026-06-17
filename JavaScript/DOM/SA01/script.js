// Seleção dos elementos do DOM
let validar = document.querySelector("#validar");
let resultado = document.getElementById("resultado");
let resultadoNome = document.getElementById("resultadoNome");
let resultadoEmail = document.getElementById("resultadoEmail");
let resultadoSenha = document.getElementById("resultadoSenha");
let resultadoTelefone = document.getElementById("resultadoTelefone");
let addtelefone = document.getElementById("addtelefone");
let novoTelefone = document.getElementById("telefone");
let removertelefone = document.getElementById("removertelefone");


//validar nome
let nome = document.getElementById("nome");
nome.addEventListener("keyup", function() {
    if (nome.value.trim() === "") { // Verifica se o campo nome está vazio ou contém apenas espaços
        resultadoNome.textContent = "O campo nome é obrigatório.";
        resultadoNome.style.color = "red";
    } else {
        resultadoNome.textContent = "Nome válido.";
        resultadoNome.style.color = "green";
    }
    
});

// validar email
let email = document.getElementById("email");
email.addEventListener("keyup", function() {
    resultadoEmail.textContent = "" 
    let mascara = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar email
    if (!mascara.test(email.value)) {
        resultadoEmail.textContent = "Por favor, digite um email válido.";
        resultadoEmail.style.color = "red";
        return;
    }else {
        resultadoEmail.textContent = "Email válido.";
        resultadoEmail.style.color = "green";
    }
});

// validar senha
let senha = document.getElementById("senha");
senha.addEventListener("keyup", function() {
    if (senha.value.length < 6) { // Verifica se a senha tem menos de 6 caracteres
        senha.style.borderColor = "red";
        resultadoSenha.textContent = "Senha fraca.";
        resultadoSenha.style.color = "red";
    } else if (senha.value.length >= 6 && senha.value.length < 10) { // Verifica se a senha tem entre 6 e 10 caracteres
        senha.style.borderColor = "orange";
        resultadoSenha.textContent = "Senha aceitável.";
        resultadoSenha.style.color = "orange";
    } else {
        senha.style.borderColor = "green"; // Verifica se a senha tem 10 ou mais caracteres
        resultadoSenha.textContent = "Senha forte.";
        resultadoSenha.style.color = "green";
    }
}); 

//validar telefone

let telefone = document.getElementById("telefone");
telefone.addEventListener("input", function() {
    let mascara = /^\(?([1-9]{2})\)? ?(9?[0-9]{4})-?([0-9]{4})$/; // Expressão regular para validar telefone (10 ou 11 dígitos, com ou sem formatação)  
    if (!mascara.test(telefone.value)) {
        resultadoTelefone.textContent = "Por favor, digite um telefone válido (10 ou 11 dígitos).";
        resultadoTelefone.style.color = "red";
        return;
    } else {
        resultadoTelefone.textContent = "Telefone válido.";
        resultadoTelefone.style.color = "green";
    }   
});

// Validar cadastro
validar.addEventListener("click", function() {
    if (resultadoNome.textContent === "Nome válido." && resultadoEmail.textContent === "Email válido." && resultadoSenha.textContent !== "Senha fraca." && resultadoTelefone.textContent === "Telefone válido.") {
        resultado.textContent = "Cadastro realizado com sucesso!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Por favor, corrija os erros antes de cadastrar.";
        resultado.style.color = "red";
    }
});

let containerTelefones = document.getElementById("telefones"); // Seleciona o container onde os campos de telefone serão adicionados
// Adicionar um novo campo de telefone
addtelefone.addEventListener("click", function() {
    let novoTelefone = document.createElement("input");
    novoTelefone.type = "text";
    novoTelefone.placeholder = "Digite seu telefone";
    novoTelefone.classList.add("telefone");
    containerTelefones.appendChild(novoTelefone);
});
// Remover o último campo de telefone adicionado
removertelefone.addEventListener("click", function() {
    let telefones = document.querySelectorAll(".telefone");
    if (telefones.length > 0) {
        telefones[telefones.length - 1].remove();
    }   
});

// Mostrar ou ocultar senha
let input = document.getElementById("#senha");
let botaoSenha = document.querySelector("#botaoSenha");

botaoSenha.addEventListener("click", function() {
    if (senha.type === "password") {   // Verifica se o campo de senha está oculto
        senha.setAttribute('type', 'text');
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else { // Verifica se o campo de senha está visível
        senha.setAttribute('type', 'password');
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});
