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
  
  window.onload = () => {
      const promo = document.getElementById('promo-popup');
      promo.style.display = 'block';
    }