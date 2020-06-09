function getRandomNumber() {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

function rollDie() {
  const dieRoll = getRandomNumber();
  alert(dieRoll);
  const dieRoll2 = getRandomNumber();
  alert(dieRoll2);
  console.log(dieRoll + ', ' + dieRoll2);
}

rollDie();
rollDie();
rollDie();