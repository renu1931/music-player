
const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.getElementById("img");
const tittle = document.getElementById("tittle");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


let isplaying = false;
//for play function
const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
//for pause function
const pausemusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click", () => {

    if (isplaying) {
        pausemusic();
    } else {
        playmusic();
    }
});

const songs = [
    {
        name: "renu_1",

        tittle: "muja dushman ka bacho ko",
        artist: "azaan",

    },
    {
        name: "renu_2",

        tittle: "kabootar",
        artist: "renuka panwar",
    },
    {
        name: "renu_3",

        tittle: "kala chashmah",
        artist: "badshah",
    },
    {
        name: "renu_4",

        tittle: "badmash",
        artist: "kd",
    },
    {
        name: "renu_5",

        tittle: "na na na rhne de",
        artist: "kd",
    }
];

//change the loading data 
const loadsong = (songs) => {
    tittle.textContent = songs.tittle;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
    
};
songIndex = 0;

const nextsong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadsong(songs[songIndex]);
    playmusic();
};

const prevsong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadsong(songs[songIndex]);
    playmusic();
};


next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);



