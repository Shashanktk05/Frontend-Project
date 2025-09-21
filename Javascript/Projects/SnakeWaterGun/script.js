function input(userChoice) {
  let choices = ['s', 'w', 'g'];  
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let resultText = "";

  if (userChoice === computerChoice) {
    resultText = "It's a Draw! 🤝";
  } else if (
    (userChoice === 's' && computerChoice === 'w') || 
    (userChoice === 'w' && computerChoice === 'g') || 
    (userChoice === 'g' && computerChoice === 's')    
  ) {
    resultText = "You Win! 🎉";
  } else {
    resultText = "You Lose! 😢";
  }

  document.getElementById("result").innerText = resultText;
  document.getElementById("conc").innerText = `YOU : ${fullForm(userChoice)} | BOT :${fullForm(userChoice)}`;
}

function fullForm(letter) {
  if (letter === 's') return "Snake";
  if (letter === 'w') return "Water";
  if (letter === 'g') return "Gun";
}


function again() {
  document.getElementById("result").innerText = "Choose One";
  document.getElementById("conc").innerText = 'Have Fun!';
}
