function play() {
  var diceNo1 = Math.floor(Math.random() * 6) + 1;
  var diceNo2 = Math.floor(Math.random() * 6) + 1;
  alert(diceNo1);
  alert(diceNo2);
  document
    .getElementById("img1")
    .setAttribute("src", "./images/dice"+diceNo1+".png");
  document
    .getElementById("img2")
    .setAttribute("src", "./images/dice"+diceNo2+".png");

    if(diceNo1 > diceNo2){
        document.getElementById("result").innerHTML = "Player 1 Wins <img id='resultImg' src='' class='resultImg'/>";
        document.getElementById("resultImg").setAttribute("src","./images/red-flag.png");
    }else if(diceNo1 < diceNo2){
        document.getElementById("result").innerHTML = "Player 2 Wins <img id='resultImg' src='' class='resultImg'/>"
        document.getElementById("resultImg").setAttribute("src","./images/red-flag.png");
    }else if(diceNo1 === diceNo2){
        document.getElementById("result").innerHTML = "Draw! <img id='resultImg' src='' class='resultImg'/>";
        document.getElementById("resultImg").setAttribute("src","./images/whistle.png");
    }
}
