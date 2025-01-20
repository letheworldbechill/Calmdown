const circle = document.getElementById('circle');
const instructions = document.getElementById('instructions');

let step = 0;

function animateBreathing() {
  if (step === 0) {
    instructions.textContent = 'Atme ein... (4 Sekunden)';
    circle.style.transform = 'scale(1.5)';
    circle.style.backgroundColor = '#32CD32'; // Frühlingsgrasgrün
    step = 1;
    setTimeout(animateBreathing, 4000);
  } else if (step === 1) {
    instructions.textContent = 'Halte den Atem an... (6 Sekunden)';
    circle.style.transform = 'scale(1.5)';
    circle.style.backgroundColor = '#FFD700'; // Sommergelb
    step = 2;
    setTimeout(animateBreathing, 6000);
  } else if (step === 2) {
    instructions.textContent = 'Atme aus... (8 Sekunden)';
    circle.style.transform = 'scale(1)';
    circle.style.backgroundColor = '#FF8C00'; // Herbstorange
    step = 0;
    setTimeout(animateBreathing, 8000);
  }
}

// Start the breathing animation
animateBreathing();
