const computerChoiceDisplay=document.getElementById("computer-choice");
const userChoiceDisplay=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");
const possibleChoice=document.querySelectorAll('button');
let userChoice;
let computerChoice;
let results;
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.textContent;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1;
    computerChoice=(randomNumber==1)?'Rock':(randomNumber==2)?'Paper':'Scissor';
    computerChoiceDisplay.innerHTML=computerChoice;
}
function getResult(){
    results=(computerChoice==='Paper'&&userChoice==='Rock')?"Computer Wins":(computerChoice==='Scissor'&&userChoice==='Paper')?"Computer Wins":(computerChoice==='Rock'&&userChoice==='Scissor')?"Computer Wins":(computerChoice===userChoice)?"It's Draw!!":"User Wins!"
    resultDisplay.innerHTML=results;
}

// paper ,rock
//scissor,paper
//rock,scissor
