/* -----------------------THIS FUNCTION CHANGES ICON OF THE HEART FROM "EMPTY" to "FILLED" ---------------------*/

const heartIcon = document.getElementById("heartIcon");
let isFilled = false;

heartIcon.addEventListener("click", function () {
  if (isFilled) {
    heartIcon.classList.remove("bi-heart-fill");

    heartIcon.innerHTML = "";
    heartIcon.className = "bi bi-heart mx-2";

    isFilled = false;
  } else {
    heartIcon.classList.add("bi-heart-fill");

    heartIcon.innerHTML = "";
    heartIcon.className = "bi bi-heart-fill mx-2";

    isFilled = true;
  }
});

/* -----------------------THIS FUNCTION CHANGES THE SHUFFLE ICON COLOR FROM WHITE TO GREEN (AND VICE VERSA) ---------------------*/

const repeatIcon = document.getElementById("repeatIcon");
const colorToggleRepeat = document.getElementById("colorToggleRepeat");
let isWhiteRepeat = true;

colorToggleRepeat.addEventListener("click", function () {
  if (isWhiteRepeat) {
    repeatIcon.style.color = "#34cb1d";
    isWhiteRepeat = false;
  } else {
    repeatIcon.style.color = "#ffffff";
    isWhiteRepeat = true;
  }
});

/* -----------------------THIS FUNCTION CHANGES THE REPEAT ICON COLOR FROM WHITE TO GREEN (AND VICE VERSA) ---------------------*/

const shuffleIcon = document.getElementById("shuffleIcon");
const colorToggleShuffle = document.getElementById("colorToggleShuffle");
let isWhiteShuffle = true;

colorToggleShuffle.addEventListener("click", function () {
  if (isWhiteShuffle) {
    shuffleIcon.style.color = "#34cb1d";
    isWhiteShuffle = false;
  } else {
    shuffleIcon.style.color = "#ffffff";
    isWhiteShuffle = true;
  }
});

/* -----------------------THIS FUNCTION CHANGES THE SVG FROM "PLAY" to "PAUSE" ---------------------

const playPause = document.getElementById("playPauseSvg");
let isFilled = false;

playPause.addEventListener("click", function () {
  if (isFilled) {
    playPause.classList.remove("bi bi-pause-circle-fill");

    playPause.innerHTML = "";
    playPause.className = "bi bi-play-circle-fill";

    isFilled = false;
  } else {
    playPause.classList.add("bi bi-pause-circle-fill");

    playPause.innerHTML = "";
    playPause.className = "bi bi bi-pause-circle-fill mx-2";

    isFilled = true;
  }
});

*/

/* ------------------------ LEFT SIDE TAKE IMAGE, SONG TITLE & ARTIST NAME -----------------*/
