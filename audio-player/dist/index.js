/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\r\n// create an array of string which has the song names\r\nvar songNamesInFolder = [\"Hall of Fame.mp3\", \"Khairiyat.mp3\", \"banjara.mp3\", \"bint-e-dil.mp3\", \"ultra instinct.mp3\"];\r\n// define variables \r\nvar songName = document.getElementById(\"songName\");\r\nvar songSlider = document.getElementById(\"songSlider\");\r\n// for duration of songs\r\nvar currentDuration = document.getElementById(\"currentDuration\");\r\nvar totalDuration = document.getElementById(\"totalDuration\");\r\n// for volume adjustment\r\nvar volumeSlider = document.getElementById(\"volumeSlider\");\r\nvar nextSongName = document.getElementById(\"nextSongName\");\r\n// song object\r\nvar song = new Audio();\r\n// starting index of the song as 0.\r\nvar currentSong = 0;\r\n// the song list should be loaded \r\nwindow.onload = loadAllSongs;\r\nfunction loadAllSongs() {\r\n    // song.source = \"directory where songs exits\" + songArrayName[indexOfSong]\r\n    song.src = \"songs/\" + songNamesInFolder[currentSong];\r\n    songName.textContent = songNamesInFolder[currentSong];\r\n    nextSongName.innerHTML = \"<b>Next Song: </b>\" + songNamesInFolder[currentSong + 1];\r\n    song.volume = Number(volumeSlider.value);\r\n    song.play();\r\n    setTimeout(showDuration, 1000);\r\n}\r\n// since the slider of the song playing must be updated each second, hence create a function.\r\nsetInterval(updateSliderOfSong, 1000);\r\nfunction updateSliderOfSong() {\r\n    var currTime = Math.round(song.currentTime);\r\n    songSlider.value = String(currTime);\r\n    currentDuration.textContent = convertTime(currTime);\r\n}\r\n// time to get above songSlider\r\nfunction convertTime(secs) {\r\n    var min = String(Math.floor(secs / 60));\r\n    var sec = String(secs % 60);\r\n    min = (Number(min) < 10) ? \"0\" + (min) : min;\r\n    sec = (Number(sec) < 10) ? \"0\" + sec : sec;\r\n    return (min + \":\" + sec);\r\n}\r\nfunction showDuration() {\r\n    var dura = String(Math.floor(song.duration));\r\n    songSlider.setAttribute(\"max\", dura);\r\n    totalDuration.textContent = convertTime(Number(dura));\r\n}\r\n// play pause song function.\r\nvar playPauseButton = document.getElementById(\"playPause\");\r\nvar img = document.getElementById(\"playPause\");\r\nplayPauseButton.addEventListener(\"click\", function () {\r\n    if (song.paused) {\r\n        song.play();\r\n        img.src = \"images/pause.png\";\r\n    }\r\n    else {\r\n        song.pause();\r\n        img.src = \"images/playpause.png\";\r\n    }\r\n});\r\n// onclick=\"next();\"\r\nvar nextPlay = document.getElementById(\"nextPlay\");\r\nnextPlay.addEventListener(\"click\", function (e) {\r\n    if (currentSong < songNamesInFolder.length - 1) {\r\n        currentSong = currentSong + 1 % songNamesInFolder.length;\r\n        loadAllSongs();\r\n    }\r\n    else {\r\n        nextSongName.innerHTML = \"<b>Last Song Playing..... </b>\";\r\n        console.log(\"this was last song\");\r\n    }\r\n});\r\n// on clicking prev\r\nvar prevPlay = document.getElementById(\"prevPlay\");\r\nprevPlay.addEventListener(\"click\", function (e) {\r\n    currentSong = currentSong - 1;\r\n    if (currentSong < 0) {\r\n        // currentSong = songNamesInFolder.length - 1 =>to repeat in reverse order.\r\n        // start the first song, 0th index song again and again if you press prev button onthe first song since there is no song before it.\r\n        currentSong = 0;\r\n        console.log(\"First Song Playing..... No Song is available before this.\");\r\n    }\r\n    else {\r\n        currentSong = currentSong;\r\n    }\r\n    loadAllSongs();\r\n});\r\n// below function is used to find the actual song timing when you click on seekbar.\r\nsongSlider.addEventListener(\"click\", function (e) {\r\n    song.currentTime = Number(songSlider.value);\r\n    currentDuration.textContent = convertTime(song.currentTime);\r\n});\r\nvar volumeManage = document.getElementById(\"volumeSlider\");\r\nvolumeManage.addEventListener(\"click\", function () {\r\n    song.volume = Number(volumeSlider.value);\r\n    // song.value is by default a number hence we will have to typecase the volumeSlider.value into number \r\n    // since, any HTMLElement gives the value in string format.\r\n});\r\nvar muteUnmutebutton = document.getElementById(\"muteUnmute\");\r\nmuteUnmutebutton.addEventListener(\"click\", function (e) {\r\n    if (volumeSlider.value != String(0)) {\r\n        volumeSlider.value = String(0);\r\n        song.volume = Number(volumeSlider.value);\r\n    }\r\n    else {\r\n        volumeSlider.value = String(0.5);\r\n        song.volume = Number(volumeSlider.value);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://webpackp/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;