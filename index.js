let musics = [
  {
    title: "Lofi Beat",
    artist: "Lofi Musics",
    src: "files/lofi-beat.mp3",
    img: "files/bg.webp",
  },
  {
    title: "Lofi Hip Hop",
    artist: "Lofi Musics",
    src: "files/lofi-hip-hop.mp3",
    img: "files/japan-bg.webp",
  },
  {
    title: "Lofi Study",
    artist: "Lofi Musics",
    src: "files/lofi-study.mp3",
    img: "files/code-bg.webp",
  },
  {
    title: "Sunset Vibes",
    artist: "Lofi Musics",
    src: "files/sunset-vibes.mp3",
    img: "files/cyber-bg.webp",
  },
];

let indexMusic = 0;

let music = document.querySelector("audio");
let durationMusic = document.querySelector(".total-time");
let coverImage = document.querySelector(".cover");
let musicName = document.querySelector(".info h1");
let artist = document.querySelector(".info p");

renderMusic(indexMusic);

// Eventos
document.querySelector(".play").addEventListener("click", playMusic);

document.querySelector(".pause").addEventListener("click", pauseMusic);

music.addEventListener("timeupdate", updateProgressBar);


//Evento + Função
document.querySelector(".prev").addEventListener("click", () => {
  indexMusic--;
  if (indexMusic < 0) {
    indexMusic = musics.length;
  }
  renderMusic(indexMusic);
});

document.querySelector(".next").addEventListener("click", () => {
  indexMusic++;
  if (indexMusic > musics.length) {
    indexMusic = 0;
  }
  renderMusic(indexMusic);
  music.play();
});

// Funções
function renderMusic(index) {
  music.setAttribute("src", musics[index].src);
  music.addEventListener("loadeddata", () => {
    musicName.textContent = musics[index].title;
    artist.textContent = musics[index].artist;
    coverImage.src = musics[index].img;
    durationMusic.textContent = secondsToMinutes(Math.floor(music.duration));
  });
}

function playMusic() {
  music.play();
  document.querySelector(".pause").style.display = "block";
  document.querySelector(".play").style.display = "none";
}

function pauseMusic() {
  music.pause();
  document.querySelector(".pause").style.display = "none";
  document.querySelector(".play").style.display = "block";
}

function updateProgressBar() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((music.currentTime / music.duration) * 100) + "%";

  let tempoDecorrido = document.querySelector(".current-time");

  tempoDecorrido.textContent = secondsToMinutes(
    Math.floor(music.currentTime)
  );
}

