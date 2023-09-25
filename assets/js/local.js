const restaurants = $("#restaurants");
const locations = $("#location");

function storeChoice() {
  // Save related form data as an object
  let choices = {
    restaurants: restaurants.value.trim(),
    locations: locations.value.trim(),
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('choices', JSON.stringify(choices));
}

function renderLastChoice() {
  // Use JSON.parse() to convert text to JavaScript object
  let lastChoice = JSON.parse(localStorage.getItem('choices'));
  // Check if data is returned, if not exit out of the function
  if (lastChoice !== null) {
  console.log(lastChoice.restaurants);
  console.log(lastChoice.locations);
  }
}

function init() {
  renderLastChoice();
}
init();