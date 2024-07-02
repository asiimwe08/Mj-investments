// Function to toggle shuffle mode
function toggleShuffle() {
    shuffleMode = !shuffleMode;
    updatePlaylist();
  }
  
  // Function to toggle repeat mode
  function toggleRepeat() {
    repeatMode = !repeatMode;
  }
  
  // Function to update the playlist
  function updatePlaylist() {
    const playlistItems = playlistArray.map((track) => {
      const playlistItem = document.createElement('li');
      playlistItem.textContent = `${track.title} - ${track.artist}`;
      playlistItem.dataset.src = track.src;
      return playlistItem;
    });
    playlist.innerHTML = '';
    playlist.append(...playlistItems);
  }
  
  // Function to select a track from the playlist
  function selectTrack(event) {
    const selectedTrack = event.target.dataset.src;
    audioElement.src = selectedTrack;
    updateTrackDisplay();
    playTrack();
  }
// Function to toggle shuffle mode
function toggleShuffle() {
    shuffleMode = !shuffleMode;
    updatePlaylist();
  }
  
  // Function to toggle repeat mode
  function toggleRepeat() {
    repeatMode = !repeatMode;
  }
  
  // Function to update the playlist
  function updatePlaylist() {
    const playlistItems = playlistArray.map((track) => {
      const playlistItem = document.createElement('li');
      playlistItem.textContent = `${track.title} - ${track.artist}`;
      playlistItem.dataset.src = track.src;
      return playlistItem;
    });
    playlist.innerHTML = '';
    playlist.append(...playlistItems);
  }
  
  // Function to select a track from the playlist
  function selectTrack(event) {
    const selectedTrack = event.target.dataset.src;
    audioElement.src = selectedTrack;
    updateTrackDisplay();
    playTrack();
  }
    