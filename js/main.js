window.addEventListener('load', function () {
  const elements = document.getElementsByClassName("work")
  let mouseX = 0
  let mouseY = 0

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    element.addEventListener("mousemove", (e) => {
      // console.log(e);
      mouseX = e.clientX - 400
      mouseY = e.clientY + 100
      console.log(document.getElementById("work-thumb").style.top);


      document.getElementById("work-thumb").style.top = mouseY + 'px'
      document.getElementById("work-thumb").style.left = mouseX + 'px'
    })

    element.addEventListener("mouseleave", () => {
      document.getElementById("work-thumb").style.display = "none";
    })

    element.addEventListener("mouseenter", (e) => {
      document.getElementById("work-thumb").style.display = "block";

      const source = "/img/thumbnails/" + i + ".jpg";
      document.getElementById("work-thumb").src = source;
    })
  }
})


