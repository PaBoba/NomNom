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
    google.maps.event.addListener(map, "mouseover", function (event) {
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

    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    // This is where I need to figure out how to remove the button and place it next to the get directions
    // I am not sure where/ how to pull the button and attach the function like the one above
    // The control can be moved according to this link https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning
    map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                },
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation.",
    );
    infoWindow.open(map);
}

window.initMap = initMap;

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