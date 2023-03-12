//Adds a function which returns a number in the range of 1-5 for the computer choice//
function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}

//Addss the constant variables which will be used in the game//
const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const SPOCK = 'SPOCK';
const LIZARD = 'LIZARD';
const OPTIONS = {
    1: ROCK,
    2: SCISSORS,
    3: PAPER,
    4: SPOCK,
    5: LIZARD
};
//Variable stores the users input//
let userChoiceID = '';

//Event listener created for when the user opens the site, event begins when user clicks option//
window.onload = () => {
    const userOptions = document.querySelectorAll('.user-option');
//Event listener which handles user input//
    userOptions.forEach(el => el.addEventListener('click', event => {
        userChoiceID = event.target.id;
    }));
//Event listener added to the play button along with its variables. This is used to determine the result//
    const playButton = document.querySelector('#play');

    playButton.addEventListener('click', () => {
        const computerChoiceID = getComputerChoice();
        const computerChoice = OPTIONS[computerChoiceID];
        const computerChoiceElement = document.querySelector('#computer-choice');
        const output = document.querySelector('#output');
        const userChoice = OPTIONS[userChoiceID];

        let result = '';
//Adds the variables associated with the computers choice//
        computerChoiceElement.innerHTML = OPTIONS[computerChoiceID];
//Switch created to use what determines the winner of the game. Logic for the game created below//
        switch (`${computerChoice}-${userChoice}`) {
            case `${ROCK}-${ROCK}`:
            case `${SCISSORS}-${SCISSORS}`:
            case `${PAPER}-${PAPER}`:
            case `${SPOCK}-${SPOCK}`:
            case `${LIZARD}-${LIZARD}`:
                result = 'TIE'
                break;
            case `${ROCK}-${SCISSORS}`:
            case `${ROCK}-${LIZARD}`:
            case `${SCISSORS}-${PAPER}`:
            case `${SCISSORS}-${LIZARD}`:
            case `${PAPER}-${ROCK}`:
            case `${PAPER}-${SPOCK}`:
            case `${SPOCK}-${ROCK}`:
            case `${SPOCK}-${SCISSORS}`:
            case `${LIZARD}-${PAPER}`:
            case `${LIZARD}-${SPOCK}`:
                result = 'COMPUTER WIN'
                break;
            case `${ROCK}-${PAPER}`:
            case `${ROCK}-${SPOCK}`:
            case `${SCISSORS}-${ROCK}`:
            case `${SCISSORS}-${SPOCK}`:
            case `${PAPER}-${SCISSORS}`:
            case `${PAPER}-${LIZARD}`:
            case `${SPOCK}-${PAPER}`:
            case `${SPOCK}-${LIZARD}`:
            case `${LIZARD}-${ROCK}`:
            case `${LIZARD}-${SCISSORS}`:
                result = 'YOU WIN'
                break;
            default:
                result = 'SOMETHING WRONG. TRY AGAIN.'
        }
//Outputs the result on screen to show user the result of the game//
        output.innerHTML = result;
    })
}