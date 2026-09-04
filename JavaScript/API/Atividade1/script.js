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
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Erro ao acessar a câmera: ", erro);
});

