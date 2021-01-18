function buttonClick(){
    alert("The button has been clicked");
}

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick);
}