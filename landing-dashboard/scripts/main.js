"use strict";
var cors = "https://cors-anywhere.herokuapp.com/";
var map;
var shipsArray = new Array(15, 59, 10, 11, 12, 13, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48, 49, 3, 59, 61, 77, 17, 32, 52, 58, 63, 64, 65, 66, 74, 75, 2, 68)

document.getElementById("weather-button").addEventListener("click", checkWeather);
document.getElementById("shipname").addEventListener("click", shipName);

function checkWeather() {
  var url = "http://api.openweathermap.org/data/2.5/weather";
  var apiKey = "7ce0c4a734844f855b815b3a9780d5c9";
  var location = '?q=' + document.getElementById('location').value;
  var finalUrl = url + location + '&appid=' + apiKey;

  fetch(finalUrl)
    .then(function(response) {

      return response.json();
    })
    .then(function(response) {
      console.log(response);
      var weatherStatus = response.weather[0].description;
      var temperatureStatus = response.main.temp;

      document.getElementById('temp-handle').innerHTML = 'Weather in ' + document.getElementById('location').value + ', ' + response.sys.country + ':';
      document.getElementById('weather').innerHTML = Math.floor(temperatureStatus - 273.15) + '&#176 C ' + weatherStatus;

      var marker2 = new google.maps.Marker({
        position: {
          lat: response.coord.lat,
          lng: response.coord.lon
        },
        map: map,
        label: 'L'
      })

    })


  function makeRequest() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseMethod;
    httpRequest.open('GET', url + location + '&appid=' + apiKey);
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
}

var lat;
var long;


(function() {
  var url = "http://api.open-notify.org/iss-now.json";

  fetch(url).then(function(response) {
    return response.json();

  }).then(function(response) {
    initMap(response);
  });


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
            "color": "#f4aa42"
          }]
        },
        {
          "featureType": "water",
          "stylers": [{
            "color": "#f4ee41"
          }]
        }
      ]
    });

    var marker = new google.maps.Marker({
      position: {
        lat: parseInt(latitudeISS),
        lng: parseInt(longitudeISS)
      },
      map: map,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
      }
    })
  }
})();



function shipName() {
  var url = "swapi.co/api/starships/";
  var ship = shipsArray[Math.floor(Math.random() * Math.floor(37))];

  var finalUrl = cors + url + ship + '/';
  console.log(finalUrl);
  fetch(finalUrl)
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
};

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
shipName();
