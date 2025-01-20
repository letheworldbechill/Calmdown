/* Allgemeines Styling */
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #87CEEB; /* Himmelblau */
  font-family: Arial, sans-serif;
  flex-direction: column;
}

.container {
  text-align: center;
}

.title {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

.settings {
  margin-bottom: 20px;
  font-size: 1em;
}

.settings label {
  margin-right: 10px;
}

.settings input {
  width: 50px;
}

.settings button {
  padding: 5px 10px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
}

.circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.circle {
  width: 150px;
  height: 150px;
  background-color: #32CD32; /* Grasgrün */
  border-radius: 50%;
  transition: all 1s ease-in-out; /* Weiche Animation */
}

.instructions {
  margin-top: 10px;
  font-size: 1.5em;
  color: #333;
}

.countdown {
  margin-top: 10px;
  font-size: 2em;
  color: #333;
}

/* Responsive Design */
@media (max-width: 768px) {
  .circle {
    width: 120px;
    height: 120px;
  }

  .title {
    font-size: 1.5em;
  }

  .instructions {
    font-size: 1.2em;
  }
}

@media (max-width: 480px) {
  .circle {
    width: 100px;
    height: 100px;
  }

  .title {
    font-size: 1.2em;
  }

  .instructions {
    font-size: 1em;
  }
      }
