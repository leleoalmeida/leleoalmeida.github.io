"use strict";
var cors = "https://cors-anywhere.herokuapp.com/";


(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
  var apiKey = "7ce0c4a734844f855b815b3a9780d5c9";
  var httpRequest;
  makeRequest();

  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', url + '&appid=' + apiKey);
    httpRequest.send();
  }

  function responseMethod() {
    if (httpRequest.readyState === 4) {
      console.log(httpRequest.responseText);
      updateWeather(httpRequest.responseText);
    }
  }

  function updateWeather(responseText) {
    var response = JSON.parse(responseText);
    var condition = response.weather[0].main;
    var sendFact = document.getElementById('chuck-fact');
    sendFact.innerHTML = condition;
    console.log(condition);
  }
})();


// (function() {
//
//   var url = "https://api.chucknorris.io/jokes/random";
//   var httpRequest;
//   makeRequest();
//
//   function makeRequest() {
//     httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = responseMethod;
//     httpRequest.open('GET', url);
//     httpRequest.send();
//   }
//
//   function responseMethod() {
//     if (httpRequest.readyState === 4) {
//       updateChuck(httpRequest.responseText);
//
//     }
//   }
//
//   function updateChuck(responseText) {
//     var response = JSON.parse(responseText);
//     var condition = response.value;
//     var sendFact = document.getElementById('chuck-fact');
//     sendFact.innerHTML = condition;
//   }
// })();

var lat;
var long;


(function() {
  var url = "https://api.open-notify.org/iss-now.json";

  fetch(url).then(function(response) {
    return response.json();

  }).then(function(response) {
    initMap(response);
  });

  var map;

  function initMap(response) {
    var latitudeISS = response.iss_position.latitude;
    var longitudeISS = response.iss_position.longitude;
    console.log(latitudeISS);
    console.log(longitudeISS);

    map = new google.maps.Map(document.getElementById('map'), {

      center: {
        lat: parseInt(latitudeISS),
        lng: parseInt(longitudeISS)
      },
      zoom: 3,
      disableDefaultUI: true,
      styles: [{
          "featureType": "landscape",
          "stylers": [{
            "color": "#e1cb00"
          }]
        },
        {
          "featureType": "water",
          "stylers": [{
            "color": "#f9ed69"
          }]
        }
      ]
    });

    var marker = new google.maps.Marker({
      position: {
        lat: parseInt(latitudeISS),
        lng: parseInt(longitudeISS)
      },
      map: map
    })
  }
})();



(function() {
  var url = "swapi.co/api/starships/2"
  var ship = (Math.floor(Math.random() * Math.floor(37))) + 1
  var finalUrl = cors + url;
  console.log(finalUrl);
  fetch(cors + url)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      console.log(response.name);
      var shipName = response.name;
      document.getElementById('ship-name').innerHTML = 'Welcome aboard the ' + shipName;
    })
})();

// (function() {
//   var url = "http://api.open-notify.org/iss-now.json";
//   var httpRequest;
//   makeRequest();
//
//   function makeRequest() {
//     httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = responseMethod;
//     httpRequest.open('GET', url);
//     httpRequest.send();
//
//   }
//
//   function responseMethod() {
//     if (httpRequest.readyState === 4) {
//
//       var response = JSON.parse(httpRequest.responseText);
//       lat = response.iss_position.latitude;
//       long = response.iss_position.longitude;
//       var sendFact = document.getElementById('iss-coords');
//       sendFact.innerHTML = lat + ' ' + long;
//     }
//   }
// })();



//
//

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
