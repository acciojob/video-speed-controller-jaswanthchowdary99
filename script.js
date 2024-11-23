const video = document.querySelector('video');
const playerButton = document.querySelector('.player__button');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeControl = document.querySelector('.volume');
const speedControl = document.querySelector('.playbackSpeed');
const speedBar = document.querySelector('.speed-bar');

function togglePlay() {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚'; 
  } else {
    video.pause();
    playerButton.textContent = '►'; 
  }
}

function updateProgress() {
  const progress = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${progress}%`;
  progressBar.value = progress;
}

function rewind() {
  video.currentTime -= 10;
}

function skip() {
  video.currentTime += 25;
}

function updateVolume() {
  video.volume = volumeControl.value / 100;
}

function updateSpeed() {
  video.playbackRate = speedControl.value;
  speedBar.textContent = `${speedControl.value}×`;
}

function setProgress(e) {
  const newTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = newTime;
}

playerButton.addEventListener('click', togglePlay);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);
volumeControl.addEventListener('input', updateVolume);
speedControl.addEventListener('input', updateSpeed);
progressBar.addEventListener('click', setProgress);

video.addEventListener('timeupdate', updateProgress);
