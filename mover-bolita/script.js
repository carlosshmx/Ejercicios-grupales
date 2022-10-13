
let bolita = document.getElementById("bolita");
var screenWidth = document.body.clientWidth;
var screenHeight = document.body.clientHeight;
let topNew = (screenHeight/2)-50;
let leftNew = (screenWidth/2)-50;

bolita.style.top = topNew + "px";
bolita.style.left = leftNew + "px";

document.addEventListener("keyup", (evt)=>{
   
    console.log(screenWidth);
    if(evt.key == "ArrowDown"){
        topNew = Math.min(topNew+10, screenHeight-100);
        bolita.style.top = topNew + "px";
    }else if(evt.key == "ArrowUp" && topNew > 0){
        topNew = topNew-20;
        bolita.style.top = topNew + "px";
    }else if(evt.key == "ArrowRight"){
        leftNew = Math.min(leftNew+20, screenWidth-100);
        bolita.style.left = leftNew + "px";
    }else if(evt.key == "ArrowLeft" && leftNew > 0 ){
        leftNew = leftNew-20;
        bolita.style.left = leftNew + "px";
    }

    Math.min(topNew, screenHeight)

})