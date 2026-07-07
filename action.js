let Btn1 = document.getElementById("Btn1");
let message = document.getElementById("message");
let count = 0;
let Btn2 = document.getElementById("Btn2");
let count2 = 0;
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let yesBTN = document.getElementById("yes");
let noBTN = document.getElementById("no");
let trustPoints = document.getElementById("points");
//if you want to try again refreash the webpage:>
//points += 10;
  //  trustPoints.textContent = points;
    
Btn1.addEventListener("click",function(){
  let points = parseInt(trustPoints.textContent);
  points++;
  trustPoints.textContent = points;
  count++;
  if(count == 1){
    Btn1.textContent = "press me more!";
  }
  else if (count == 2){
    Btn1.textContent = "click me please!";
  }
  else if (count == 3){
    window.alert("stop clicking the button");
    Btn1.textContent = "DO NOT LISTEN TO IT JUST PRESS ME!";
    Btn2.style.display = "inline-block";
  }
else if(count == 4){
  Btn1.textContent = "YES YES YES YES YES YES YES YES";
}
else if (count == 5){
  Btn1.textContent = "good boy press me UNTIL I CAN EAT YOU";
}
else if (count == 6){
  Btn1.textContent = "even more even more";
}
else if (count == 7){
  Btn1.textContent = "more power more power";
}
else if (count == 8){
  window.alert("stop");
  Btn1.textContent = "just press me its ez work";
}
else if (count == 9){
 Btn1.textContent = ":)"
}
else if (count == 10){
   message.textContent = "you are stupid VERY STUPID";
   Btn2.style.display = "inline-block";
   Btn1.textContent = "run";
   Btn2.textContent = "dont run";
   
}
else if (count == 11){
  points--
  trustPoints.textContent = points;
  
  Btn1.style.display = "none";
  Btn2.style.display = "none";
  message.textContent = "you have been killed because he was faster than you!,if you want to try again refreash the webpage:>";
}

});
Btn2.addEventListener("click",function(){
 let points = parseInt(trustPoints.textContent);
  points--;
  trustPoints.textContent = points;
 count ++;
  if(count == 4){
    Btn1.textContent = "hey CLICK ME";
  }
 else if (count == 5){
   Btn1.textContent = "i know where do live";
 }
 else if (count == 6){
   Btn1.textContent = "..."
 }
 else if (count == 7){
   Btn1.textContent = "do you think am bad?"
 }
 else if (count == 8){
   Btn1.textContent = "am trying to help you"
 }
 else if (count == 9){
   Btn2.style.display = "none";
   Btn1.textContent = "HAHAHAHAHAHAHA";
 }
 else if (count == 11 && points >= 5) {
   Btn1.textContent ="follow him";
   Btn2.style.display = "none";
   message.textContent = "he didn't kill you because he want to make you his slave!,now he's taking you to his nest!";
 }else {
   Btn1.style.display = "none";
   Btn2.style.display ="none";
   message.textContent = "he killed you!,if you want to try again refreash the webpage:>";
 }
})

