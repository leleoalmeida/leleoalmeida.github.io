var size = 1;



function bigger() {
  var elementsize = document.getElementById("text");
  size += .03;
  elementsize.style.fontSize = size + "rem";
  console.log(elementsize.style.fontSize);
  console.log(elementsize.style);

}

function smaller() {
  var elementsize = document.getElementById("text");
  size -= .03;
  elementsize.style.fontSize = size + "rem";
  console.log(elementsize.style.fontSize);
  console.log(elementsize.style);

}
