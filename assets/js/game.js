// let user1Choise
// let user2Choise
// let whosTurn = 1

function play() {


    let playeronename = document.getElementById("playeronename").value;
    let playertwoname = document.getElementById("playertwoname").value;

    //let playeronename = playeronename.charAt(0).toUpperCase + playeronename.slice(1);

document.getElementById('results').innerHTML = playeronename + ' choose your fighter'

let playerOne = prompt(playeronename +', Write "R" for Rock, "P" for Paper and S for Scissors.');
    let playerTwo = prompt(playertwoname + ', Write "R" for Rock, "P" for Paper and S for Scissors.');

// Tie
if (playerOne === playerTwo) {
    document.getElementById('results').innerHTML = 'It\'s a tie';
}

// Win
if ((playerOne.toUpperCase() === 'R') && (playerTwo.toUpperCase() === 'S')) {
    document.getElementById('results').innerHTML = 'Rock beats scissors! ' + playeronename + ' wins!';
}

else if ((playerOne.toUpperCase() === 'S') && (playerTwo.toUpperCase() === 'R')) {
    document.getElementById('results').innerHTML = 'Rock beats scissors! ' + playertwoname + ' wins!';
}

if ((playerOne.toUpperCase() === 'P') && (playerTwo.toUpperCase() === 'R')) {
    document.getElementById('results').innerHTML = 'Paper beats rock! ' + playeronename + ' wins!';
}

else if ((playerOne.toUpperCase() === 'R') && (playerTwo.toUpperCase() === 'P')) {
    document.getElementById('results').innerHTML = 'Paper beats rock! ' + playertwoname + ' wins!';
}

if ((playerOne.toUpperCase() === 'S') && (playerTwo.toUpperCase() === 'P')) {
    document.getElementById('results').innerHTML = 'Scissors beats paper! ' + playeronename + ' wins!';
}

else if ((playerOne.toUpperCase() === 'P') && (playerTwo.toUpperCase() === 'S')) {
    document.getElementById('results').innerHTML = 'Scissors beats paper! ' + playertwoname + ' wins!';
}
    
}


// const init = () => {
//     document.querySelector('.fa-hand-rock').addEventListener('click', () => {
//         if (whosTurn ===1) {
//             user1Choise = 'rock'
//             else {
//                 user2Choise = 'rock'
//             }
//         }
//     })

// const setChoice = (user, choice) => {
//     if (user === 1) {
//         user1Choice = choice
//     } else {
//         user2Choice = choice
//     }
// }






//     document.querySelector('.fa-hand-paper').addEventListener('click', () => {
//         console.log('clicked!')
//     })

//     document.querySelector('.fa-hand-scissors').addEventListener('click', () => {
//         console.log('clicked!')
//     })
// }