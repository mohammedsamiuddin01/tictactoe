let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new")
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg")
let turno=true;
reset.style.cursor="pointer"
newgamebtn.style.cursor="pointer"
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){ //playerO turn
            box.innerText="O";
            turno=false;
        }
        else{ //playerX turn
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        c++;
        let isw=winner();
        if(c===9 && !isw){
            gameDraw();
        }

    });
});
const dis=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(win)=>{
    msg.innerText=`Congratulations , Winner is ${win}`;
    msgcontainer.classList.remove("hide");
    dis();
}

const winner=()=>{
    for(positon of winpatterns){
        let p1=boxes[positon[0]].innerText;
        let p2=boxes[positon[1]].innerText;
        let p3=boxes[positon[2]].innerText;
        if (p1!=""&&p2!=""&&p3!="") {
            if(p1==p2&&p2==p3){
                console.log("winner is "+p2);
                showwinner(p1);
            }
        }
    }
};
const en=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    c=0;
    turno=true;
    en();
    msgcontainer.classList.add("hide");
}
newgamebtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    document.querySelector(".h").classList.remove("hide")
    disableBoxes();
};