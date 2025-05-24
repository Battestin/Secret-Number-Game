alert('Welcome to the secret number game!');

let maxNumber = 30
let secretNumber = parseInt((Math.random() * maxNumber) + 1);
console.log(secretNumber);

let guess;
let attempts = 1;

// Loop
while (chute != secretNumber) {

    guess = prompt(`Choose a number between 1 and ${maxNumber}`);
    // Conditional
    if (guess == secretNumber) {
        break;
    } 
    else {
        if(guess > secretNumber){
            alert('Too high! Try again.');
            
        }
        else{   
            alert('Too low! Try again.');
        }
        attempts++;
    }

}

let attempt_world = attempts > 1 ? 'attempts' : 'attempt'; // Ternary operator

if (attempts == 1) {
    alert(`You guessed it right! It was ${secretNumber} in ${attempts} ${attempt_world}!`);
}
else{
    alert(`You guessed it right! It was ${secretNumber} in ${attempts} ${attempt_world}!`);
}
