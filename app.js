let yourScore =0;
let comScore=0;
const choices = document.querySelectorAll(".choice");
const comChoice =() =>{
    const pasand = ["stone","paper","scissors"]
    const rendamId = Math.floor(Math.random()*3);
    return pasand[rendamId];
}
const msg = document.querySelector("#result");
const your = document.querySelector("#your");
const com = document.querySelector("#com");
const drow = ()=>{
    console.log("drow");
    msg.innerText = "match is drow "

}
const result = (win)=>{
    console.log(win);
    if(win==true){
        yourScore++;
        console.log("your score = " );
        console.log(yourScore);
         msg.innerText = "you win"
         your.innerText=yourScore;
    }
    else{
        comScore++;
        console.log("com score = " );
        console.log(comScore);
         msg.innerText = "you lose"
         com.innerText = comScore;
    }

}
const gamePlay = (userchoice)=>{
    console.log(userchoice);
    const compasand = comChoice();
    console.log(compasand);
    let win = true;
    if(userchoice===compasand){
        drow();
    }
    else{
        if(userchoice==="stone"){
            //paper,scissors
            win = compasand==="paper"?false:true;
        }
        else if (userchoice==="paper"){
            //stone,scissors
            win = compasand==="scissors"?false:true;
        }
        else if(userchoice==="scissors"){
            //paper,stone
            win = compasand==="stone"?false:true;
        }
        result(win);
    }
   
}   
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
       gamePlay(userchoice);
    })
})