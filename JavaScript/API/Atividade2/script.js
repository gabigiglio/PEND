const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");

navigator.geolocation.getCurrentPosition
    (function(position) {
        document.getElementById("latitude").textContent = position.coords.latitude;
        document.getElementById("longitude").textContent = position.coords.longitude;
        document.getElementById("precisao").textContent = position.coords.accuracy + " metros";
    },
    function(erro) {
        console.log("Erro ao obter a localização: ", erro);
    }  
);


navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(function(stream) {
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Erro ao acessar a câmera: ", erro);
});

botao.addEventListener("click", function() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video, 
        0, 
        0, 
        canvas.width, 
        canvas.height
    );
    foto.src = canvas.toDataURL("image/png");
});

