var gnum = document.getElementById("gnum")
var result = document.getElementById("result")
var randomnumber = Math.floor(Math.random()*10)+1
var score = document.getElementById("score")
var totalscore=10

function check(){
 var enterednumber = gnum.value
 if(randomnumber==enterednumber){
    console.log("You are Right")
    result.textContent="You are Right"
    alert("you won...")
 }
 else{
    totalscore=totalscore-1
    score.textContent="Score is " + totalscore
    result.textContent="You are Wrong"
 }
}