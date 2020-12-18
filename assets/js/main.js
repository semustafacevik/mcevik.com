function showBox(boxClassId) {
  var boxes = document.getElementsByClassName("box");

  for (const box of boxes) {
    box.style.display = "none";
  }

  document.getElementById(boxClassId).style.display = "flex";
}

document.getElementById("about-box").style.display = "none";
