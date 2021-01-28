const buttonsArr = document.querySelectorAll(".panel");

for (let i = 0; i < buttonsArr.length; i++) {
    document.querySelectorAll(".panel")[i].addEventListener("click", function(){
        document.querySelectorAll(".panel")[i].classList.add("glow");
        setTimeout(function(){
            document.querySelectorAll(".panel")[i].classList.remove("glow");
        }, 350);
    })
}

document.querySelector(".start-playing").addEventListener("click", main);

function main(){
    var i=1;
    while(i<=2){
        var randNo = Math.floor(Math.random()*4)+1;
        alert(randNo);
        i++;
    }
}