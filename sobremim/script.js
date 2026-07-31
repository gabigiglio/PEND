function validarFormulario() {

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
        alert("Digite seu nome.");
        return false;
    }

    if (email === "") {
        alert("Digite seu e-mail.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        return false;
    }

    if (mensagem === "") {
        alert("Digite uma mensagem.");
        return false;
    }

    document.getElementById("resultado").innerHTML =
        "Obrigada pelo contato, " + nome + "! Sua mensagem foi enviada com sucesso.";

   
    document.querySelector("form").reset();

    return false;
}