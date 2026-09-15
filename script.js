const frame = document.getElementById('game-frame');
const fullscreenButton = document.getElementById('fullscreen-button');
const status = document.getElementById('game-status');

if (document.fullscreenEnabled && frame.requestFullscreen) {
  fullscreenButton.hidden = false;
}

fullscreenButton.addEventListener('click', async () => {
  status.textContent = '';
  try {
    await frame.requestFullscreen();
  } catch {
    status.textContent = 'Full screen is unavailable. You can open the game in a new tab instead.';
  }
});
