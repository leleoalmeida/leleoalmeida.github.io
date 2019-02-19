var parameters = {
  fuel: 20,
  throttle: 0,
  speed: 0,
  acceleration: 0
}

var environment = {
  gravity: 9.8,
  distance: 91359421,
  atmosphere: 14.7,
}

var supplies = {
  food: 27,
  water: 27,
}

var metrics = {
  converter: 0,
  miles: 0
}


function fuelGauge() {
  var newWidth = (parameters.fuel * 240 / 100) + "px";

  var marginTop = (240 - (240 / 100 * parameters.fuel)) + 'px';

  document.getElementById('fuel-level').style.width = newWidth;

  document.getElementById('fuel-level').style.marginRight =
    marginTop;

  document.getElementById('fuel-text').innerHTML = "Fuel: " + parameters.fuel + "%";
}

function throttleGauge() {
  var newWidth = (parameters.throttle * 240 / 10) + "px";

  var marginTop = (240 - (240 / 10 * parameters.fuel)) + 'px';

  document.getElementById('throttle-level').style.width = newWidth;

  document.getElementById('throttle-level').style.marginRight =
    marginTop;

  document.getElementById('throttle-text').innerHTML = "Throttle: " + parameters.throttle;

  parameters.acceleration = parameters.throttle * 2435;

  parameters.speed = parameters.throttle * 12 * parameters.acceleration;

  document.getElementById('acceleration-text').innerHTML = "Acceleration:<br>" + parameters.acceleration + "m/s";

  if (parameters.fuel < 30) {
    document.getElementById('fuel-level').style.backgroundColor = 'red';
  } else {
    document.getElementById('fuel-level').style.backgroundColor = 'white';
  }
  document.getElementById('speed-text').innerHTML = "Speed:<br>" + parameters.speed + "km/s";
}

function throttleUp() {
  if (parameters.throttle < 10) {
    parameters.throttle++;

  }
  console.log(parameters.throttle);
  throttleGauge();
}

function convertGravity() {
  var newGrav = document.getElementById('grav-input').value * .38;
  document.getElementById('grav-text').innerHTML = document.getElementById('grav-input').value + 'kg on earth is ' + newGrav + 'kg on Mars.'
}

function convertMiles() {
  var newMiles = document.getElementById('miles-input').value * 1.53;
  document.getElementById('miles-text').innerHTML = document.getElementById('miles-input').value + ' mi on earth is ' + newMiles + ' mi on Mars.'
}

function throttleDown() {
  if (parameters.throttle > 0) {
    parameters.throttle--;
  }
  throttleGauge();
}
