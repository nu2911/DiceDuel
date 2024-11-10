
function theGame() {
//    refresh
    document.location.reload();
}
// theGame();
    
    // taking player names
    alert("who ever gets the highest number wins")
    var p1 = prompt("Player 1, Enter your name!");
    var p2 = prompt("Player 2, Enter your name!");
    
    // naming players
    document.querySelector("#player1").innerHTML= (p1);
    document.querySelector("#player2").innerHTML= (p2);
    



function replay() {


    // dice random no 1-6
    var randomNo1 = Math.floor(Math.random()*6) +1;
    // address of 6 imgs
    var randomDiceImg = 'images/dice'+ randomNo1 +'.png';
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg);

    //2nd dice samething again
    var randomNo2 = Math.floor(Math.random()*6) +1; //1-6
    var randomDiceImg2 = 'images/dice'+ randomNo2 +'.png';
    document.querySelectorAll('img')[1].setAttribute('src', randomDiceImg2);




   

    
    // dice roll winner announcer
    if(randomNo2> randomNo1) {
    document.querySelector("h1").innerHTML = (p2+" Wins! 🚩");
    }

    else if (randomNo1 > randomNo2) {
        document.querySelector("h1").innerHTML = ("🚩 "+p1+" Wins!");   
    } 
    else{
        document.querySelector("h1").innerHTML = ("🏴 Draw! 🏴");
        // 🏴
    }

    


}
replay();