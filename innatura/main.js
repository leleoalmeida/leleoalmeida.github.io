  var map;
  function initMap() {
      var myLatLng = {lat: -20.304598255875725, lng: -40.30069019999996};
    map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 18,
      disableDefaultUI: true,
      styles: [
{
"featureType": "administrative",
"elementType": "geometry",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "landscape",
"stylers": [
  {
    "color": "#bc2e23"
  }
]
},
{
"featureType": "poi",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road",
"elementType": "labels.icon",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#ffffff"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#ffffff"
  }
]
},
{
"featureType": "transit",
"stylers": [
  {
    "visibility": "off"
  }
]
}
]
    });
    var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: 'Hello World!'
});
  }
