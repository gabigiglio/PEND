navigator.geolocation.getCurrentPosition
    (function(position) {
        console.log("Latitude: ", position.coords.latitude);
        console.log("Longitude: ", position.coords.longitude);
        console.log("Precisão: ", position.coords.accuracy);

        document.getElementById("localizacaoPermitida").style.display = "none";
        document.getElementById("localizacaoNegada").style.display = "block";
    },
    function(erro) {
        console.log("Erro ao obter a localização: ", erro);

        document.getElementById("localizacaoPermitida").style.display = "block";
        document.getElementById("localizacaoNegada").style.display = "none";
    }  
);