const circle = document.getElementById('circle');
const instructions = document.getElementById('instructions');
const countdown = document.getElementById('countdown');
const settingsButton = document.getElementById('settingsButton');
const settingsPage = document.getElementById('settingsPage');
const startButton = document.getElementById('startButton');
const inhaleTimeInput = document.getElementById('inhaleTime');
const holdTimeInput = document.getElementById('holdTime');
const exhaleTimeInput = document.getElementById('exhaleTime');

let step = 0; // Phasen: 0 = Einatmen, 1 = Halten, 2 = Ausatmen

// Countdown-Anzeige
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

// Atemübungs-Animation
function animateBreathingCustom(inhale, hold, exhale) {
  function breathingStep() {
    if (step === 0) {
      instructions.textContent = `Atme ein... (${inhale} Sekunden)`;
      circle.style.transition = `transform ${inhale}s ease-in-out, background-color ${inhale}s ease-in-out`;
      circle.style.transform = 'scale(1.5)';
      circle.style.backgroundColor = '#32CD32'; // Frühlingsgrasgrün
      startCountdown(inhale);
      step = 1;
      setTimeout(breathingStep, inhale * 1000);
    } else if (step === 1) {
      instructions.textContent = `Halte den Atem an... (${hold} Sekunden)`;
      circle.style.transition = `background-color ${hold}s ease-in-out`;
      circle.style.backgroundColor = '#FFD700'; // Sommergelb
      startCountdown(hold);
      step = 2;
      setTimeout(breathingStep, hold * 1000);
    } else if (step === 2) {
      instructions.textContent = `Atme aus... (${exhale} Sekunden)`;
      circle.style.transition = `transform ${exhale}s ease-in-out, background-color ${exhale}s ease-in-out`;
      circle.style.transform = 'scale(1)';
      circle.style.backgroundColor = '#FF8C00'; // Herbstorange
      startCountdown(exhale);
      step = 0;
      setTimeout(breathingStep, exhale * 1000);
    }
  }
  breathingStep();
}

// Einstellungen-Seite anzeigen
settingsButton.addEventListener('click', () => {
  settingsPage.style.display = 'flex';
});

// Übung starten und Einstellungen übernehmen
startButton.addEventListener('click', () => {
  const inhaleTime = parseInt(inhaleTimeInput.value, 10) || 4;
  const holdTime = parseInt(holdTimeInput.value, 10) || 6;
  const exhaleTime = parseInt(exhaleTimeInput.value, 10) || 8;

  settingsPage.style.display = 'none'; // Einstellungen schließen
  instructions.textContent = 'Bereit? Los geht’s!';
  animateBreathingCustom(inhaleTime, holdTime, exhaleTime);
});
