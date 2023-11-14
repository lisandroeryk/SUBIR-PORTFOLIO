var play1 = document.getElementById("Playbo1");
var play2 = document.getElementById("Playbo2");
var play3 = document.getElementById("Playbo3");
var play4 = document.getElementById("Playbo4");
var allplay = [play1, play2, play3, play4];

for (var i = 0; i < allplay.length; i++)
  allplay[i].onclick = function () {
    var preload = document.getElementById("pre-load");
    preload.innerHTML = "<div class='loadl'></div>";
  };
alert("chute");
