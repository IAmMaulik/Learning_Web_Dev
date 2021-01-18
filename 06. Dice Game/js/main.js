a = Math.floor(Math.random()*6+1);
b = Math.floor(Math.random()*6+1);


if (a>b) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}

else if (b>a) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}

else{
    document.querySelector("h1").textContent = "It's A Draw!";
}

document.querySelector(".img1").setAttribute("src", "./images/dice"+a+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+b+".png");
