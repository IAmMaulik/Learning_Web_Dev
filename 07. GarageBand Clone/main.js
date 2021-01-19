function buttonClick(){
    this.textContent = "M";
}

var numberOfItems = document.querySelectorAll(".music").length;

for(var i=0; i<numberOfItems; i++){
    document.querySelectorAll(".music")[i].addEventListener("click", buttonClick);
}




// var sound = new Audio("./sounds/tom-1.mp3");
// sound.play();