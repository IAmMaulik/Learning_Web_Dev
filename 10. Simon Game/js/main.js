const buttonsArr = document.querySelectorAll(".panel");
var buttonsPushedComp = [];
var buttonsPushedUser = [];

for (let i = 0; i < buttonsArr.length; i++) {
    document.querySelectorAll(".panel")[i].addEventListener("click", function(){
        buttonsPushedUser.push(i);
        document.querySelectorAll(".panel")[i].classList.add("glow");
        setTimeout(function(){
            document.querySelectorAll(".panel")[i].classList.remove("glow");
        }, 350);
    });
}

document.querySelector(".start-playing").addEventListener("click", main);

function main(){
    var i=1;
    const maxLevels = 2;
    while(i<=maxLevels){
        var score = document.querySelector(".curr-score").textContent;
        for (let j=0; j<score; j++) {
            var randomNo = Math.floor(Math.random()*4);
            document.querySelectorAll(".panel")[randomNo].classList.add("glow");
            setTimeout(function(){
                document.querySelectorAll(".panel")[i].classList.remove("glow");
            }, 350);
            buttonsPushedComp.push(randomNo);
        }
        for (let k = 0; k < buttonsPushedComp.length; k++) {
            const element = buttonsPushedComp[k];
            if (element !== buttonsPushedUser[k]) {
                break;
            }
        }
        score++;
        document.querySelector(".curr-score").textContent = score;
        i++;
    };
    document.querySelector(".curr-score").textContent = "You Lose!";
}