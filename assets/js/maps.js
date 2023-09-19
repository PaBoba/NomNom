function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: new google.maps.LatLng("32.707548", "-117.157246"),
    });

    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    document.getElementById("mode").addEventListener("change", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    });

}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {



    
}









// function initMap() {

//     let mapOptions = {
//         center: new google.maps.LatLng("32.707548", "-117.157246"),
//         zoom: 16

//     }
    
//     let map = new google.maps.Map(document.getElementById("map"), mapOptions);


// }