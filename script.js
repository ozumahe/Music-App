const musics = [
  {
    id: 1,
    musicTitle: "Bia",
    musicImageSrc:
      "https://9jaflaver.com/wp-content/uploads/2021/07/Phyno_Bia_9jaflaver.com_-300x300.jpg",
    musicSrc:
      "https://9jaflaver.com/wp-content/uploads/2021/07/Phyno_Bia_9jaflaver.com_.mp3",
    musicAuthor: "Phyno",
  },
  {
    id: 2,
    musicTitle: "Stacks",
    musicImageSrc:
      "https://9jaflaver.com/wp-content/uploads/2021/09/Stacks-300x300.jpg",
    musicSrc:
      "https://9jaflaver.com/wp-content/uploads/2021/09/Phyno_Stacks_9jaflaver.com_.mp3",
    musicAuthor: "Phyno",
  },
  {
    id: 3,
    musicTitle: "Paulina",
    musicImageSrc:
      "https://9jaflaver.com/wp-content/uploads/2021/04/King-Perryy-Citizen-of-the-World-Album-9jaflaver-com-300x300.jpg",
    musicSrc:
      "https://9jaflaver.com/wp-content/uploads/2021/04/King_Perryy_Ft_Phyno_Paulina_9jaflaver.com_.mp3",
    musicAuthor: "King_Perryy_Ft_Phyno",
  },
];

// function for id getters(DRY)
function _id(id) {
  return document.getElementById(id);
}
// function for querySelector getters(DRY)
function _sel(sel) {
  return document.querySelector(sel);
}

// id getters
const playerContainer = _id("player-container");
const container = _id("container");
const shuffle = _id("shuffle");
const prev = _id("prev");
const play = _id("play");
const next = _id("next");
const repeat = _id("repeat");
const favorite = _id("favorite");
const moreMusic = _id("more-music");

const audio = _id("audio");
const lyricsText = _id("lyrics-text");
const title = _id("title");
const artist = _id("artist");
const image = _id("image");
const duration = _id("duration");
const currentTime = _id("current-time");

const volume = _id("volume");
const track = _id("track");
var canvas = _id("canvas");

const show = _sel(".show-lyrics .fas");
const lyricsContainer = _sel(".lyrics-container");
const playBtn = _sel(".play .fas");

// Initialize Music
let currentMusic = 0;
// Initialize volume
// audio.volume = 0;

// Load Music**********************************
loadMusic(currentMusic);
function loadMusic(currentMusic) {
  audio.src = musics[currentMusic].musicSrc;
  image.src = musics[currentMusic].musicImageSrc;
  title.innerHTML = musics[currentMusic].musicTitle;
  artist.innerHTML = musics[currentMusic].musicAuthor;
  playerContainer.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)),url(${musics[currentMusic].musicImageSrc})`;
}

// Load Music*********************************X*

// Event listeners****************************

// shuffleBtn
shuffle.addEventListener("click", () => {
  console.log("shuffle");
});

// prevBtn
prev.addEventListener("click", () => {
  console.log("prev");
  currentMusic--;
  if (currentMusic < 0) {
    currentMusic = musics.length - 1;
  }
  loadMusic(currentMusic);
  audio.play();
  if (playBtn.classList.contains("fa-play")) {
    // audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  }
});

// playBtn
play.addEventListener("click", () => {
  console.log("play");
  if (playBtn.classList.contains("fa-play")) {
    audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  } else if (playBtn.classList.contains("fa-pause")) {
    audio.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  }
});

// nextBtn
next.addEventListener("click", () => {
  console.log("next");
  // Increasing the Number of the Initialize Music to next the Music.....
  nextFunction();
});

// nextFunction
function nextFunction() {
  currentMusic++;
  if (currentMusic > musics.length - 1) {
    currentMusic = 0;
  }
  loadMusic(currentMusic);
  audio.play();
  if (playBtn.classList.contains("fa-play")) {
    // audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  }
}

// next misic when music Ended
audio.addEventListener("ended", () => {
  nextFunction();
});

// repeatBtn
repeat.addEventListener("click", () => {
  console.log("repeat");
});

// moreMusicBtn
moreMusic.addEventListener("click", () => {
  console.log("moreMusic");
});

// favoriteBtn
favorite.addEventListener("click", () => {
  console.log("favorite");
});

// favoriteBtn
volume.addEventListener("mousemove", () => {
  console.log(volume.value);
  audio.volume = volume.value / 100;
});

// audio time update
audio.addEventListener("timeupdate", () => {
  updateSlider();
});

function updateSlider() {
  const sliderUpdate = audio.currentTime * (100 / audio.duration);
  track.value = sliderUpdate;
  track.style.background = `linear-gradient(90deg, purple ${track.value}%, white ${track.value}%)`;

  // DURATION
  const minDuration = Math.floor(audio.duration / 60);
  const secDuration = Math.floor(audio.duration - minDuration * 60);

  // CURRENT TIME
  const currentTimeMin = Math.floor(audio.currentTime / 60);
  const currentTimeSec = Math.floor(audio.currentTime - currentTimeMin * 60);
  console.log(audio.currentTime);
  console.log(audio.currentTime - currentTimeMin * 60);
  currentTime.innerHTML = currentTimeMin + ":" + currentTimeSec;
  duration.innerHTML = minDuration + ":" + secDuration;
}

// Event listeners**************************X**

// *X******** Music Analizer ***********X*
