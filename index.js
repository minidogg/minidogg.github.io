const skillicons = document.getElementById("skillicons")
const sectionWidth = document.querySelector(".section").getBoundingClientRect().width
skillicons.src = skillicons.src.replace("perline=4", "perline="+Math.round(sectionWidth/70))