let homeScore = document.getElementById("homeScoreNumber");
let guestScore = document.getElementById("guestScoreNumber"); 
let count = 0;

function plusOneHome(){
    count+=1;
    homeScore.textContent = count;
    
}
function plusTwoHome(){
    count+=2;
    homeScore.textContent = count;
    
}
function plusThreeHome(){
    count+=3;
    homeScore.textContent = count;
    
}
function plusOneGuest(){
    count+=1;
    guestScore.textContent = count;
    
}
function plusTwoGuest(){
    count+=2;
    guestScore.textContent = count;
    
}
function plusThreeGuest(){
    count+=3;
    guestScore.textContent = count;
    
}