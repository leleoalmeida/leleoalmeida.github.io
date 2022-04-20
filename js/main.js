const changeThumb = (prop) => {
  const source = "../img/" + prop;
  document.getElementById("work-thumb").src = source;
  document.getElementById("work-thumb").style.display = "block";
};

const resetThumb = () => {
  document.getElementById("work-thumb").style.display = "none";
};
