// Meme Kit

let numberOfDrumButtons=document.querySelectorAll(".meme").length;

for(let i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".meme")[i].addEventListener("click",function (){
    let buttonInnerText=this.innerText;
    makeSound(buttonInnerText);
    buttonAnimation(buttonInnerText);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(keyword){
    switch (keyword) {
        case "e":
            let elvish=new Audio("memeaudios/elvishmeme.mp3");
            elvish.play();
            break;
        case "b":
            let bjogi=new Audio("memeaudios/bhupendrajogi.mp3");
            bjogi.play();
            break;
        case "a":
            let aye=new Audio("memeaudios/ayememe.mp3");
            aye.play();
            break;
        case "v":
            let vedya=new Audio("memeaudios/vedyameme.mp3");
            vedya.play();
            break;
        case "k":
            let deepak=new Audio("memeaudios/bhikmangya.mp3");
            deepak.play();
            break;
        case "u":
            let ewwbrother=new Audio("memeaudios/uhhbrother.mp3");
            ewwbrother.play();
            break;
        case "p":
            let panvel=new Audio("memeaudios/panvelmeme.mp3");
            panvel.play();
            break;
        default:
            break;
    }
}



function buttonAnimation(currentkey){
    var activeButton=document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },1000)
}








