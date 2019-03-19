
function h_to_hms(h) {
  var x = h * 3600;
  var hh = Math.floor(x / 3600);
  hh = checkTime(hh)
  var y = x % 3600;
  var mm = Math.floor(y / 60);
  mm = checkTime(mm)
  var ss = Math.round(y % 60);
  ss = checkTime(ss);
  return hh + ":" + mm + ":" + ss;
}

function startTime() {
  var clock = new Date();
  var h = clock.getHours();
  var m = clock.getMinutes();
  var s = clock.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);

  var tai_offset = 37;

  var millis = clock.getTime();
  var jd_ut = 2440587.5 + (millis / 8.64E7);
  var jd_tt = jd_ut + (tai_offset + 32.184) / 86400;
  var j2000 = jd_tt - 2451545.0;

  var msd = (((j2000 - 4.5) / 1.027491252) + 44796.0 - 0.00096);
  var mtc = (24 * msd) % 24;

  if (document.getElementById("toggle-id").checked) {
    document.getElementById('digital-clock').innerHTML =
      h + ":" + m + ":" + s;
    document.getElementById('clock-text').innerHTML =
      "Central European Time";

  } else {
    document.getElementById('clock-text').innerHTML =
      "Martian Coordinated Time";
    document.getElementById('digital-clock').innerHTML =
      h_to_hms(mtc);
  }
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i};
  return i;
}

var theme = 0;


function changeTheme() {
  if (theme == 0) {
    document.body.style.backgroundColor = '#005288';
    theme++;
  } else {
    document.body.style.backgroundColor = '#aa4444';
    theme--;
  }
}
