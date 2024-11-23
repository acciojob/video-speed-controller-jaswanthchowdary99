const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const volumeSlider = document.querySelector('input[name="volume"]');
const playbackRateSlider = document.querySelector('input[name="playbackRate"]');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
}

function updateVolume() {
  video.volume = volumeSlider.value;
}

function updatePlaybackRate() {
  video.playbackRate = playbackRateSlider.value;
}

function rewind() {
  video.currentTime -= 10;
}

function forward() {
  video.currentTime += 25;
}

function updateProgress() {
  const progress = video.currentTime / video.duration * 100;
  progressFilled.style.flexBasis = `${progress}%`;
}

toggle.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', updateVolume);
playbackRateSlider.addEventListener('input', updatePlaybackRate);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);
video.addEventListener('timeupdate', updateProgress);