document.getElementById("conteudo").innerHTML = "<p>Olá, DOM! (Código HTML = innerHTML).</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML (textContent).";

document.getElementById("foto").setAttribute("src", "https://img.freepik.com/fotos-gratis/um-gatinho-adoravel-a-caminhar_658552-2.jpg?semt=ais_related_payload_trends&w=740&q=80");

let url = document.getElementById("link").getAttribute("href");
console.log(url); // "https://example.com"

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");
