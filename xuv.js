let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("game is startd");
        started=true;

        levelUp();
    }
});


function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // random buttom generate karo

    let randIdx=Math.floor(Math.random()*4);
    let randColour=btns[randIdx];

    let randBtn=document.querySelector(`.${randColour}`)

    gameSeq.push(randColour);
    console.log(gameSeq);

     gameFlash(randBtn);

}

function  gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function cheakAns(idx)
{
   

    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else
    {
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br> Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reseat();
    }


}


function btnPress()
{
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    cheakAns(userSeq.length-1);
}


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function reseat()
{
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}

