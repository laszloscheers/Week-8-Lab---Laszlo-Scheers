function play(){

    var answer=prompt("Enter Rock, Paper or Sissors to play the game.");
    var randomAnswer= Math.floor((Math.random() * 3) + 1);
    //alert(randomAnswer);
    var computerOption;
    
    if(randomAnswer==1){
        computerOption="Rock";
    } else if(randomAnswer==2){
        computerOption="Paper";
    } else{
        computerOption="Scissors";
    }
    alert("The computer has choosen "+computerOption+" and you have choosen "+answer+".");

    if(answer==computerOption){
        alert("That's a draw!");
    } else if(answer=="Rock"){
        if(computerOption=="Scissors"){
            alert("You win!");
        } else{
            alert("You loose!");
        }
    } else if(answer=="Paper"){
        if(computerOption=="Rock"){
            alert("You win!");
        } else{
            alert("You loose!");
        }
    } else if(answer=="Scissors" && computerOption=="Paper"){
        if(computerOption=="Paper"){
            alert("You win!");
        } else{
            alert("You loose!");
        }
    } else{
        alert("Please, enter a valid input.");
    }

}
function processTranslation(){

}