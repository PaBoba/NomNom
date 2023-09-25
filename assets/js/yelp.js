
// client id : 5C3lhIupLpFMNWeB_stpRg
// API-key: 16jnFQRP52jf5sybih5Xg2CGHQJWWi_dDbbM-J5988og5MVn4mc1XIpUF8bIp6Oc3ZT-_QN8G5guPGva36ViW8D5mldgP6LUPESb_fHvUDvNhf7qneIfHFngMCUBZXYx

// // business search
// https://api.yelp.com/v3/businesses/search


// the yelp api doesnt support CORS, so a proxy is needed before the url
let queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey = '16jnFQRP52jf5sybih5Xg2CGHQJWWi_dDbbM-J5988og5MVn4mc1XIpUF8bIp6Oc3ZT-_QN8G5guPGva36ViW8D5mldgP6LUPESb_fHvUDvNhf7qneIfHFngMCUBZXYx' //Add your key here

const $priceRange = $('#priceRange');
const $hours = $('#hours');
const $parking = $('#parking');
const $foodType = $('#foodType');
const $restaurants = $('#restaurants');

const searchInput = document.getElementById('restaurants');

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const priceRange = $priceRange.val();
    const hours = $hours.val();
    const parking = $parking.val();
    const foodType = $foodType.val();
    const restaurants = $restaurants.val();

    const searchTerm = searchInput.value;

    $.ajax({
      url: queryURL,
      method: "GET",
      headers: { "accept": "application/json", "Authorization": `Bearer ${apiKey}`},
      data: { term: '${restaurants}' , location: 'Oakland'}

    }).then(function(data) {
        console.log(data);
    });

    console.log(searchTerm);

      event.preventDefault();
  }
});



