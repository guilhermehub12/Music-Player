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


// Eventos
document.querySelector(".play").addEventListener("click", playMusic);

document.querySelector(".pause").addEventListener("click", pauseMusic);



//Evento + Função
document.querySelector(".prev").addEventListener("click", () => {
  indexMusic--;
  if (indexMusic < 0) {
    indexMusic = musics.length;
  }
});

document.querySelector(".next").addEventListener("click", () => {
  indexMusic++;
  if (indexMusic > musics.length) {
    indexMusic = 0;
  }
});