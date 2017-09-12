function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -12.1191427, lng: -77.0349046 },
        zoom: 6
    });
    var infoWindow = new google.maps.InfoWindow({ map: map });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
map.setZoom(18);
map.setCenter({ lat: latitud, lng: longitud });

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}
document.getElementById("encuentrame").addEventListener("click", buscar);
/*function initMap() {
    var laboratoriaLima = { lat: -12.1191427, lng: -77.0349046 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: laboratoriaLima
    });
    var marker = new google.maps.Marker({
        position: laboratoriaLima,
        map: map
    });
}


function buscar() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
}
var latitud, longitud;
var funcionExito = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;
}
var miUbicacion = new google.maps.Marker({
    position: { lat: latitud, lng: longitud },
    map: map
});

map.setZoom(18);
map.setCenter({ lat: latitud, lng: longitud });
var funcionError = function(error) {
    alert("Tenemos un problema con encontrar tu ubicacion");
}
document.getElementById("encuentrame").addEventListener("click", buscar);*/