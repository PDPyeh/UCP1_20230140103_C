document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bg-music');
    const muteBtn = document.getElementById('mute-btn');
  
    let isMuted = false;
  
    muteBtn.addEventListener('click', function () {
      isMuted = !isMuted;
      audio.muted = isMuted;
      muteBtn.textContent = isMuted ? '🔇' : '🔈';
    });
  });
  