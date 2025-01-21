const circle = document.getElementById('circle');
const instructions = document.getElementById('instructions');
const countdown = document.getElementById('countdown');
const settingsButton = document.getElementById('settingsButton');
const settingsPage = document.getElementById('settingsPage');
const startButton = document.getElementById('startButton');
const inhaleTimeInput = document.getElementById('inhaleTime');
const holdTimeInput = document.getElementById('holdTime');
const exhaleTimeInput = document.getElementById('exhaleTime');
const motivation = document.getElementById('motivation');
const darkModeToggle = document.getElementById('darkModeToggle');
const progressCircle = document.getElementById('progressCircle');

// Audio-Elemente
const inhaleSound = document.getElementById('inhaleSound');
const holdSound = document.getElementById('holdSound');
const exhaleSound = document.getElementById('exhaleSound');

let step = 0;

// Motivierende Sätze
const motivationalMessages = [
  "Du machst das großartig!",
  "Fühle, wie dein Körper zur Ruhe kommt.",
  "Atme tief ein und lasse los.",
  "Eine Pause ist wichtig für dich."
];

// Countdown-Anzeige
function startCountdown(duration) {
  let timeLeft = duration;
  countdown.textContent = timeLeft;

  const timer = setInterval(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

    const offset = 314 - (timeLeft / duration) * 314;
    progressCircle.style.strokeDashoffset = offset;

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
      circle.style.transform = 'scale(1.0)';
      circle.style.backgroundColor = '#32CD32';
      startCountdown(inhale);

      // Audio für Einatmen
      // inhaleSound.play();

      step = 1;
      setTimeout(breathingStep, inhale * 1000);
    } else if (step === 1) {
      instructions.textContent = `Halte den Atem an... (${hold} Sekunden)`;
      circle.style.transition = `background-color ${hold}s ease-in-out`;
      circle.style.backgroundColor = '#FFD700';
      startCountdown(hold);

      // Audio für Halten
      // holdSound.play();

      step = 2;
      setTimeout(breathingStep, hold * 1000);
    } else if (step === 2) {
      instructions.textContent = `Atme aus... (${exhale} Sekunden)`;
      circle.style.transition = `transform ${exhale}s ease-in-out, background-color ${exhale}s ease-in-out`;
      circle.style.transform = 'scale(0.5)';
      circle.style.backgroundColor = '#FF8C00';
      startCountdown(exhale);

      // Audio für Ausatmen
      // exhaleSound.play();

      motivation.textContent =
        motivationalMessages[
          Math.floor(Math.random() * motivationalMessages.length)
        ];

      step = 0;
      setTimeout(breathingStep, exhale * 1000);
    }
  }
  breathingStep();
}

// Dunkelmodus umschalten
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Einstellungen-Seite anzeigen
settingsButton.addEventListener('click', () => {
  settingsPage.style.display = 'flex';
});

// Übung starten
startButton.addEventListener('click', () => {
  const inhaleTime = parseInt(inhaleTimeInput.value, 10) || 4;
  const holdTime = parseInt(holdTimeInput.value, 10) || 6;
  const exhaleTime = parseInt(exhaleTimeInput.value, 10) || 8;

  settingsPage.style.display = 'none';
  instructions.textContent = 'Bereit? Los geht’s!';
  motivation.textContent = '';
  animateBreathingCustom(inhaleTime, holdTime, exhaleTime);
});
