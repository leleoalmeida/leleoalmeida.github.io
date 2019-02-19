var parameters = {
  fuel: 100,
  throttle: 0,
  speed: 0,
  acceleration: 0
}


function accel() {

  parameters.acceleration = parameters.throttle*5;
  console.log(parameters.aceleration);

}
