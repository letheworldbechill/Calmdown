const circle = document.getElementById('circle');
const instructions = document.getElementById('instructions');
const countdown = document.getElementById('countdown');
const inhaleTimeInput = document.getElementById('inhaleTime');
const holdTimeInput = document.getElementById('holdTime');
const exhaleTimeInput = document.getElementById('exhaleTime');
const startButton = document.getElementById('startButton');

let step = 0; // Phasen: 0 = Einatmen, 1 = Halten, 2 = Ausatmen

function startCountdown(duration) {
  let timeLeft = duration;
  countdown.textContent = timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function animateBreathingCustom(inhale, hold, exhale) {
  function breathingStep() {
    if (step === 0) {
      instructions.textContent = `Atme ein... (${inhale} Sekunden)`;
      circle.style.transform = 'scale(1.5)';
      circle.style.backgroundColor = '#32CD32'; // Frühlingsgrasgrün
      startCountdown(inhale);
      step = 1;
      setTimeout(breathingStep, inhale * 1000);
    } else if (step === 1) {
      instructions.textContent = `Halte den Atem an... (${hold} Sekunden)`;
      circle.style.transform = 'scale(1.5)';
      circle.style.backgroundColor = '#FFD700'; // Sommergelb
      startCountdown(hold);
      step = 2;
      setTimeout(breathingStep, hold * 1000);
    } else if (step === 2) {
      instructions.textContent = `Atme aus... (${exhale} Sekunden)`;
      circle.style.transform = 'scale(1)';
      circle.style.backgroundColor = '#FF8C00'; // Herbstorange
      startCountdown(exhale);
      step = 0;
      setTimeout(breathingStep, exhale * 1000);
    }
  }
  breathingStep();
}

startButton.addEventListener('click', () => {
  const inhaleTime = parseInt(inhaleTimeInput.value, 10) || 4;
  const holdTime = parseInt(holdTimeInput.value, 10) || 6;
  const exhaleTime = parseInt(exhaleTimeInput.value, 10) || 8;

  instructions.textContent = 'Bereit? Los geht’s!';
  animateBreathingCustom(inhaleTime, holdTime, exhaleTime);
});
