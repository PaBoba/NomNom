function initMap() {

    let mapOptions = {
        center: new google.maps.LatLng("32.707548", "-117.157246"),
        zoom: 16

    }
    
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);


}