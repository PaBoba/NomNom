const restaurants = document.getElementById("restaurants");
const locations = document.getElementById("location");
const nomButton = document.getElementById("nom");

function storeChoice() {

    let choices = {
        restaurants: restaurants.value,
        locations: locations.value,
    };
    localStorage.setItem('choices', JSON.stringify(choices));
}

function renderLastChoice() {
    let lastChoice = JSON.parse(localStorage.getItem('choices'));
    console.log(lastChoice);
    if (lastChoice !== null) {
        console.log(lastChoice.restaurants);
        console.log(lastChoice.locations);
    }
}
nomButton.addEventListener("click", function (event) {
    event.preventDefault();
    storeChoice();
    renderLastChoice();
});

function init() {
        renderLastChoice();
    }
init();