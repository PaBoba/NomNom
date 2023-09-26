
// client id : 5C3lhIupLpFMNWeB_stpRg
// API-key: 16jnFQRP52jf5sybih5Xg2CGHQJWWi_dDbbM-J5988og5MVn4mc1XIpUF8bIp6Oc3ZT-_QN8G5guPGva36ViW8D5mldgP6LUPESb_fHvUDvNhf7qneIfHFngMCUBZXYx

// // business search
// https://api.yelp.com/v3/businesses/search


// the yelp api doesnt support CORS, so a proxy is needed before the url
let queryURL = "https://api.yelp.com/v3/businesses/search";
const apiKey = '16jnFQRP52jf5sybih5Xg2CGHQJWWi_dDbbM-J5988og5MVn4mc1XIpUF8bIp6Oc3ZT-_QN8G5guPGva36ViW8D5mldgP6LUPESb_fHvUDvNhf7qneIfHFngMCUBZXYx' //Add your key here

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
    const restaurants = $restaurants.val();
    const location = $location.val();
    const searchTerm = businessSearchInput.value;

    $.ajax({
      url: `https://api.yelp.com/v3/businesses/search?term=${restaurants}&location=${location}`,
      method: "GET",
      headers: { "accept": "application/json", "Authorization": `Bearer ${apiKey}`},

    }).then(function(data) {
        console.log(data);
        console.log(data.businesses[0].name);
        console.log(data.businesses[0].price);
        console.log(data.businesses[0].rating);
        console.log(data.businesses[0].image_url);
        console.log(data.businesses[0].location.display_address[0]);
        console.log(data.businesses[0].location.display_address[1]);

        const restaurant1Name = data.businesses[0].name
        $('#restaurant1Name').text(restaurant1Name);

        const restaurant1Rating = data.businesses[0].rating
        const restaurant1Price = data.businesses[0].price
        $('#restaurant1Text').text(restaurant1Rating + ' , ' + restaurant1Price);

        const restaurant1Image = data.businesses[0].image_url
        $('#restaurant1Image').attr('src', data.businesses[0].image_url);

        console.log(data.businesses[1].name);
        console.log(data.businesses[1].price);
        console.log(data.businesses[1].rating);
        console.log(data.businesses[1].image_url);
        console.log(data.businesses[1].location.display_address[0]);
        console.log(data.businesses[1].location.display_address[1]);

        const restaurant2Name = data.businesses[1].name
        $('#restaurant2Name').text(restaurant2Name);

        const restaurant2Rating = data.businesses[1].rating
        const restaurant2Price = data.businesses[1].price
        $('#restaurant2Text').text(restaurant2Rating + ' , ' + restaurant2Price);

        const restaurant2Image = data.businesses[1].image_url
        $('#restaurant2Image').attr('src', data.businesses[1].image_url);

        console.log(data.businesses[2].name);
        console.log(data.businesses[2].price);
        console.log(data.businesses[2].rating);
        console.log(data.businesses[2].image_url);
        console.log(data.businesses[2].location.display_address[0]);
        console.log(data.businesses[2].location.display_address[1]);

        const restaurant3Name = data.businesses[2].name
        $('#restaurant3Name').text(restaurant3Name);

        const restaurant3Rating = data.businesses[2].rating
        const restaurant3Price = data.businesses[2].price
        $('#restaurant3Text').text(restaurant3Rating + ' , ' + restaurant3Price);

        const restaurant3Image = data.businesses[2].image_url
        $('#restaurant3Image').attr('src', data.businesses[2].image_url);
    });

    console.log(searchTerm);
      event.preventDefault();
  }
});




locationSearchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const restaurants = $restaurants.val();
    const location = $location.val();
    const searchTerm = locationSearchInput.value;

    $.ajax({
      url: `https://api.yelp.com/v3/businesses/search?term=${restaurants}&location=${location}`,
      method: "GET",
      headers: { "accept": "application/json", "Authorization": `Bearer ${apiKey}`},

    }).then(function(data) {
        console.log(data);
        console.log(data.businesses[0].name);
        console.log(data.businesses[0].price);
        console.log(data.businesses[0].rating);
        console.log(data.businesses[0].image_url);
        console.log(data.businesses[0].location.display_address[0]);
        console.log(data.businesses[0].location.display_address[1]);
        
        const restaurant1Name = data.businesses[0].name
        $('#restaurant1Name').text(restaurant1Name);

        const restaurant1Rating = data.businesses[0].rating
        const restaurant1Price = data.businesses[0].price
        $('#restaurant1Text').text(restaurant1Rating + ' , ' + restaurant1Price);

        const restaurant1Image = data.businesses[0].image_url
        $('#restaurant1Image').attr('src', data.businesses[0].image_url);

        const restaurant1Address =  data.businesses[0].location.display_address[0]
        const restaurant1Address2 = data.businesses[0].location.display_address[1]
        $('#restaurant1Address').attr('src', data.businesses[0].location.display_address[0] + ' ' + data.businesses[0].location.display_address[1])

        console.log(data.businesses[1].name);
        console.log(data.businesses[1].price);
        console.log(data.businesses[1].rating);
        console.log(data.businesses[1].image_url);
        console.log(data.businesses[1].location.display_address[0]);
        console.log(data.businesses[1].location.display_address[1]);

        const restaurant2Name = data.businesses[1].name
        $('#restaurant2Name').text(restaurant2Name);

        const restaurant2Rating = data.businesses[1].rating
        const restaurant2Price = data.businesses[1].price
        $('#restaurant2Text').text(restaurant2Rating + ' , ' + restaurant2Price);

        const restaurant2Image = data.businesses[1].image_url
        $('#restaurant2Image').attr('src', data.businesses[1].image_url);

        const restaurant2Address =  data.businesses[1].location.display_address[0]
        const restaurant2Address2 = data.businesses[1].location.display_address[1]
        $('#restaurant2Address').attr('src', data.businesses[0].location.display_address[0] + ' ' + data.businesses[0].location.display_address[1])

        console.log(data.businesses[2].name);
        console.log(data.businesses[2].price);
        console.log(data.businesses[2].rating);
        console.log(data.businesses[2].image_url);
        console.log(data.businesses[2].location.display_address[0]);
        console.log(data.businesses[2].location.display_address[1]);

        const restaurant3Name = data.businesses[2].name
        $('#restaurant3Name').text(restaurant3Name);

        const restaurant3Rating = data.businesses[2].rating
        const restaurant3Price = data.businesses[2].price
        $('#restaurant3Text').text(restaurant3Rating + ' , ' + restaurant3Price);

        const restaurant3Image = data.businesses[2].image_url
        $('#restaurant3Image').attr('src', data.businesses[2].image_url);

        const restaurant3Address =  data.businesses[2].location.display_address[0]
        const restaurant3Address2 = data.businesses[2].location.display_address[1]
        $('#restaurant3Address').attr('src', data.businesses[0].location.display_address[0] + ' ' + data.businesses[0].location.display_address[1])

    });

    console.log(searchTerm);
      event.preventDefault();
  }
});




