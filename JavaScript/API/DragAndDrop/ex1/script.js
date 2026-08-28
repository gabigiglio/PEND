const comidas = document.querySelectorAll(".comida");
const animais = document.querySelectorAll(".animal");

let pontos = 0;

comidas.forEach(comida => {

    comida.addEventListener("dragstart", () => {
        comida.classList.add("arrastando");
    });

    comida.addEventListener("dragend", () => {
        comida.classList.remove("arrastando");
    });

});

animais.forEach(animal => {

    animal.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    animal.addEventListener("drop", (event) => {
        event.preventDefault();

        const comida = document.querySelector(".arrastando");

        if (!comida) return;

        if (comida.dataset.comida === animal.dataset.comida) {

            pontos += 10;
            document.querySelector("#pontos").textContent = pontos;

            const area = animal.querySelector(".area-drop");

            area.appendChild(comida);

            mensagem.textContent = "✅ Muito bem! Você acertou!";

        } else {

            mensagem.textContent = "❌ Essa comida não é desse animal!";

        }

    });

});