// script.js
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.getElementById('progress-bar');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
const trackTitleElem = document.getElementById('track-title');
const trackArtistElem = document.getElementById('track-artist');
const albumArtElem = document.getElementById('album-art');
const playlistElem = document.getElementById('playlist');

const tracks = [
    {
        title: "Track 1",
        artist: "Artist 1",
        src: "track1.mp3",
        albumArt: "album1.jpg"
    },
    {
        title: "Track 2",
        artist: "Artist 2",
        src: "track2.mp3",
        albumArt: "album2.jpg"
    },
    {
        title: "Track 3",
        artist: "Artist 3",
        src: "track3.mp3",
        albumArt: "album3.jpg"
    }
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audioPlayer.src = track.src;
    trackTitleElem.textContent = track.title;
    trackArtistElem.textContent = track.artist;
    albumArtElem.src = track.albumArt;
    audioPlayer.load();
}

function playTrack() {
    audioPlayer.play();
}

function pauseTrack() {
    audioPlayer.pause();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    playTrack();
}

function updateProgress() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    currentTimeElem.textContent = formatTime(audioPlayer.currentTime);
    durationElem.textContent = formatTime(audioPlayer.duration);
}

function seekTrack(event) {
    const seekTime = (event.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateVolume() {
    audioPlayer.volume = volumeSlider.value;
}

function populatePlaylist() {
    playlistElem.innerHTML = tracks.map((track, index) => `
        <li onclick="selectTrack(${index})">${track.title} - ${track.artist}</li>
    `).join('');
}

function selectTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
    playTrack();
}

playButton.addEventListener('click', playTrack);
pauseButton.addEventListener('click', pauseTrack);
prevButton.addEventListener('click', prevTrack);
nextButton
