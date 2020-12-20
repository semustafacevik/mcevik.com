function showBox(boxClassId) {
  var boxes = document.getElementsByClassName("box");

  for (const box of boxes) {
    box.style.display = "none";
  }

  document.getElementById("box-wrap").classList.toggle("is-flipped");
  document.getElementById(boxClassId).style.display = "flex";
}

document.getElementById("about-box").style.display = "none";
document.getElementById("projects-box").style.display = "none";
