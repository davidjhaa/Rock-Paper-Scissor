// const imageUrl = "images/paper.png";
const rockImg = "images/rock.png";
const paperImg = "images/paper.png";
const scissorImg = "images/scissors.png";
function showContent() {
    // Get the hidden content element
    var content = document.getElementById("rules");
    console.log("button clicked ", content);

    // Toggle the display style
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// document.addEventListener('DOMContentLoaded', playGame);

const game = () => {
    let final = "";
    if(localStorage.getItem("playerScore") == null){
        localStorage.setItem("playerScore",'0');
        localStorage.setItem("computerScore",'0');
    } 
 
    // Function to start game
    const playGame = () => {
        const rock = document.querySelector('.rock');
        const paper = document.querySelector('.paper');
        const scissor = document.querySelector('.scissors');
        const playerOptions = [rock, paper, scissor];
        const computerOptions = ['rock', 'paper', 'scissors']
 
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                console.log(`computer=${computerChoice}  && player=${option.classList.value}` )
 
                // Function to check who wins
                winner(option.classList.value, computerChoice)

                const playerPicked = option.classList.value;
                const pcPicked = computerChoice;

                result(playerPicked, pcPicked);

            })
        })
    }
 
    // Function to decide winner
    const winner = (player, computer) => {
        const playerScoreBoard = document.querySelector('.my_score');
        const computerScoreBoard = document.querySelector('.pc_score');
        if (player === computer) {
            console.log('Tie')
            final = "TIE UP"
            // tie(player, computer);
        }
        else if (player == 'rock') {
            if (computer == 'paper') {
                final = "YOU LOST"
                let count = Number(localStorage.getItem("computerScore"))
                count = count + 1;
                computerScoreBoard.innerHTML = count;
                localStorage.setItem("computerScore",JSON.stringify(count))

            } else {
                console.log('Player Won')
                final = "YOU WIN";
                let count = Number(localStorage.getItem("playerScore"))
                count = count + 1;
                playerScoreBoard.innerHTML = count;
                localStorage.setItem("playerScore",JSON.stringify(count))
            }
        }
        else if (player == 'scissors') {
            if (computer == 'rock') {
                final = "YOU LOST";
                let count = Number(localStorage.getItem("computerScore"))
                count = count + 1;
                computerScoreBoard.innerHTML = count;
                localStorage.setItem("computerScore",JSON.stringify(count))
            } 
            else {
                final = "YOU WIN";
                let count = Number(localStorage.getItem("playerScore"))
                count = count + 1;
                playerScoreBoard.innerHTML = count;
                localStorage.setItem("playerScore",JSON.stringify(count))
            }
        }
        else if (player == 'paper') {
            if (computer == 'scissors') {
                final = "YOU LOST";
                let count = Number(localStorage.getItem("computerScore"))
                count = count + 1;
                computerScoreBoard.innerHTML = count;
                localStorage.setItem("computerScore",JSON.stringify(count))
            } 
            else {
                console.log('Player Won')
                final = "YOU WIN";
                let count = Number(localStorage.getItem("playerScore"))
                count = count + 1;
                playerScoreBoard.innerHTML = count;
                localStorage.setItem("playerScore",JSON.stringify(count))
            }
        }

    }

    // function to display page after option is choosed
    const result = (playerPicked, pcPicked) => {
        const mainDiv = document.querySelector('.main');

        // player choose
        const parentDiv = document.createElement("div");
        const player_picked = document.createElement('img');
        const playerDiv = document.createElement('div');
        const playerTag = document.createElement('h3');
        playerTag.innerHTML = 'YOU PICKED';
        playerDiv.appendChild(playerTag);
        parentDiv.appendChild(playerDiv);

        // middle div
        const resultDiv = document.createElement("div");
        const resulth1 = document.createElement("h1");
        resulth1.innerHTML = " " + final 
        resultDiv.className = "result_div";
        const resulth3 = document.createElement("h3");
        resulth3.innerHTML = "AGAINST PC";
        const playAgain = document.createElement("p");
        playAgain.className = "play_again";
        playAgain.innerHTML = "PLAY AGAIN";
        playAgain.addEventListener("click", () => window.location.href = "index.html")
        resultDiv.appendChild(resulth1);
        resultDiv.appendChild(resulth3);
        resultDiv.appendChild(playAgain);
        parentDiv.appendChild(resultDiv);
        resultDiv.style.marginLeft = "30px";
        resultDiv.style.marginRight = "30px";

        // pc choose
        const pc_picked = document.createElement('img');
        const pcDiv = document.createElement('div'); 
        const pcTag = document.createElement('h3');
        pcTag.innerHTML = "PC PICKED";
        pcDiv.appendChild(pcTag); 
        parentDiv.appendChild(pcDiv);

        player_picked.className = "player_picked";
        pc_picked.className = "pc_picked"
        
        if(playerPicked == 'rock'){
            player_picked.src = rockImg;
            playerDiv.appendChild(player_picked);
        }
        if(playerPicked == 'paper'){
            player_picked.src = paperImg;
            playerDiv.appendChild(player_picked);
        }
        if(playerPicked == 'scissors'){
            player_picked.src = scissorImg;
            playerDiv.appendChild(player_picked);
        }

        if(pcPicked == 'rock'){
            pc_picked.src = rockImg;
            pcDiv.appendChild(pc_picked);
        }
        if(pcPicked == 'paper'){
            pc_picked.src = paperImg;
            pcDiv.appendChild(pc_picked);
        }
        if(pcPicked == 'scissors'){
            pc_picked.src = scissorImg;
            pcDiv.appendChild(pc_picked);
        }

        mainDiv.style.display = "none";
        parentDiv.className = "res";
        document.body.appendChild(parentDiv);

        const candidate = Number(localStorage.getItem("playerScore"));
        const pc = Number(localStorage.getItem("computerScore"));

        if(candidate > pc){
            const nextbtn = document.createElement("p");
            const rulebtn = document.querySelector(".rules_button")
            nextbtn.className = "next";
            nextbtn.innerHTML = "NEXT";
            nextbtn.addEventListener("click", () => window.location.href = "result.html") 
            rulebtn.append(nextbtn);

        }

    }

    playGame();
}


game();

function f(){
    const my_score = document.querySelector('.my_score');
    const pc_score = document.querySelector('.pc_score');

    my_score.innerHTML = localStorage.getItem('playerScore')
    pc_score.innerHTML = localStorage.getItem('computerScore')
}

