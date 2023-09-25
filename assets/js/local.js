const restaurants = $("#restaurants");
const locations = $("#location");

function storeChoice() {

    let choices = {
        restaurants: restaurants.value.trim(),
        locations: locations.value.trim(),
    };
    localStorage.setItem('choices', JSON.stringify(choices));
}

function renderLastChoice() {
    let lastChoice = JSON.parse(localStorage.getItem('choices'));
    if (lastChoice !== null) {
        console.log(lastChoice.restaurants);
        console.log(lastChoice.locations);
    }
}

storeChoice();

function init() {
    renderLastChoice();
}
init();