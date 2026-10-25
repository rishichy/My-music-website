const search = document.getElementById("search");

const songs = document.querySelectorAll(".song-card");

search.addEventListener("input", function() {

    const searchText = search.value.toLowerCase();

    songs.forEach(function(song) {

        const songName =
            song.innerText.toLowerCase();

        if (songName.includes(searchText)) {

            song.style.display = "flex";

        } else {

            song.style.display = "none";

        }

    });

});
const audio = new Audio("music/song1(3).mp3");

function playSong() {

    audio.play();

}
function pauseSong() {

    audio.pause();

}
const playlist = [

    {
        name: "Song One",
        artist: "Artist One",
        file: "music/song1.mp3"
    },

    {
        name: "Song Two",
        artist: "Artist Two",
        file: "music/song2.mp3"
    },

    {
        name: "Song Three",
        artist: "Artist Three",
        file: "music/song3.mp3"
    }

];

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        if (button.innerText === "♡") {

            button.innerText = "❤️";

        } else {

            button.innerText = "♡";

        }

    });

});

localStorage.setItem(
    "username",
    "Rishi"
);

const name =
    localStorage.getItem("username");

console.log(name);

let recentlyPlayed = [];

recentlyPlayed.push("Song Name");

localStorage.setItem(
    "recentSongs",
    JSON.stringify(recentlyPlayed)
);

let recent =
    JSON.parse(
        localStorage.getItem("recentSongs")
    ) || [];

 audio.addEventListener("timeupdate", function() {

    const progress =
        (audio.currentTime / audio.duration) * 100;

    document.getElementById("progress").value =
        progress;

});   
const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

});