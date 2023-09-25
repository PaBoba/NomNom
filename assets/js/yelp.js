
// client id : 5C3lhIupLpFMNWeB_stpRg
// API-key: 16jnFQRP52jf5sybih5Xg2CGHQJWWi_dDbbM-J5988og5MVn4mc1XIpUF8bIp6Oc3ZT-_QN8G5guPGva36ViW8D5mldgP6LUPESb_fHvUDvNhf7qneIfHFngMCUBZXYx

// // business search
// https://api.yelp.com/v3/businesses/search


// the yelp api doesnt support CORS, so a proxy is needed before the url
let queryURL = "https://api.yelp.com/v3/businesses/search";
const apiKey = '16jnFQRP52jf5sybih5Xg2CGHQJWWi_dDbbM-J5988og5MVn4mc1XIpUF8bIp6Oc3ZT-_QN8G5guPGva36ViW8D5mldgP6LUPESb_fHvUDvNhf7qneIfHFngMCUBZXYx' //Add your key here

const $priceRange = $('#priceRange');
const $hours = $('#hours');
const $parking = $('#parking');
const $foodType = $('#foodType');
const $restaurants = $('#restaurants');
const $location = $('#location');

const businessSearchInput = document.getElementById('restaurants');
const locationSearchInput = document.getElementById('location');


jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
});

businessSearchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const priceRange = $priceRange.val();
    const hours = $hours.val();
    const parking = $parking.val();
    const foodType = $foodType.val();
    const restaurants = $restaurants.val();
    const location = $location.val();
    const searchTerm = businessSearchInput.value;

    $.ajax({
      url: `https://api.yelp.com/v3/businesses/search?term=${restaurants}&location=${location}`,
      method: "GET",
      headers: { "accept": "application/json", "Authorization": `Bearer ${apiKey}`},

    }).then(function(data) {
        console.log(data);
    });

    console.log(searchTerm);
      event.preventDefault();
  }
});


locationSearchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const priceRange = $priceRange.val();
    const hours = $hours.val();
    const parking = $parking.val();
    const foodType = $foodType.val();
    const restaurants = $restaurants.val();
    const location = $location.val();
    const searchTerm = locationSearchInput.value;

    $.ajax({
      url: `https://api.yelp.com/v3/businesses/search?term=${restaurants}&location=${location}`,
      method: "GET",
      headers: { "accept": "application/json", "Authorization": `Bearer ${apiKey}`},

    }).then(function(data) {
        console.log(data);
    });

    console.log(searchTerm);
      event.preventDefault();
  }
});




