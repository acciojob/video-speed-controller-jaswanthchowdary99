const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const progressFilled = document.querySelector('.progress__filled');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind-10s');
const forwardButton = document.getElementById('forward-25s');

// Toggle Play/Pause
playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = '❚ ❚'; // Pause symbol
  } else {
    video.pause();
    playPauseButton.textContent = '►'; // Play symbol
  }
});

// Update progress bar
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
});

// Volume control
volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value;
});

// Playback speed control
playbackSpeedControl.addEventListener('input', () => {
  video.playbackRate = playbackSpeedControl.value;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
  video.currentTime = Math.max(0, video.currentTime - 10);
});

// Forward 25 seconds
forwardButton.addEventListener('click', () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
});
