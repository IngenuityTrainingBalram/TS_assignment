

// create an array of string which has the song names
let songNamesInFolder: string[] = ["Hall of Fame.mp3", "Khairiyat.mp3", "banjara.mp3", "bint-e-dil.mp3", "ultra instinct.mp3"];
// define variables 
let songName: any = document.getElementById("songName");
let songSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("songSlider");
// for duration of songs
let currentDuration: any = document.getElementById("currentDuration");
let totalDuration: any = document.getElementById("totalDuration");
// for volume adjustment
let volumeSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("volumeSlider");
let nextSongName: any = document.getElementById("nextSongName")

// song object
let song = new Audio();
// starting index of the song as 0.
let currentSong = 0;

// the song list should be loaded 
window.onload = loadAllSongs;

function loadAllSongs(): any {
    // song.source = "directory where songs exits" + songArrayName[indexOfSong]
    song.src = "songs/" + songNamesInFolder[currentSong];
    songName.textContent = songNamesInFolder[currentSong];
    nextSongName.innerHTML = "<b>Next Song: </b>" + songNamesInFolder[currentSong + 1];
    song.volume = Number(volumeSlider.value);
    song.play();
    setTimeout(showDuration, 1000)

}

// since the slider of the song playing must be updated each second, hence create a function.
setInterval(updateSliderOfSong, 1000);

function updateSliderOfSong() {
    var currTime = Math.round(song.currentTime);
    songSlider.value = String(currTime);
    currentDuration.textContent = convertTime(currTime);

}

// time to get above songSlider
function convertTime(secs: number): string {
    var min: string = String(Math.floor(secs / 60));
    var sec: string = String(secs % 60);
    min = (Number(min) < 10) ? "0" + (min) : min;
    sec = (Number(sec) < 10) ? "0" + sec : sec;
    return (min + ":" + sec);
}

function showDuration(): void {
    var dura = String(Math.floor(song.duration));
    songSlider.setAttribute("max", dura);
    totalDuration.textContent = convertTime(Number(dura));
}



// play pause song function.
let playPauseButton: HTMLInputElement = <HTMLInputElement>document.getElementById("playPause");
let img: HTMLInputElement = <HTMLInputElement>document.getElementById("playPause");
playPauseButton.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        img.src = "images/pause.png";
    } else {
        song.pause();
        img.src = "images/playpause.png";
    }
});

// onclick="next();"
let nextPlay: HTMLInputElement = <HTMLInputElement>document.getElementById("nextPlay");
nextPlay.addEventListener("click", (e) => {
    if (currentSong < songNamesInFolder.length - 1) {
        currentSong = currentSong + 1 % songNamesInFolder.length;
        loadAllSongs();
    } else {
        nextSongName.innerHTML = "<b>Last Song Playing..... </b>";
        console.log("this was last song")
    }
});
// on clicking prev
let prevPlay: HTMLInputElement = <HTMLInputElement>document.getElementById("prevPlay");
prevPlay.addEventListener("click", (e) => {
    currentSong = currentSong - 1;
    if (currentSong < 0) {
        // currentSong = songNamesInFolder.length - 1 =>to repeat in reverse order.

        // start the first song, 0th index song again and again if you press prev button onthe first song since there is no song before it.
        currentSong = 0;
        console.log("First Song Playing..... No Song is available before this.")
    } else {
        currentSong = currentSong;
    }
    loadAllSongs();

})



// below function is used to find the actual song timing when you click on seekbar.
songSlider.addEventListener("click", (e) => {
    song.currentTime = Number(songSlider.value);
    currentDuration.textContent = convertTime(song.currentTime);
});




let volumeManage: HTMLInputElement = <HTMLInputElement>document.getElementById("volumeSlider");
volumeManage.addEventListener("click", () => {
    song.volume = Number(volumeSlider.value);
    // song.value is by default a number hence we will have to typecase the volumeSlider.value into number 
    // since, any HTMLElement gives the value in string format.
});


let muteUnmutebutton: HTMLInputElement = <HTMLInputElement>document.getElementById("muteUnmute");
muteUnmutebutton.addEventListener("click", (e) => {
    if (volumeSlider.value != String(0)) {


        volumeSlider.value = String(0)
        song.volume = Number(volumeSlider.value);
    } else {
        volumeSlider.value = String(0.5)
        song.volume = Number(volumeSlider.value);
    }
});

