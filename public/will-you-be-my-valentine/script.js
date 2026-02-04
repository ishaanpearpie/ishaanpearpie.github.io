const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");

noBtn.addEventListener("mouseover", (e) => {
  const btnRect = noBtn.getBoundingClientRect();
  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;
  
  // Calculate direction away from cursor
  const deltaX = btnCenterX - e.clientX;
  const deltaY = btnCenterY - e.clientY;
  
  // Normalize and move button far away from cursor
  const distance = 200;
  const angle = Math.atan2(deltaY, deltaX);
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
  createConfetti();
  startCountdown();
});

// Confetti animation
function createConfetti() {
  const colors = ['#ff4d6d', '#ff6b8a', '#ffc3a0', '#ffafbd', '#ff1493', '#ff69b4'];
  const confettiCount = 100;
  
  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 0.5 + 's';
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 3000);
    }, i * 30);
  }
}

// Countdown to Valentine's Day
function startCountdown() {
  const countdownText = document.getElementById('countdownText');
  
  function updateCountdown() {
    const now = new Date();
    const valentines = new Date(now.getFullYear(), 1, 14); // Feb 14
    
    // If Valentine's has passed this year, count to next year
    if (now > valentines) {
      valentines.setFullYear(valentines.getFullYear() + 1);
    }
    
    const diff = valentines - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      countdownText.innerHTML = `Happy Valentine's Day! <i class="fas fa-heart" style="color: #fff;"></i>`;
    } else {
      countdownText.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until Valentine's Day <i class="fas fa-heart" style="color: #fff;"></i>`;
    }
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}
