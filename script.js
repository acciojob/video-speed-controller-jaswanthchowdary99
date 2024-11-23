// Get all the necessary elements
const video = document.querySelector('video');
const playerButton = document.querySelector('.player__button');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeControl = document.querySelector('.volume');
const speedControl = document.querySelector('.playbackSpeed');
const speedBar = document.querySelector('.speed-bar');

// Toggle play and pause functionality
function togglePlay() {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚'; // Change to pause icon
  } else {
    video.pause();
    playerButton.textContent = '►'; // Change to play icon
  }
}

// Update the progress bar based on video current time
function updateProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
  progressBar.value = progress;
}

// Skip backward 10 seconds
function rewind() {
  video.currentTime -= 10;
}

// Skip forward 25 seconds
function skip() {
  video.currentTime += 25;
}

// Update the volume based on the volume control
function updateVolume() {
  video.volume = volumeControl.value / 100;
}

// Update the playback speed based on the playbackSpeed control
function updateSpeed() {
  video.playbackRate = speedControl.value;
  speedBar.textContent = `${speedControl.value}×`; // Update speed display
}

// Update the video progress when the user clicks on the progress bar
function setProgress(e) {
  const newTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = newTime;
}

// Event listeners
playerButton.addEventListener('click', togglePlay);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);
volumeControl.addEventListener('input', updateVolume);
speedControl.addEventListener('input', updateSpeed);
progressBar.addEventListener('click', setProgress);

// Update progress bar while the video is playing
video.addEventListener('timeupdate', updateProgress);
