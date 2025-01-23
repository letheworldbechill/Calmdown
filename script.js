const circle = document.getElementById('circle');
const instructions = document.getElementById('instructions');
const countdown = document.getElementById('countdown');
const settingsButton = document.getElementById('settingsButton');
const settingsPage = document.getElementById('settingsPage');
const startButton = document.getElementById('startButton');
const inhaleTimeInput = document.getElementById('inhaleTime');
const holdTimeInput = document.getElementById('holdTime');
const exhaleTimeInput = document.getElementById('exhaleTime');

let step = 0; // 0 = Einatmen, 1 = Halten, 2 = Ausatmen

const colors = {
  inhale: '#32CD32', // Grün
  hold: '#FFD700', // Gelb
  exhale: '#FF8C00', // Orange
};

// Countdown und Kreisfarbe ändern
function startCountdown(duration, phase) {
  let timeLeft = duration;
  countdown.textContent = timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      if (phase === 'inhale') {
        circle.style.backgroundColor = colors.hold;
        startCountdown(parseInt(holdTimeInput.value), 'hold');
      } else if (phase === 'hold') {
        circle.style.backgroundColor = colors.exhale;
        startCountdown(parseInt(exhaleTimeInput.value), 'exhale');
      } else if (phase === 'exhale') {
        circle.style.backgroundColor = colors.inhale;
        startCountdown(parseInt(inhaleTimeInput.value), 'inhale');
      }
    }
  }, 1000);
}

// Einstellungen-Seite anzeigen
settingsButton.addEventListener('click', () => {
  settingsPage.style.display = 'flex';
});

// Übung starten
startButton.addEventListener('click', () => {
  settingsPage.style.display = 'none';
  instructions.textContent = 'Los geht’s!';
  circle.style.backgroundColor = colors.inhale;
  startCountdown(parseInt(inhaleTimeInput.value), 'inhale');
});
