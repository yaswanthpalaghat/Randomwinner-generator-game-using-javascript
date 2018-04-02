//Global varibles
var contestants = [];
var entrants = "";

//Create the click event to add contestant to array
var event1 = document.getElementById("addName");
    event1.addEventListener('click',addContestant,false);

//Create the click event to pick a winner at random
var event2 = document.getElementById("generateWinner");
    event2.addEventListener('click',pickWinner,false);

//Create function for adding the contestants
function addContestant(){
    var addPerson = document.getElementById("contestantName").value; 
    contestants.push(addPerson);
    entrants += "<li>" + addPerson + "</li>"
    document.getElementById("output").innerHTML = "Entering this incredible competition is: <br><ul>" + entrants + "</ul>";
}

//Generate a random winner
function pickWinner() {
    var winner = contestants[Math.floor(Math.random() * contestants.length)];
    document.getElementById("output2").innerHTML = "<h2>The winner is " + winner + "!!!</h2>";
}