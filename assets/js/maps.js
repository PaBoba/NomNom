let map;
let directionsService;
let directionsRenderer;
let sourceAutocomplete;
let desAutocomplete;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 32.707548, lng: -117.157246 },
        zoom: 13,
    })
    google.maps.event.addListener(map, "click", function (event) {
        this.setOptions({ scrollwheel: true });
    })
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    sourceAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("source")
    )
    desAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById("dest")
    )
}

function calcRoute() {
    const source = document.getElementById("source").value
    const dest = document.getElementById("dest").value

    let request = {
        origin: source,
        destination: dest,
        travelMode: "DRIVING",

    };
    directionsService.route(request, function (result, status) {
        if (status == "OK") {
            directionsRenderer.setDirections(result);
        }
    });
}

let googleSearch = document.getElementById("googleSearch")

googleSearch.addEventListener("click", function (event) {
    event.preventDefault();
    calcRoute();
});